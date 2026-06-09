import type { Request, Response } from "express";
import { sendSuccess } from "../utils/apiResponse.js";
import { query } from "../utils/db.js";

export async function healthCheck(_req: Request, res: Response): Promise<void> {
  try {
    const dbStatus = await checkDatabaseHealth();
    sendSuccess(res, {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "versuzo-api",
      database: dbStatus,
    });
  } catch (error: any) {
    console.error("Health check failed:", error.message);
    sendSuccess(res, {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "versuzo-api",
      database: { status: "error", message: error.message },
    });
  }
}

async function checkDatabaseHealth(): Promise<{ status: string; message?: string }> {
  if (!process.env.DATABASE_URL) {
    return { status: "not-configured", message: "DATABASE_URL not set" };
  }

  try {
    await query.get<{ version: string }>("SELECT version() as version");
    return { status: "connected" };
  } catch (error: any) {
    return { status: "error", message: error.message };
  }
}
