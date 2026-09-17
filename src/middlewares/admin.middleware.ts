import type { Request, Response, NextFunction } from "express";
import { sendError } from "@/utils/response.util.js";

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return sendError(res, "Unauthorized: Authentication required", 401);
  }

  if (req.user.role !== "ADMIN") {
    return sendError(res, "Forbidden: Admin access required", 403);
  }

  next();
};