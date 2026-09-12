import prisma from "@/config/prisma.js";

export async function getDashboardData(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  const today = new Date().toISOString().split("T")[0] || "";
  const dailyActivity = await prisma.dailyActivity.findUnique({
    where: { userId_date: { userId, date: today } },
  });

  const recentTasks = await prisma.task.findMany({
    where: { userId },
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  return {
    user: {
      name: user?.name,
      currentStreak: user?.currentStreak,
      longestStreak: user?.longestStreak,
    },
    todayActivity: dailyActivity,
    recentTasks,
  };
}

export async function getDailyActivity(userId: string, date: string) {
  return prisma.dailyActivity.findUnique({
    where: { userId_date: { userId, date } },
  });
}

export async function getWeeklyStats(userId: string) {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const activities = await prisma.dailyActivity.findMany({
    where: {
      userId,
      createdAt: { gte: weekAgo },
    },
    orderBy: { date: "desc" },
  });

  const successful = activities.filter((a) => a.status === "SUCCESSFUL").length;
  const missed = activities.filter((a) => a.status === "MISSED").length;

  return {
    totalDays: activities.length,
    successful,
    missed,
    successRate: activities.length > 0 ? (successful / activities.length) * 100 : 0,
  };
}

export async function getLeaderboard(year: number) {
  return prisma.leaderboardSnapshot.findMany({
    where: { year },
    orderBy: { rank: "asc" },
    take: 50,
  });
}
