import type { Request, Response } from "express";
import { sendSuccess, sendError } from "@/utils/response.util.js";

export const getMe = async (req: Request, res: Response) => {
  if (!req.user) {
    return sendError(res, "User not found in session", 404);
  }

  return sendSuccess(res, "User profile retrieved successfully", {
    user: req.user,
  });
};