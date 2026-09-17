import { Router } from "express";
import { handleCreateTask, handleGetUserTasks } from "@/controllers/task.controller.js";
import { requireAuth } from "@/middlewares/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.post("/", handleCreateTask);
router.get("/", handleGetUserTasks);

export default router;

