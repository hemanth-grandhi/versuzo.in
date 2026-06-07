import type { LandingContent, Program } from "@/types/content";
import { apiFetch } from "./client";

/** Fetch landing page content from backend API */

export async function getLandingContent(): Promise<LandingContent> {
  return apiFetch<LandingContent>("/api/v1/content/landing");
}

export async function getPrograms(): Promise<Program[]> {
  return apiFetch<Program[]>("/api/v1/programs");
}

export async function getProgramById(id: string): Promise<Program> {
  return apiFetch<Program>(`/api/v1/programs/${id}`);
}
