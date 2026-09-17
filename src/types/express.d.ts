import { Role } from "@/generated/prisma";

export interface SessionData {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  ipAddress?: string | null;
  userAgent?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      name: string;
      role?: Role | string;
      timezone?: string;
      image?: string | null;
      createdAt?: Date;
      updatedAt?: Date;
    }

    interface Request {
      user?: User;
      session?: SessionData;
    }
  }
}

