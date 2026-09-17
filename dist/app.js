import express from "express";
import cors from "cors";
import { sendSuccess } from "./utils/response.util.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import taskRoutes from "./routes/task.route.js";
import analyticsRouter from "./routes/analytics.route.js";
import deviceTokenRouter from "./routes/deviceToken.route.js";
import reportRouter from "./routes/report.route.js";
import contactRouter from "./routes/contact.route.js";
const app = express();
// ==========================================
// Application Configuration
// ==========================================
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ==========================================
// Root Route
// ==========================================
app.get("/", (_req, res) => {
    sendSuccess(res, "Welcome to the Consista API");
});
// ==========================================
// API Routes
// ==========================================
app.use("/api/v1/auth", authRoutes); // OTP Authentication Routes
app.use("/api/v1/users", userRoutes); // User Management Routes
app.use("/api/v1/tasks", taskRoutes); // Task Management Routes
app.use("/api/v1/analytics", analyticsRouter); // Analytics Routes
app.use("/api/v1/device-tokens", deviceTokenRouter); // Device Token Routes
app.use("/api/v1/reports", reportRouter); // Report Routes
app.use('/api/v1/contact', contactRouter); // Contact Form Routes
// ==========================================
// Better Auth All Routes
// ==========================================
app.all("/api/auth/*path", toNodeHandler(auth)); // Better Auth Routes For All Auth Endpoints.
export default app;
//# sourceMappingURL=app.js.map