import type { Request } from "express";

export type UserRole = "USER" | "ADMIN";


// ==========================================
// Interface for an authenticated user
// ==========================================
export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  role?: UserRole; 
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}


// ==========================================
// Authenticated Request Interface
// ==========================================
export interface AuthRequest extends Request {
  user?: AuthenticatedUser;
  session?: any;
}


// ==========================================
// Express Global Request Type Augmentation
// ==========================================
declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
      session?: any;
    }
  }
}

