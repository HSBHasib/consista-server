import { getUserDashboardStats } from "../services/analytics.service.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
export const handleGetDashboardStats = async (req, res) => {
    try {
        const stats = await getUserDashboardStats(req.user.id);
        return sendSuccess(res, "Dashboard statistics retrieved successfully", stats);
    }
    catch (error) {
        return sendError(res, error.message || "Failed to retrieve dashboard stats", 500);
    }
};
//# sourceMappingURL=analytics.controller.js.map