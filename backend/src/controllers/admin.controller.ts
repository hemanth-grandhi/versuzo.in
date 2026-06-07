import type { Response } from "express";
import { userRepository } from "../repositories/user.repository.js";
import { consultationRepository } from "../repositories/consultation.repository.js";
import { logRepository } from "../repositories/log.repository.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";

export async function getUsers(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    const users = await userRepository.findAll();
    sendSuccess(res, users);
  } catch (error: any) {
    sendError(res, error.message || "Failed to fetch users", 500);
  }
}

export async function getLeads(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    const leads = await consultationRepository.findAll();
    sendSuccess(res, leads);
  } catch (error: any) {
    sendError(res, error.message || "Failed to fetch leads", 500);
  }
}

export async function getLogs(req: AuthenticatedRequest, res: Response): Promise<void> {
  try {
    const logs = await logRepository.findAll();
    sendSuccess(res, logs);
  } catch (error: any) {
    sendError(res, error.message || "Failed to fetch logs", 500);
  }
}
