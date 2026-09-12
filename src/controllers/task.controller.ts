import type { Request, Response } from "express";
import { sendSuccess, sendError } from "../utils/response.util.js";
import * as taskService from "../services/task.service.js";

export async function createTask(req: Request, res: Response): Promise<void> {
  try {
    const { title, description, isRequired, urgency, intervalValue, intervalUnit, repeatCount } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    if (!title) {
      sendError(res, "Task title is required", 400);
      return;
    }

    const task = await taskService.createTask({
      userId,
      title,
      description,
      isRequired,
      urgency,
      intervalValue,
      intervalUnit,
      repeatCount,
    });

    sendSuccess(res, "Task created successfully", task, 201);
  } catch (error) {
    sendError(res, "Failed to create task", 500);
  }
}

export async function getTasks(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user?.id;
    const page = String(req.query.page || "1");
    const limit = String(req.query.limit || "10");

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const result = await taskService.getTasks(userId, Number(page), Number(limit));
    sendSuccess(res, "Tasks retrieved", result.tasks, 200, result.pagination);
  } catch (error) {
    sendError(res, "Failed to fetch tasks", 500);
  }
}

export async function getTaskById(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id || req.params.taskId);
    const userId = req.user?.id;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const task = await taskService.getTaskById(id, userId);
    if (!task) {
      sendError(res, "Task not found", 404);
      return;
    }

    sendSuccess(res, "Task retrieved", task);
  } catch (error) {
    sendError(res, "Failed to fetch task", 500);
  }
}

export async function updateTask(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id || req.params.taskId);
    const userId = req.user?.id;
    const updates = req.body;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const task = await taskService.updateTask(id, userId, updates);
    if (!task) {
      sendError(res, "Task not found", 404);
      return;
    }

    sendSuccess(res, "Task updated successfully", task);
  } catch (error) {
    sendError(res, "Failed to update task", 500);
  }
}

export async function deleteTask(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id || req.params.taskId);
    const userId = req.user?.id;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const deleted = await taskService.deleteTask(id, userId);
    if (!deleted) {
      sendError(res, "Task not found", 404);
      return;
    }

    sendSuccess(res, "Task deleted successfully", null);
  } catch (error) {
    sendError(res, "Failed to delete task", 500);
  }
}
