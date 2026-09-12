import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { sendError } from "../utils/response.util.js";


// ==========================================
// Global Error Handler
// ==========================================
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Handle Zod validation errors
  if (err instanceof ZodError) {
    const errors = err.issues.map((e) => ({
      field: e.path.join("."),
      message: e.message,
    }));
    return sendError(res, "Validation Error", 400, errors);
  }

  // Handle other errors
  return sendError(res, err.message || "Internal Server Error", err.status || 500);
};
