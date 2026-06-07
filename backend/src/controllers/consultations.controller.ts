import type { Request, Response } from "express";
import { consultationService } from "../services/consultation.service.js";
import type { ConsultationRequest } from "../types/index.js";
import { sendSuccess, sendError } from "../utils/apiResponse.js";

export async function createConsultation(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body as ConsultationRequest;
    const record = await consultationService.bookConsultation(body);
    sendSuccess(res, record, 201);
  } catch (error: any) {
    sendError(res, error.message || "Failed to book consultation", 500);
  }
}
