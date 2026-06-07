import sqlite3 from "sqlite3";
import { join } from "path";
import os from "os";
import bcrypt from "bcryptjs";
import { env } from "../config/index.js";
import { Pool } from "pg";

const usePostgres = !!process.env.DATABASE_URL;

const defaultDbPath = process.env.VERCEL
  ? join(os.tmpdir(), "database.sqlite")
  : join(process.cwd(), "database.sqlite");
const dbPath = env.databasePath ?? defaultDbPath;

let sqliteDb: sqlite3.Database | null = null;
let pgPool: Pool | null = null;

if (usePostgres) {
  pgPool = new Pool({ connectionString: process.env.DATABASE_URL });
  pgPool
    .connect()
    .then((client: any) => {
      client.release();
      console.log("Connected to Postgres database via DATABASE_URL");
      initializeDatabase().catch((err) => console.error("DB init failed:", err));
    })
    .catch((err: any) => {
      console.error("Postgres connection failed:", err.message);
    });
} else {
  const sqlite3Verbose = sqlite3.verbose();
  sqliteDb = new sqlite3Verbose.Database(dbPath, (err) => {
    if (err) {
      console.error("SQLite database connection failed:", err.message);
    } else {
      console.log("Connected to the SQLite database at:", dbPath);
      initializeDatabase().catch((err) => console.error("DB init failed:", err));
    }
  });
}

export const query = {
  async run(sql: string, params: any[] = []) {
    if (pgPool) {
      const res = await pgPool.query(sql, params);
      return { lastID: (res.rows[0] && (res.rows[0] as any).id) || null, changes: res.rowCount };
    }

    return new Promise<{ lastID: number | null; changes: number }>((resolve, reject) => {
      if (!sqliteDb) return reject(new Error("SQLite DB not initialized"));
      sqliteDb.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ lastID: (this as any).lastID ?? null, changes: this.changes });
      });
    });
  },

  async get<T>(sql: string, params: any[] = []): Promise<T | undefined> {
    if (pgPool) {
      const res = await pgPool.query(sql, params);
      return (res.rows[0] as T) ?? undefined;
    }

    return new Promise((resolve, reject) => {
      if (!sqliteDb) return reject(new Error("SQLite DB not initialized"));
      sqliteDb.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row as T | undefined);
      });
    });
  },

  async all<T>(sql: string, params: any[] = []): Promise<T[]> {
    if (pgPool) {
      const res = await pgPool.query(sql, params);
      return res.rows as T[];
    }

    return new Promise((resolve, reject) => {
      if (!sqliteDb) return reject(new Error("SQLite DB not initialized"));
      sqliteDb.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows as T[]);
      });
    });
  },
};

async function initializeDatabase(): Promise<void> {
  if (pgPool) {
    await pgPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT DEFAULT 'user',
        verified INTEGER DEFAULT 0,
        verification_token TEXT,
        reset_token TEXT,
        reset_token_expiry TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pgPool.query(`
      CREATE TABLE IF NOT EXISTS consultations (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        course TEXT NOT NULL,
        message TEXT,
        status TEXT DEFAULT 'pending',
        createdAt TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pgPool.query(`
      CREATE TABLE IF NOT EXISTS activity_logs (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        action TEXT NOT NULL,
        details TEXT NOT NULL,
        timestamp TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    console.log("Postgres tables initialized.");

    const { rows } = await pgPool.query(`SELECT id FROM users WHERE role = 'admin' LIMIT 1`);
    if (rows.length === 0 && env.seedAdminEmail && env.seedAdminPassword) {
      const adminId = "usr_admin_" + Math.random().toString(36).slice(2, 9);
      const hashed = bcrypt.hashSync(env.seedAdminPassword, 10);
      await pgPool.query(
        `INSERT INTO users (id, name, email, password_hash, role, verified) VALUES ($1, $2, $3, $4, $5, $6)`,
        [adminId, "System Admin", env.seedAdminEmail, hashed, "admin", 1]
      );
      console.log(`Seeded admin account: Email: ${env.seedAdminEmail}`);
    }
  } else {
    if (!sqliteDb) throw new Error("SQLite DB not initialized");
    sqliteDb.serialize(() => {
      sqliteDb.run(`
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          role TEXT DEFAULT 'user',
          verified INTEGER DEFAULT 0,
          verification_token TEXT,
          reset_token TEXT,
          reset_token_expiry TEXT,
          created_at TEXT DEFAULT (datetime('now', 'localtime')),
          updated_at TEXT DEFAULT (datetime('now', 'localtime'))
        )
      `);

      sqliteDb.run(`
        CREATE TABLE IF NOT EXISTS consultations (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          course TEXT NOT NULL,
          message TEXT,
          status TEXT DEFAULT 'pending',
          createdAt TEXT DEFAULT (datetime('now', 'localtime'))
        )
      `);

      sqliteDb.run(`
        CREATE TABLE IF NOT EXISTS activity_logs (
          id TEXT PRIMARY KEY,
          user_id TEXT,
          action TEXT NOT NULL,
          details TEXT NOT NULL,
          timestamp TEXT DEFAULT (datetime('now', 'localtime'))
        )
      `);

      console.log("SQLite tables initialized.");

      sqliteDb.get("SELECT id FROM users WHERE role = 'admin' LIMIT 1", [], (err, row) => {
        if (err) {
          console.error("Error checking for admin user:", err.message);
          return;
        }
        if (!row && env.seedAdminEmail && env.seedAdminPassword) {
          const adminId = "usr_admin_" + Math.random().toString(36).slice(2, 9);
          const adminEmail = env.seedAdminEmail;
          const adminPass = env.seedAdminPassword;
          const hashed = bcrypt.hashSync(adminPass, 10);

          sqliteDb.run(
            `INSERT INTO users (id, name, email, password_hash, role, verified) VALUES (?, ?, ?, ?, ?, ?)`,
            [adminId, "System Admin", adminEmail, hashed, "admin", 1],
            (err2) => {
              if (err2) {
                console.error("Failed to seed default admin user:", err2.message);
              } else {
                console.log(`Seeded admin account: Email: ${adminEmail}`);
              }
            }
          );
        } else if (!row && env.isProduction) {
          console.log(
            "Skipping admin seeding because SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD are not set."
          );
        }
      });
    });
  }
}
