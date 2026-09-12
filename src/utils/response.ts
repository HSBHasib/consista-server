import type { Response } from "express";

// ==========================================
// Utility function to send standardized responses for API calls
// ==========================================
export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data?: T
) => {
  return res.status(statusCode).json({
    success,
    message,
    data: data ?? null,
  });
};

