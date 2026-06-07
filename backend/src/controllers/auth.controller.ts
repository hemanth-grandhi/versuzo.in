import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { env } from "../config/index.js";
import { userRepository } from "../repositories/user.repository.js";
import { logRepository } from "../repositories/log.repository.js";
import { emailService } from "../services/email.service.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";
const JWT_EXPIRES_IN = "7d";

// Helper to sign JWT tokens
const signToken = (id: string): string => {
  return jwt.sign({ id }, env.jwtSecret, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      sendError(res, "Please provide name, email, and password", 400);
      return;
    }

    if (password.length < 6) {
      sendError(res, "Password must be at least 6 characters long", 400);
      return;
    }

    // Check if email already registered
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      sendError(res, "Email address is already registered", 400);
      return;
    }

    const userId = "usr_" + Date.now() + "_" + crypto.randomBytes(3).toString("hex");
    const passwordHash = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(16).toString("hex");

    // Insert user into DB
    const user = await userRepository.create({
      id: userId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password_hash: passwordHash,
      role: "user",
      verified: 0,
      verification_token: verificationToken,
    });

    // Send Welcome Email (runs asynchronously in background)
    emailService.sendWelcomeEmail(user.name, user.email, verificationToken)
      .catch(err => console.error("Async welcome email failed:", err.message));

    // Sign token
    const token = signToken(user.id);

    // Log user registration
    await logRepository.create(user.id, "USER_REGISTER", { name: user.name, email: user.email });

    sendSuccess(res, {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        verified: user.verified,
      }
    }, 201);
  } catch (error: any) {
    console.error("Register error:", error);
    sendError(res, error.message || "Failed to register user", 500);
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      sendError(res, "Please provide email and password", 400);
      return;
    }

    // Find user by email
    const user = await userRepository.findByEmail(email);
    if (!user) {
      sendError(res, "Invalid email or password", 401);
      return;
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      sendError(res, "Invalid email or password", 401);
      return;
    }

    const token = signToken(user.id);

    // Log login
    await logRepository.create(user.id, "USER_LOGIN", { email: user.email });

    sendSuccess(res, {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        verified: user.verified,
      }
    });
  } catch (error: any) {
    console.error("Login error:", error);
    sendError(res, error.message || "Failed to login", 500);
  }
}

export async function verifyEmail(req: Request, res: Response): Promise<void> {
  try {
    const { token } = req.body;

    if (!token) {
      sendError(res, "Verification token is required", 400);
      return;
    }

    const user = await userRepository.findByVerificationToken(token);
    if (!user) {
      sendError(res, "Invalid or expired verification token", 400);
      return;
    }

    // Update user
    await userRepository.update(user.id, {
      verified: 1,
      verification_token: null,
    });

    await logRepository.create(user.id, "USER_EMAIL_VERIFIED", { email: user.email });

    sendSuccess(res, { message: "Email successfully verified!" });
  } catch (error: any) {
    console.error("Verify email error:", error);
    sendError(res, error.message || "Failed to verify email", 500);
  }
}

export async function forgotPassword(req: Request, res: Response): Promise<void> {
  try {
    const { email } = req.body;

    if (!email) {
      sendError(res, "Email address is required", 400);
      return;
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      // Return 200/success for security reasons to prevent user enumeration
      sendSuccess(res, { message: "If that email exists in our system, we've sent a password reset link." });
      return;
    }

    const resetToken = crypto.randomBytes(16).toString("hex");
    const expiry = new Date(Date.now() + 3600000).toISOString(); // 1 hour

    await userRepository.update(user.id, {
      reset_token: resetToken,
      reset_token_expiry: expiry,
    });

    // Send reset email (async)
    emailService.sendResetPasswordEmail(user.name, user.email, resetToken)
      .catch(err => console.error("Async reset email failed:", err.message));

    await logRepository.create(user.id, "USER_FORGOT_PASSWORD_REQUEST", { email: user.email });

    sendSuccess(res, { message: "Password reset link sent to your email." });
  } catch (error: any) {
    console.error("Forgot password error:", error);
    sendError(res, error.message || "Failed to send reset link", 500);
  }
}

export async function resetPassword(req: Request, res: Response): Promise<void> {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      sendError(res, "Token and new password are required", 400);
      return;
    }

    if (password.length < 6) {
      sendError(res, "Password must be at least 6 characters long", 400);
      return;
    }

    const user = await userRepository.findByResetToken(token);
    if (!user || !user.reset_token_expiry) {
      sendError(res, "Invalid or expired reset token", 400);
      return;
    }

    // Check expiry
    const expiryDate = new Date(user.reset_token_expiry);
    if (expiryDate.getTime() < Date.now()) {
      sendError(res, "Reset token has expired", 400);
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // Update password
    await userRepository.update(user.id, {
      password_hash: passwordHash,
      reset_token: null,
      reset_token_expiry: null,
    });

    await logRepository.create(user.id, "USER_PASSWORD_RESET", { email: user.email });

    sendSuccess(res, { message: "Password has been successfully updated!" });
  } catch (error: any) {
    console.error("Reset password error:", error);
    sendError(res, error.message || "Failed to reset password", 500);
  }
}

export function getMe(req: AuthenticatedRequest, res: Response): void {
  if (!req.user) {
    sendError(res, "Not authenticated", 401);
    return;
  }
  sendSuccess(res, { user: req.user });
}
