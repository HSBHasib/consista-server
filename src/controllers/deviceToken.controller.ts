import type { Request, Response } from "express";
import * as deviceTokenService from "@/services/deviceToken.service.js";
import { registerDeviceTokenSchema, unregisterDeviceTokenSchema } from "@/validations/deviceToken.validation.js";
import { sendSuccess, sendError } from "@/utils/response.util.js";


// ===============================
// Register Device Token
// ===============================
export const handleRegisterToken = async (req: Request, res: Response) => {
  try {
    const validatedData = registerDeviceTokenSchema.parse(req.body);
    const tokenRecord = await deviceTokenService.registerDeviceToken(req.user!.id, validatedData);
    return sendSuccess(res, "Device token registered successfully", tokenRecord, 201);
  } catch (error: any) {
    return sendError(res, error.message || "Failed to register device token", 400);
  }
};


// ===============================
// Unregister Device Token
// ===============================
export const handleUnregisterToken = async (req: Request, res: Response) => {
  try {
    const validatedData = unregisterDeviceTokenSchema.parse(req.body);
    await deviceTokenService.unregisterDeviceToken(req.user!.id, validatedData);
    return sendSuccess(res, "Device token unregistered successfully");
  } catch (error: any) {
    return sendError(res, error.message || "Failed to unregister device token", 400);
  }
};

