import type { Request, Response } from "express";
import { getUserDashboardStats } from "@/services/analytics.service.js";
import { sendSuccess, sendError } from "@/utils/response.util.js";

export const handleGetDashboardStats = async (req: Request, res: Response) => {
  try {
    const stats = await getUserDashboardStats(req.user!.id);
    return sendSuccess(res, "Dashboard statistics retrieved successfully", stats);
  } catch (error: any) {
    return sendError(res, error.message || "Failed to retrieve dashboard stats", 500);
  }
};

