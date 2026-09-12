import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import * as analyticsController from "../controllers/analytics.controller.js";

const router = Router();

// ==========================================
// Apply authentication middleware to all routes
// ==========================================
router.use(requireAuth);


// ==========================================
// Define analytics routes —— to get user and dashboard analytics
// ==========================================
router.get("/", analyticsController.getWeeklyStats);
router.get("/dashboard", requireAuth, analyticsController.getDashboard);

export default router;
