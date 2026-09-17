import * as reportService from "../services/report.service.js";
import { getYearlyReportSchema, getLeaderboardSchema } from "../validations/report.validation.js";
import { sendSuccess, sendError } from "../utils/response.util.js";
// =============================
// Get Yearly Report
// =============================
export const handleGetYearlyReport = async (req, res) => {
    try {
        const { year } = getYearlyReportSchema.parse(req.query);
        const report = await reportService.getYearlyReport(req.user.id, year);
        if (!report) {
            return sendError(res, "Yearly report not found for the specified year", 404);
        }
        return sendSuccess(res, "Yearly report retrieved successfully", report);
    }
    catch (error) {
        return sendError(res, error.message || "Failed to fetch yearly report", 400);
    }
};
// =============================
// Get Leaderboard 
// =============================
export const handleGetLeaderboard = async (req, res) => {
    try {
        const { year, limit } = getLeaderboardSchema.parse(req.query);
        const leaderboard = await reportService.getLeaderboard(year, limit);
        return sendSuccess(res, "Leaderboard retrieved successfully", leaderboard);
    }
    catch (error) {
        return sendError(res, error.message || "Failed to fetch leaderboard", 400);
    }
};
//# sourceMappingURL=report.controller.js.map