import { Router } from "express";
import { getUsers, getLeads, getLogs } from "../controllers/admin.controller.js";
import { protect, restrictToAdmin } from "../middleware/auth.js";

const router = Router();

// Apply protection & admin constraints to all admin endpoints
router.use(protect);
router.use(restrictToAdmin);

router.get("/users", getUsers);
router.get("/leads", getLeads);
router.get("/logs", getLogs);

export default router;
