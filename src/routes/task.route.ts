import { Router } from "express";
import { handleCreateTask, handleGetUserTasks, handleUpdateOccurrenceStatus } from "@/controllers/task.controller.js";
import { requireAuth } from "@/middlewares/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.get("/", handleGetUserTasks);        // Get user tasks
router.post("/", handleCreateTask);         // Create a new task
router.patch("/occurrences/:occurrenceId/status", handleUpdateOccurrenceStatus);    // Update occurrence status

export default router;
