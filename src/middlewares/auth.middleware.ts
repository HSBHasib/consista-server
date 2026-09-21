import type { Request, Response, NextFunction } from "express";
import { sendError } from "@/utils/response.util.js";
import { prisma } from "@/lib/prisma.js";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {  
  const authHeaderVal = req.headers.authorization;
  const token = authHeaderVal && authHeaderVal.split(' ')[1];

  if (!token) return sendError(res, "Unauthorized (no token)", 401);
  
  const session = await prisma.session.findUnique({ 
    where: { token }, 
    include: { user: true } 
  });

  if (!session || new Date(session.expiresAt) < new Date()) {
    return sendError(res, "Unauthorized (expired/invalid)", 401);
  }
  
  req.user = session.user;
  req.session = session;
  next();
};
