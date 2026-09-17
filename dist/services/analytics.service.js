import { prisma } from "../config/prisma.js";
// ====================================
// Get User Dashboard Statistics
// ====================================
export const getUserDashboardStats = async (userId) => {
    // Fetch User Streaks
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { currentStreak: true, longestStreak: true },
    });
    if (!user) {
        throw new Error("User not found");
    }
    // Aggregate Task Occurrence Stats
    const totalOccurrences = await prisma.taskOccurrence.count({
        where: { userId },
    });
    const completedOccurrences = await prisma.taskOccurrence.count({
        where: { userId, status: "COMPLETED" },
    });
    const missedOccurrences = await prisma.taskOccurrence.count({
        where: { userId, status: "MISSED" },
    });
    const pendingOccurrences = await prisma.taskOccurrence.count({
        where: { userId, status: "PENDING" },
    });
    const completionRate = totalOccurrences > 0
        ? Math.round((completedOccurrences / totalOccurrences) * 100)
        : 0;
    // Get Recent Daily Activities (Last 30 Days)
    const activities = await prisma.dailyActivity.findMany({
        where: { userId },
        orderBy: { date: "desc" },
        take: 30,
    });
    return {
        streaks: {
            currentStreak: user.currentStreak,
            longestStreak: user.longestStreak,
        },
        overview: {
            totalTasks: totalOccurrences,
            completedTasks: completedOccurrences,
            missedTasks: missedOccurrences,
            pendingTasks: pendingOccurrences,
            completionRate: `${completionRate}%`,
        },
        recentActivity: activities,
    };
};
//# sourceMappingURL=analytics.service.js.map