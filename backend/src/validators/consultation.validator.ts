import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  programInterest: z.string().optional(),
  message: z.string().max(1000).optional(),
});
