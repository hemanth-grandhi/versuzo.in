import { query } from "../utils/db.js";

export interface LogRecord {
  id: string;
  user_id: string | null;
  action: string;
  details: string;
  timestamp: string;
}

export class LogRepository {
  async create(user_id: string | null, action: string, details: any): Promise<LogRecord> {
    const id = `log_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const detailsStr = typeof details === "string" ? details : JSON.stringify(details);
    const timestamp = new Date().toISOString();

    await query.run(
      `INSERT INTO activity_logs (id, user_id, action, details, timestamp) VALUES (?, ?, ?, ?, ?)`,
      [id, user_id, action, detailsStr, timestamp]
    );

    return {
      id,
      user_id,
      action,
      details: detailsStr,
      timestamp,
    };
  }

  async findAll(): Promise<LogRecord[]> {
    return query.all<LogRecord>("SELECT * FROM activity_logs ORDER BY timestamp DESC");
  }
}

export const logRepository = new LogRepository();
