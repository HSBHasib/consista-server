import { sendSuccess, sendError } from "../utils/response.util.js";
import { getSystemMetrics } from "../services/admin.service.js";
export const handleGetAdminMetrics = async (_req, res) => {
    try {
        const metrics = await getSystemMetrics();
        return sendSuccess(res, "Admin metrics retrieved successfully", metrics);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to fetch admin metrics";
        return sendError(res, errorMessage, 500);
    }
};
//# sourceMappingURL=admin.controller.js.map