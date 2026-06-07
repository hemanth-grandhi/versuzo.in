import { Router } from "express";
import { createConsultation } from "../controllers/consultations.controller.js";
import { validateBody } from "../middleware/validate.js";
import { consultationSchema } from "../validators/consultation.validator.js";

const router = Router();

router.post(
  "/",
  validateBody(consultationSchema),
  createConsultation
);

export default router;
