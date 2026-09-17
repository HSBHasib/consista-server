import type { Response } from "express";

// ==========================================
// Helper function to send success responses
// ==========================================
export function sendSuccess<T>(
  res: Response,
  message: string,
  data?: T,
  statusCode: number = 200,
  pagination?: any,
  extraMeta?: Record<string, unknown>
): Response {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(data !== undefined && { data }),
    ...(pagination && { pagination }),
    ...(extraMeta ? extraMeta : {}),
  });
}

// ==========================================
// Helper function to send error responses
// ==========================================
export function sendError(
  res: Response,
  message: string,
  statusCode: number = 500,
  errors?: unknown
): Response {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errors !== undefined ? { errors } : {}),
  });
}
