import type { Request, Response, NextFunction } from "express";
import { auth } from "@/lib/auth.js";
import { sendError } from "@/utils/response.util.js";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return sendError(res, "Unauthorized access. Please log in.", 401);
    }

    // Attach the session and user objects to the request
    req.user = session.user;
    req.session = session.session;

    return next();
  } catch {
    return sendError(res, "Authentication failed.", 401);
  }
};
