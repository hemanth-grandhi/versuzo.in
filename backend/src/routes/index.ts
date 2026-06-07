import { Router } from "express";
import healthRoutes from "./health.routes.js";
import contentRoutes from "./content.routes.js";
import programsRoutes from "./programs.routes.js";
import consultationsRoutes from "./consultations.routes.js";
import authRoutes from "./auth.routes.js";
import adminRoutes from "./admin.routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/content", contentRoutes);
router.use("/programs", programsRoutes);
router.use("/consultations", consultationsRoutes);
router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);

export default router;
