import { handleGetDashboardStats } from "../controllers/analytics.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { Router } from "express";
const router = Router();
router.get("/dashboard", requireAuth, handleGetDashboardStats); // Get user's dashboard statistics
export default router;
//# sourceMappingURL=analytics.route.js.map