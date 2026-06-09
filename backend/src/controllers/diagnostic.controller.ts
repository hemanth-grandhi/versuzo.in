import type { Request, Response } from "express";
import { sendSuccess, sendError } from "../utils/apiResponse.js";

/**
 * DIAGNOSTIC ENDPOINT - DO NOT USE IN PRODUCTION
 * This endpoint helps debug database connection issues
 * Should only be accessible via admin auth in production
 */
export function diagnosticInfo(_req: Request, res: Response): void {
  // Build diagnostic info object
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    vercel: process.env.VERCEL ? true : false,
    databaseUrl: {
      exists: !!process.env.DATABASE_URL,
      length: process.env.DATABASE_URL ? process.env.DATABASE_URL.length : 0,
      prefix: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 25) : null,
      hasValidProtocol: process.env.DATABASE_URL
        ? process.env.DATABASE_URL.startsWith("postgres://") || process.env.DATABASE_URL.startsWith("postgresql://")
        : false,
    },
    criticalEnvVars: {
      PORT: process.env.PORT || "not set",
      JWT_SECRET: process.env.JWT_SECRET ? "***SET***" : "NOT SET",
      NODE_ENV: process.env.NODE_ENV || "not set",
      CORS_ORIGIN: process.env.CORS_ORIGIN || "not set",
    },
  };

  // Attempt to parse DATABASE_URL if it exists
  if (process.env.DATABASE_URL) {
    try {
      const url = new URL(process.env.DATABASE_URL);
      diagnostics.databaseUrl.parsed = {
        protocol: url.protocol,
        hostname: url.hostname || "NOT FOUND",
        port: url.port || "default",
        database: url.pathname.replace("/", "") || "NOT FOUND",
        hasCredentials: !!url.username,
      };
    } catch (err: any) {
      diagnostics.databaseUrl.parseError = err.message;
    }
  }

  sendSuccess(res, diagnostics);
}
