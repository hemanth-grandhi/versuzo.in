import { query } from "../utils/db.js";

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: string;
  verified: number;
  verification_token: string | null;
  reset_token: string | null;
  reset_token_expiry: string | null;
  created_at?: string;
  updated_at?: string;
}

export class UserRepository {
  async create(user: {
    id: string;
    name: string;
    email: string;
    password_hash: string;
    role?: string;
    verified?: number;
    verification_token?: string | null;
  }): Promise<UserRecord> {
    const role = user.role || "user";
    const verified = user.verified || 0;
    const verification_token = user.verification_token || null;

    await query.run(
      `INSERT INTO users (id, name, email, password_hash, role, verified, verification_token) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [user.id, user.name, user.email.toLowerCase().trim(), user.password_hash, role, verified, verification_token]
    );

    const created = await this.findById(user.id);
    if (!created) throw new Error("Failed to create user");
    return created;
  }

  async findByEmail(email: string): Promise<UserRecord | undefined> {
    return query.get<UserRecord>("SELECT * FROM users WHERE email = ?", [email.toLowerCase().trim()]);
  }

  async findById(id: string): Promise<UserRecord | undefined> {
    return query.get<UserRecord>("SELECT * FROM users WHERE id = ?", [id]);
  }

  async findByVerificationToken(token: string): Promise<UserRecord | undefined> {
    return query.get<UserRecord>("SELECT * FROM users WHERE verification_token = ?", [token]);
  }

  async findByResetToken(token: string): Promise<UserRecord | undefined> {
    return query.get<UserRecord>("SELECT * FROM users WHERE reset_token = ?", [token]);
  }

  async update(id: string, updates: Partial<UserRecord>): Promise<UserRecord> {
    const fields: string[] = [];
    const values: any[] = [];

    const allowedKeys: (keyof UserRecord)[] = [
      "name",
      "email",
      "password_hash",
      "role",
      "verified",
      "verification_token",
      "reset_token",
      "reset_token_expiry",
    ];

    for (const key of allowedKeys) {
      if (updates[key] !== undefined) {
        fields.push(`${key} = ?`);
        if (key === "email" && typeof updates[key] === "string") {
          values.push((updates[key] as string).toLowerCase().trim());
        } else {
          values.push(updates[key]);
        }
      }
    }

    if (fields.length === 0) {
      const existing = await this.findById(id);
      if (!existing) throw new Error("User not found");
      return existing;
    }

    fields.push("updated_at = datetime('now', 'localtime')");
    values.push(id);

    await query.run(`UPDATE users SET ${fields.join(", ")} WHERE id = ?`, values);

    const updated = await this.findById(id);
    if (!updated) throw new Error("User update failed");
    return updated;
  }

  async findAll(): Promise<UserRecord[]> {
    return query.all<UserRecord>(
      "SELECT id, name, email, role, verified, created_at FROM users ORDER BY created_at DESC"
    );
  }
}

export const userRepository = new UserRepository();
