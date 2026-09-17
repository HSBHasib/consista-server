import type { Request, Response } from "express";
import { sendSuccess, sendError } from "@/utils/response.util.js";
import * as userService from "@/services/user.service.js";
import { updateProfileSchema, changePasswordSchema } from "@/validations/user.validation.js";


// ===============================
// User Profile Endpoints
// ===============================
export const handleGetProfile = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserProfile(req.user!.id);
    return sendSuccess(res, "Profile retrieved successfully", user);
  } catch (error: any) {
    return sendError(res, error.message || "Failed to fetch profile", 500);
  }
};


// ==================================
// User Profile Update Endpoints
// ==================================
export const handleUpdateProfile = async (req: Request, res: Response) => {
  try {
    const validatedData = updateProfileSchema.parse(req.body);
    const updatedUser = await userService.updateUserProfile(req.user!.id, validatedData);
    return sendSuccess(res, "Profile updated successfully", updatedUser);
  } catch (error: any) {
    return sendError(res, error.message || "Failed to update profile", 400);
  }
};


// ==================================
// User Password Change Endpoints
// ==================================
export const handleChangePassword = async (req: Request, res: Response) => {
  try {
    const validatedData = changePasswordSchema.parse(req.body);
    await userService.changeUserPassword(req.user!.id, validatedData);
    return sendSuccess(res, "Password changed successfully");
  } catch (error: any) {
    return sendError(res, error.message || "Failed to change password", 400);
  }
};
