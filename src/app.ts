import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { sendSuccess } from "./utils/response.util.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import authRoutes from "@/routes/auth.route.js";
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

// Custom OTP Authentication Routes
app.use("/api/v1/auth", authRoutes);

// Better Auth All Routes
app.all("/api/auth/*", toNodeHandler(auth));




export default app;