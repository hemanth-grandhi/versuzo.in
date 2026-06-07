import { consultationRepository } from "../repositories/consultation.repository.js";
import type {
  ConsultationRecord,
  ConsultationRequest,
} from "../types/index.js";

export class ConsultationService {
  async bookConsultation(input: ConsultationRequest): Promise<ConsultationRecord> {
    const normalized: ConsultationRequest = {
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone?.trim(),
      programInterest: input.programInterest?.trim(),
      message: input.message?.trim(),
    };

    return await consultationRepository.create(normalized);
  }
}

export const consultationService = new ConsultationService();
