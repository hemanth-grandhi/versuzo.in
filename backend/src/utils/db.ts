import bcrypt from "bcryptjs";
import { env } from "../config/index.js";
import { Pool } from "pg";

// PostgreSQL-only mode. DATABASE_URL is required for production.
if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  throw new Error("DATABASE_URL environment variable is required in production");
}

// Validate and parse DATABASE_URL format
function validateDatabaseURL(url: string): { valid: boolean; error?: string; host?: string; database?: string } {
  if (!url) {
    return { valid: false, error: "DATABASE_URL is empty" };
  }

  // Check for placeholder or invalid values
  if (url === "base" || url === "postgres://base" || url.includes("YOUR_") || url.includes("PLACEHOLDER")) {
    return { 
      valid: false, 
      error: `DATABASE_URL contains placeholder or invalid value: "${url}". Use format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE` 
    };
  }

  // Basic format validation
  if (!url.startsWith("postgres://") && !url.startsWith("postgresql://")) {
    return { 
      valid: false, 
      error: `DATABASE_URL must start with "postgres://" or "postgresql://". Got: "${url.substring(0, 50)}"` 
    };
  }

  try {
    const urlObj = new URL(url);
    const host = urlObj.hostname;
    const database = urlObj.pathname.replace("/", "");

    if (!host) {
      return { valid: false, error: "DATABASE_URL has no hostname" };
    }

    if (!database) {
      return { valid: false, error: "DATABASE_URL has no database name" };
    }

    return { valid: true, host, database };
  } catch (err: any) {
    return { valid: false, error: `Invalid DATABASE_URL format: ${err.message}` };
  }
}

let pgPool: Pool | null = null;

if (process.env.DATABASE_URL) {
  const validation = validateDatabaseURL(process.env.DATABASE_URL);
  
  if (!validation.valid) {
    console.error(`❌ DATABASE_URL Validation Error: ${validation.error}`);
    console.error(`   Current DATABASE_URL: ${process.env.DATABASE_URL.substring(0, 50)}${process.env.DATABASE_URL.length > 50 ? "..." : ""}`);
    console.error(`   Expected Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE`);
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Invalid DATABASE_URL: ${validation.error}`);
    }
    // Don't create pool with invalid URL in development either
    console.warn(`⚠️  Database operations will be unavailable until DATABASE_URL is fixed.`);
  } else {
    console.log(`✓ DATABASE_URL validation passed: Host=${validation.host}, Database=${validation.database}`);
    pgPool = new Pool({ connectionString: process.env.DATABASE_URL });
    pgPool
      .connect()
      .then((client: any) => {
        client.release();
        console.log("✓ Successfully connected to Postgres database via DATABASE_URL");
        initializeDatabase().catch((err) => console.error("DB init failed:", err));
      })
      .catch((err: any) => {
        console.error("✗ Postgres connection failed:", err.message);
        if (err.message.includes("ENOTFOUND") || err.message.includes("getaddrinfo")) {
          console.error("  → DNS lookup failed. Check DATABASE_URL hostname is correct and accessible.");
          console.error(`  → Hostname: ${validation.host}`);
        }
        if (err.message.includes("ECONNREFUSED")) {
          console.error("  → Connection refused. Check if PostgreSQL server is running and port is correct.");
        }
        if (err.message.includes("password")) {
          console.error("  → Authentication failed. Check DATABASE_URL credentials.");
        }
      });
  }
} else {
  console.warn("⚠️  DATABASE_URL not set. Database operations will fail. Required format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE");
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
