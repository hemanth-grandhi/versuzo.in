import { Router } from "express";
import { getUsers, getLeads, getLogs } from "../controllers/admin.controller.js";
import { protect, restrictToAdmin } from "../middleware/auth.js";

const router = Router();

// Apply protection & admin constraints to all admin endpoints
router.use(protect as any);
router.use(restrictToAdmin as any);

router.get("/users", getUsers as any);
router.get("/leads", getLeads as any);
router.get("/logs", getLogs as any);

export default router;
