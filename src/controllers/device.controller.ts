import type { Response, NextFunction } from "express";
import type { AuthRequest } from "@/types/auth.types.js";
import { registerDeviceToken } from "../services/device.service.js";
import { sendSuccess, sendError } from "../utils/response.util.js";

// ==========================================
// Register Device Token Handler
// ==========================================
export const handleRegisterDeviceToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const { token, deviceType } = req.body;

    if (!token) {
      return sendError(res, "Device token is required", 400);
    }

    const result = await registerDeviceToken(userId, { token, deviceType });

    return sendSuccess(res, "Device token registered successfully", result);
  } catch (error) {
    return next(error);
  }
};
