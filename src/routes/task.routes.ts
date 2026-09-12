import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createTaskSchema, updateTaskStatusSchema } from "../validators/task.validator.js";
import * as taskController from "../controllers/task.controller.js";

const router = Router();

// ==========================================
// Authenticated Routes 
// ==========================================
router.use(requireAuth);


// ==========================================
// Task Routes
// ==========================================
router.post("/", validate(createTaskSchema), taskController.createTask);
router.get("/", taskController.getTasks);
router.patch("/occurrences/:occurrenceId/status", validate(updateTaskStatusSchema), taskController.updateTask);


// ==========================================
// UPDATE TASK
// ==========================================
router.patch("/:taskId", taskController.updateTask);


// ==========================================
// DELETE TASK
// ==========================================
router.delete("/:taskId", taskController.deleteTask);


// ==========================================
// GET TASK OCCURRENCES
// ==========================================
router.get("/occurrences", requireAuth, taskController.getTasks);

export default router;

