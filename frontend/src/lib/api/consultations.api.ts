import type { ConsultationPayload } from "@/types/content";
import { apiFetch } from "./client";

export interface ConsultationResponse {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

/** Submit consultation booking to backend API */

export async function bookConsultation(
  payload: ConsultationPayload
): Promise<ConsultationResponse> {
  return apiFetch<ConsultationResponse>("/api/v1/consultations", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
