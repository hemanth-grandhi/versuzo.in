import { query } from "../utils/db.js";
import type {
  ConsultationRecord,
  ConsultationRequest,
} from "../types/index.js";

export class ConsultationRepository {
  async create(input: ConsultationRequest): Promise<ConsultationRecord> {
    const id = `con_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const createdAt = new Date().toISOString();
    const status = "pending";

    const name = input.name.trim();
    const email = input.email.trim().toLowerCase();
    const phone = input.phone?.trim() || "";
    const course = input.programInterest?.trim() || "";
    const message = input.message?.trim() || "";

    await query.run(
      `INSERT INTO consultations (id, name, email, phone, course, message, status, createdAt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, name, email, phone, course, message, status, createdAt]
    );

    return {
      id,
      name,
      email,
      phone,
      programInterest: course,
      message,
      status,
      createdAt,
    };
  }

  async findAll(): Promise<ConsultationRecord[]> {
    return query.all<ConsultationRecord>("SELECT * FROM consultations ORDER BY createdAt DESC");
  }
}

export const consultationRepository = new ConsultationRepository();
