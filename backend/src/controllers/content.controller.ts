import type { Request, Response } from "express";
import { contentService } from "../services/content.service.js";
import { sendSuccess } from "../utils/apiResponse.js";

export function getLandingContent(_req: Request, res: Response): void {
  const content = contentService.getLandingPageContent();
  sendSuccess(res, content);
}
