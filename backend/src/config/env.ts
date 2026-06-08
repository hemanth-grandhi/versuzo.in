import "dotenv/config";

function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function optionalEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}

function parseOrigins(value: string): string[] {
  return value
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

const nodeEnv = requireEnv("NODE_ENV", "development");
const isProduction = nodeEnv === "production";
const corsOrigin = requireEnv("CORS_ORIGIN", "http://localhost:3000");
const allowedOrigins = parseOrigins(corsOrigin);

export const env = {
  port: parseInt(requireEnv("PORT", "4000"), 10),
  nodeEnv,
  corsOrigin,
  allowedOrigins,
  frontendUrl: requireEnv("FRONTEND_URL", allowedOrigins[0] ?? "http://localhost:3000"),
  jwtSecret: requireEnv(
    "JWT_SECRET",
    isProduction ? undefined : "versuzo-default-jwt-secret-key-123456"
  ),
  seedAdminEmail: optionalEnv("SEED_ADMIN_EMAIL"),
  seedAdminPassword: optionalEnv("SEED_ADMIN_PASSWORD"),
  isProduction,
} as const;
