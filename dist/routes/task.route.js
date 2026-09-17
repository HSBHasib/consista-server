import { Router } from "express";
import { handleCreateTask, handleGetUserTasks, handleUpdateOccurrenceStatus } from "../controllers/task.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
const router = Router();
router.use(requireAuth);
router.post("/", handleCreateTask); // Create a new task
router.get("/", handleGetUserTasks); // Get user tasks
router.patch("/occurrences/:occurrenceId/status", handleUpdateOccurrenceStatus); // Update occurrence status
export default router;
//# sourceMappingURL=task.route.js.map