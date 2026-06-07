import { contentRepository } from "../repositories/content.repository.js";
import type { LandingContent, Program } from "../types/index.js";

export class ContentService {
  getLandingPageContent(): LandingContent {
    return contentRepository.getLandingContent();
  }

  getPrograms(): Program[] {
    return contentRepository.getAllPrograms();
  }

  getProgramById(id: string): Program | null {
    const program = contentRepository.getProgramById(id);
    return program ?? null;
  }
}

export const contentService = new ContentService();
