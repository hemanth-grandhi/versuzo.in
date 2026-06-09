import { Router } from "express";
import { healthCheck } from "../controllers/health.controller.js";
import { diagnosticInfo } from "../controllers/diagnostic.controller.js";

const router = Router();

router.get("/", healthCheck);
router.get("/diagnostic", diagnosticInfo);

export default router;
