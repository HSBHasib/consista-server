import { prisma } from "@/config/prisma.js";

// ==========================
// Get Yearly Report Service
// ==========================
export const getYearlyReport = async (userId: string, year: number) => {
  return await prisma.yearlyReport.findUnique({
    where: {
      userId_year: { userId, year },
    },
  });
};


// ==========================
// Get Leaderboard Service
// ==========================
export const getLeaderboard = async (year: number, limit: number) => {
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


