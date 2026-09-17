import type { Request, Response } from "express";
import { sendSuccess, sendError } from "@/utils/response.util.js";
import { getSystemMetrics } from "@/services/admin.service.js";

export const handleGetAdminMetrics = async (_req: Request, res: Response) => {
  try {
    const metrics = await getSystemMetrics();
    return sendSuccess(res, "Admin metrics retrieved successfully", metrics);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch admin metrics";
    return sendError(res, errorMessage, 500);
  }
};