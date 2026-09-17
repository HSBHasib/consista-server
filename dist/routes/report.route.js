import { Router } from "express";
import { handleGetYearlyReport, handleGetLeaderboard } from "../controllers/report.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
const router = Router();
router.use(requireAuth);
router.get("/yearly-report", handleGetYearlyReport); // Get yearly report for the authenticated user
router.get("/leaderboard", handleGetLeaderboard); // Get leaderboard for a specific year
export default router;
//# sourceMappingURL=report.route.js.map