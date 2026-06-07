import sqlite3 from "sqlite3";
import { join } from "path";
import os from "os";
import bcrypt from "bcryptjs";
import { env } from "../config/index.js";

const defaultDbPath = process.env.VERCEL
  ? join(os.tmpdir(), "database.sqlite")
  : join(process.cwd(), "database.sqlite");
const dbPath = env.databasePath ?? defaultDbPath;

// Enable verbosity for better error logging in dev mode
const sqlite3Verbose = sqlite3.verbose();

export const db = new sqlite3Verbose.Database(dbPath, (err) => {
  if (err) {
    console.error("SQLite database connection failed:", err.message);
  } else {
    console.log("Connected to the SQLite database at:", dbPath);
    initializeDatabase();
  }
});

/**
 * Wraps callback-based sqlite3 methods into modern Promise-based functions
 */
export const query = {
  run(sql: string, params: any[] = []): Promise<{ lastID: number; changes: number }> {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ lastID: this.lastID, changes: this.changes });
      });
    });
  },

  get<T>(sql: string, params: any[] = []): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row as T | undefined);
      });
    });
  },

  all<T>(sql: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows as T[]);
      });
    });
  }
};

function initializeDatabase(): void {
  db.serialize(() => {
    // 1. Create users table
    db.run(`
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

    // 2. Create consultations table
    db.run(`
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

    // 3. Create activity_logs table
    db.run(`
      CREATE TABLE IF NOT EXISTS activity_logs (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        action TEXT NOT NULL,
        details TEXT NOT NULL,
        timestamp TEXT DEFAULT (datetime('now', 'localtime'))
      )
    `);

    console.log("SQLite tables initialized.");

    // Seed default admin user if none exists
    db.get("SELECT id FROM users WHERE role = 'admin' LIMIT 1", [], (err, row) => {
      if (err) {
        console.error("Error checking for admin user:", err.message);
        return;
      }
      if (!row && env.seedAdminEmail && env.seedAdminPassword) {
        const adminId = "usr_admin_" + Math.random().toString(36).slice(2, 9);
        const adminEmail = env.seedAdminEmail;
        const adminPass = env.seedAdminPassword;
        const hashed = bcrypt.hashSync(adminPass, 10);

        db.run(
          `INSERT INTO users (id, name, email, password_hash, role, verified) VALUES (?, ?, ?, ?, ?, ?)`,
          [adminId, "System Admin", adminEmail, hashed, "admin", 1],
          (err2) => {
            if (err2) {
              console.error("Failed to seed default admin user:", err2.message);
            } else {
              console.log(`Seeded admin account:
  Email: ${adminEmail}
  Password: ${adminPass}
`);
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
