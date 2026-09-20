import { prisma } from "../lib/prisma.js";
// ==========================
// Get Yearly Report Service
// ==========================
export const getYearlyReport = async (userId, year) => {
    return await prisma.yearlyReport.findUnique({
        where: {
            userId_year: { userId, year },
        },
    });
};
// ==========================
// Get Leaderboard Service
// ==========================
export const getLeaderboard = async (year, limit) => {
    return await prisma.leaderboardSnapshot.findMany({
        where: { year },
        orderBy: [
            { consistencyPct: "desc" },
            { longestStreakAtEnd: "desc" },
            { totalCompletedTasks: "desc" },
        ],
        take: limit,
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            },
        },
    });
};
// ==========================
// Get Top 10 Leaderboard Service
// ==========================
export const getTop10Leaderboard = async (year) => {
    return await prisma.leaderboardSnapshot.findMany({
        where: { year },
        orderBy: [
            { currentStreakAtEnd: "desc" }, // 1. Current streak
            { longestStreakAtEnd: "desc" }, // 2. Longest streak
            { consistencyPct: "desc" }, // 3. Consistency %
            { streakBreaks: "asc" }, // 4. Fewer streak breaks
            { totalCompletedTasks: "desc" }, // 5. Total completed tasks
            { user: { createdAt: "asc" } }, // 6. User's actual account creation date
        ],
        take: 10,
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                    createdAt: true,
                },
            },
        },
    });
};
//# sourceMappingURL=report.service.js.map