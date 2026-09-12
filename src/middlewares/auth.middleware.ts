import type { Request, Response, NextFunction } from "express";
import { auth } from "../config/auth.js";
import type { UserRole } from "../types/auth.types.js";
import { sendError } from "../utils/response.util.js";


// ==========================================
// Authentication Check Middleware
// ==========================================
export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session || !session.user) {
      return sendError(res, "Unauthenticated. Please sign in to access this resource.", 401);
    }

    req.user = session.user;
    req.session = session.session;
    return next();
  } catch (error) {
    return next(error);
  }
};


// ==========================================
// Role-Based Authorization Middleware (RBAC)
// ==========================================
export const requireRole = (...allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(res, "Unauthenticated. Authentication required.", 401);
    }

    const userRole = (req.user as any).role || "USER";

    if (!allowedRoles.includes(userRole as UserRole)) {
      return sendError(res, "Forbidden. You do not have permission to perform this action.", 403);
    }

    return next();
  };
};

