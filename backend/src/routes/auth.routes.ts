import { Router } from "express";
import {
  register,
  login,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getMe,
} from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.js";
import { authLimiter } from "../middleware/rateLimiter.js";

const router = Router();

// Apply rate limits to public auth actions
router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", authLimiter, forgotPassword);
router.post("/reset-password", authLimiter, resetPassword);

// Protected profile endpoint
router.get("/me", protect, getMe);

export default router;
