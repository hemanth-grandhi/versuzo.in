import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/index.js";
import { userRepository } from "../repositories/user.repository.js";
import { sendError } from "../utils/apiResponse.js";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
    verified: number;
  };
}

export async function protect(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    let token = "";
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      sendError(res, "You are not logged in. Please log in to get access.", 401);
      return;
    }

    // Verify token
    const decoded = jwt.verify(token, env.jwtSecret) as { id: string };

    // Check if user still exists
    const user = await userRepository.findById(decoded.id);
    if (!user) {
      sendError(res, "The user belonging to this token no longer exists.", 401);
      return;
    }

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      verified: user.verified,
    };
    
    next();
  } catch (error: any) {
    sendError(res, "Invalid or expired token. Please log in again.", 401);
  }
}

export function restrictToAdmin(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void {
  if (!req.user || req.user.role !== "admin") {
    sendError(res, "You do not have permission to perform this action.", 403);
    return;
  }
  next();
}
