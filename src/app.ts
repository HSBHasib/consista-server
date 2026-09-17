import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { sendSuccess } from "./utils/response.util.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import authRoutes from "@/routes/auth.route.js";
import userRoutes from "@/routes/user.route.js";
import taskRoutes from "@/routes/task.route.js";
import analyticsRouter from "@/routes/analytics.route.js";


const app = express();

// ==========================================
// Application Configuration
// ==========================================
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Root Route
app.get("/", (_req: Request, res: Response) => {
  sendSuccess(res, "Welcome to the Consista API");
});


// API Routes
app.use("/api/v1/auth", authRoutes);            // OTP Authentication Routes
app.use("/api/v1/users", userRoutes);           // User Management Routes
app.use("/api/v1/tasks", taskRoutes);           // Task Management Routes
app.use("/api/v1/analytics", analyticsRouter);  // Analytics Routes

// Better Auth All Routes
app.all("/api/auth/*path", toNodeHandler(auth));


export default app;
