import type { Request, Response } from "express";
import { AppError } from "../middleware/errorHandler.js";
import { contentService } from "../services/content.service.js";
import { sendSuccess } from "../utils/apiResponse.js";

export function getPrograms(_req: Request, res: Response): void {
  const programs = contentService.getPrograms();
  sendSuccess(res, programs);
}

export function getProgramById(req: Request, res: Response): void {
  const id = String(req.params.id);
  const program = contentService.getProgramById(id);

  if (!program) {
    throw new AppError("Program not found", 404);
  }

  sendSuccess(res, program);
}
