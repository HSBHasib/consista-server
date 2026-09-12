import type { Request, Response } from "express";
import { sendSuccess, sendError } from "../utils/response.util.js";
import * as analyticsService from "../services/analytics.service.js";

export async function getDashboard(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user?.id;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const dashboard = await analyticsService.getDashboardData(userId);
    sendSuccess(res, "Dashboard data retrieved", dashboard);
  } catch (error) {
    sendError(res, "Failed to fetch dashboard", 500);
  }
}

export async function getDailyActivity(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user?.id;
    const { date } = req.query;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const activity = await analyticsService.getDailyActivity(userId, date as string);
    sendSuccess(res, "Daily activity retrieved", activity);
  } catch (error) {
    sendError(res, "Failed to fetch daily activity", 500);
  }
}

export async function getWeeklyStats(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user?.id;

    if (!userId) {
      sendError(res, "Unauthorized", 401);
      return;
    }

    const stats = await analyticsService.getWeeklyStats(userId);
    sendSuccess(res, "Weekly stats retrieved", stats);
  } catch (error) {
    sendError(res, "Failed to fetch weekly stats", 500);
  }
}

export async function getLeaderboard(req: Request, res: Response): Promise<void> {
  try {
    const { year } = req.query;

    const leaderboard = await analyticsService.getLeaderboard(Number(year) || new Date().getFullYear());
    sendSuccess(res, "Leaderboard retrieved", leaderboard);
  } catch (error) {
    sendError(res, "Failed to fetch leaderboard", 500);
  }
}
