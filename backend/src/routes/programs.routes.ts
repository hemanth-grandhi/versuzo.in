import { Router } from "express";
import {
  getProgramById,
  getPrograms,
} from "../controllers/programs.controller.js";

const router = Router();

router.get("/", getPrograms);
router.get("/:id", getProgramById);

export default router;
