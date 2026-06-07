import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import apiRoutes from "./routes/index.js";

export function createApp() {
  const app = express();
  const allowedOrigins = new Set(env.allowedOrigins);

  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error(`Origin ${origin} is not allowed by CORS`));
      },
      credentials: true,
    })
  );
  app.use(express.json({ limit: "10kb" }));

  app.get("/", (_req, res) => {
    res.json({
      name: "Versuzo API",
      version: "1.0.0",
      docs: "/api/v1/health",
    });
  });

  app.use("/api/v1", apiRoutes);

  app.use((_req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
  });

  app.use(errorHandler);

  return app;
}
