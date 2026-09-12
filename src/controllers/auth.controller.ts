import type { Request, Response } from "express";
import { sendSuccess, sendError } from "../utils/response.util.js";

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      sendError(res, "Name, email, and password are required", 400);
      return;
    }

    // TODO: implement registration with better-auth
    sendSuccess(res, "User registered successfully", null, 201);
  } catch (error) {
    sendError(res, "Registration failed", 500);
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      sendError(res, "Email and password are required", 400);
      return;
    }

    // TODO: implement login with better-auth
    sendSuccess(res, "Login successful", null);
  } catch (error) {
    sendError(res, "Login failed", 500);
  }
}

export async function logout(_req: Request, res: Response): Promise<void> {
  try {
    // TODO: invalidate session
    sendSuccess(res, "Logged out successfully", null);
  } catch (error) {
    sendError(res, "Logout failed", 500);
  }
}

export async function me(_req: Request, res: Response): Promise<void> {
  try {
    // TODO: get current user from session
    sendSuccess(res, "User profile retrieved", null);
  } catch (error) {
    sendError(res, "Failed to fetch user profile", 500);
  }
}
