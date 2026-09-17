import { Router } from "express";
import { requireAdmin } from "../middlewares/admin.middleware.js";
import { handleGetAdminMetrics } from "../controllers/admin.controller.js";
const router = Router();
// Endpoint strictly protected by requireAdmin middleware
router.get("/metrics", requireAdmin, handleGetAdminMetrics);
export default router;
//# sourceMappingURL=admin.route.js.map