import bcrypt from "bcryptjs";
import { env } from "../config/index.js";
import { Pool } from "pg";

// PostgreSQL-only mode. DATABASE_URL is required for production.
if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  throw new Error("DATABASE_URL environment variable is required in production");
}

let pgPool: Pool | null = null;

if (process.env.DATABASE_URL) {
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
  console.warn("DATABASE_URL not set. Database operations will fail.");
}

export const query = {
  async run(sql: string, params: any[] = []) {
    if (!pgPool) {
      throw new Error("Database not initialized. DATABASE_URL is required.");
    }
    const res = await pgPool.query(sql, params);
    return { lastID: (res.rows[0] && (res.rows[0] as any).id) || null, changes: res.rowCount };
  },

  async get<T>(sql: string, params: any[] = []): Promise<T | undefined> {
    if (!pgPool) {
      throw new Error("Database not initialized. DATABASE_URL is required.");
    }
    const res = await pgPool.query(sql, params);
    return (res.rows[0] as T) ?? undefined;
  },

  async all<T>(sql: string, params: any[] = []): Promise<T[]> {
    if (!pgPool) {
      throw new Error("Database not initialized. DATABASE_URL is required.");
    }
    const res = await pgPool.query(sql, params);
    return res.rows as T[];
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
    console.warn("PostgreSQL not configured. Database operations will fail. Please set DATABASE_URL.");
  }
}
