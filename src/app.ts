import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "@/middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import { auth } from "./config/auth.js";
import { toNodeHandler } from "better-auth/node";
import { authRateLimiter, generalRateLimiter } from "./middlewares/rate-limit.middleware.js";
import deviceRoutes from "./routes/device.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();

// ==========================================
// Application Configuration
// ==========================================
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiter
app.use(generalRateLimiter);

// Root Route
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ success: "True", message: "Welcome to the Consista API" });
});

// API Routes
app.use("/api/v1/auth", authRateLimiter, authRouter);         // Authentication routes
app.use("/api/v1/tasks", taskRoutes);                         // Task management routes
app.use("/api/v1/devices", deviceRoutes);                     // Device management routes
app.use("/api/v1/analytics", analyticsRoutes);                // Analytics routes
app.all("/api/auth/{*splat}", toNodeHandler(auth));           // Authentication handler



// Error Middleware
app.use(errorHandler);    // Error handling middleware

export default app;

