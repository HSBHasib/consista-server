import type { Request, Response, NextFunction } from "express";
import { ZodError, type ZodTypeAny } from "zod";
import { sendError } from "../utils/response.util.js";


// ==========================================
// Validation Middleware —— to validate request bodies
// ==========================================
export const validate =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));
        return sendError(res, "Validation failed", 400, errors);
      }
      return next(error);
    }
  };
  