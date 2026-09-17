import prisma from "../config/prisma.js";
import { createTaskSchema, updateOccurrenceStatusSchema } from "../validations/task.validation.js";
import { createNewTask, updateOccurrenceStatus } from "../services/task.service.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
// =============================================
// Controller function to create a new task
// =============================================
export const handleCreateTask = async (req, res) => {
    const parseResult = createTaskSchema.safeParse(req.body);
    if (!parseResult.success) {
        const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
        return sendError(res, errorMessage, 400);
    }
    try {
        const task = await createNewTask(req.user.id, parseResult.data);
        return sendSuccess(res, "Task created successfully", task, 201);
    }
    catch (error) {
        return sendError(res, error.message || "Failed to create task", 500);
    }
};
// =============================================
// Controller function to get user tasks
// =============================================
export const handleGetUserTasks = async (req, res) => {
    try {
        const tasks = await prisma.task.findMany({
            where: { userId: req.user.id },
            include: { occurrences: true },
            orderBy: { createdAt: "desc" },
        });
        return sendSuccess(res, "Tasks retrieved successfully", tasks);
    }
    catch (error) {
        return sendError(res, error.message || "Failed to fetch tasks", 500);
    }
};
// =============================================
// Controller function to update occurrence status
// =============================================
export const handleUpdateOccurrenceStatus = async (req, res) => {
    const occurrenceId = req.params.occurrenceId;
    if (!occurrenceId) {
        return sendError(res, "Occurrence ID is required", 400);
    }
    const parseResult = updateOccurrenceStatusSchema.safeParse(req.body);
    if (!parseResult.success) {
        const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
        return sendError(res, errorMessage, 400);
    }
    try {
        const updated = await updateOccurrenceStatus(req.user.id, occurrenceId, parseResult.data);
        return sendSuccess(res, "Task occurrence updated successfully", updated);
    }
    catch (error) {
        return sendError(res, error.message || "Failed to update occurrence", 500);
    }
};
//# sourceMappingURL=task.controller.js.map