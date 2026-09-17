import type { Request, Response } from "express";
import { sendOtp, verifyOtp } from "@/services/otp.service.js";
import { auth } from "@/lib/auth.js";
import { sendSuccess, sendError } from "@/utils/response.util.js";
import { sendOtpSchema, verifyOtpSchema, loginSchema, resetPasswordSchema } from "@/validations/auth.validation.js";

// ================================
// Send OTP to user's email
// ================================
export const handleSendOtp = async (req: Request, res: Response) => {
  const parseResult = sendOtpSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
    return sendError(res, errorMessage, 400);
  }

  const { email } = parseResult.data;
  const isSent = await sendOtp(email);

  if (!isSent) {
    return sendError(res, "Failed to send OTP. Please try again.", 500);
  }

  return sendSuccess(res, "OTP sent successfully to your email.");
};


// ================================
// Verify OTP and create user if necessary
// ================================
export const handleVerifyOtp = async (req: Request, res: Response) => {
  const parseResult = verifyOtpSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
    return sendError(res, errorMessage, 400);
  }

  const { email, otp, name, password } = parseResult.data;
  const isValid = await verifyOtp(email, otp);

  if (!isValid) {
    return sendError(res, "Invalid or expired OTP", 400);
  }

  // Create user via Better-Auth API if name and password are provided
  if (name && password) {
    const user = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    return sendSuccess(res, "User verified and registered successfully", user);
  }

  return sendSuccess(res, "OTP verified successfully", { email, verified: true });
};


// ================================
// Login user
// ================================
export const handleLogin = async (req: Request, res: Response) => {
  const parseResult = loginSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
    return sendError(res, errorMessage, 400);
  }

  const { email, password } = parseResult.data;

  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,  // Convert Better-Auth response to Express response
    });

    // Better-Auth Response to Express Response
    const setCookieHeader = response.headers.get("set-cookie");
    if (setCookieHeader) {
      res.setHeader("Set-Cookie", setCookieHeader);
    }

    const data = await response.json();
    return sendSuccess(res, "Logged in successfully", data);
  } catch (error: any) {
    return sendError(res, error.message || "Invalid email or password", 401);
  }
};


// ================================
// Reset user's password
// ================================
export const handleResetPassword = async (req: Request, res: Response) => {
  const parseResult = resetPasswordSchema.safeParse(req.body);
  if (!parseResult.success) {
    const errorMessage = parseResult.error.issues[0]?.message || "Invalid input data";
    return sendError(res, errorMessage, 400);
  }

  const { email, otp, newPassword } = parseResult.data;

  try {
    // 1. Verify OTP
    await verifyOtp(email, otp);

    // 2. Update password in Better-Auth
    await auth.api.setPassword({
      body: {
        newPassword,
      },
      headers: req.headers,
    });

    return sendSuccess(res, "Password reset successfully. You can now login with your new password.");
  } catch (error: any) {
    return sendError(res, error.message || "Failed to reset password", 400);
  }
};
