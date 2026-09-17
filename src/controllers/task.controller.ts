import type { Request, Response } from "express";
import { createTaskSchema } from "@/validations/task.validation.js";
import { createNewTask } from "@/services/task.service.js";
import { sendSuccess, sendError } from "@/utils/response.util.js";
import prisma from "@/config/prisma.js";

// =============================================
// Controller function to create a new task
// =============================================
export const handleCreateTask = async (req: Request, res: Response) => {
  const parseResult = createTaskSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
    return sendError(res, errorMessage, 400);
  }

  try {
    const task = await createNewTask(req.user!.id, parseResult.data);
    return sendSuccess(res, "Task created successfully", task, 201);
  } catch (error: any) {
    return sendError(res, error.message || "Failed to create task", 500);
  }
};


// =============================================
// Controller function to get user tasks
// =============================================
export const handleGetUserTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.user!.id },
      include: { occurrences: true },
      orderBy: { createdAt: "desc" },
    });
    return sendSuccess(res, "Tasks retrieved successfully", tasks);
  } catch (error: any) {
    return sendError(res, error.message || "Failed to fetch tasks", 500);
  }
};