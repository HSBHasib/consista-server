import cron from "node-cron";
import { prisma } from "@/config/prisma.js";

// =================================
// Process Missed Task Occurrences
// =================================
export const processMissedOccurrences = async () => {
  const now = new Date();

  try {
    // Fetch occurrences that have passed their scheduled time and are still PENDING
    const expiredOccurrences = await prisma.taskOccurrence.findMany({
      where: {
        scheduledAt: { lt: now },
        status: "PENDING",
      },
      select: { id: true, userId: true, scheduledAt: true },
    });

    if (expiredOccurrences.length === 0) {
      return;
    }

    // Mark pending occurrences as MISSED
    await prisma.taskOccurrence.updateMany({
      where: {
        id: { in: expiredOccurrences.map((o) => o.id) },
      },
      data: { status: "MISSED" },
    });

    // Sync DailyActivity status for affected users and dates
    const affectedUserDates = new Set<string>();
    expiredOccurrences.forEach((o) => {
      const dateStr = o.scheduledAt.toISOString().split("T")[0];
      if (dateStr) {
        affectedUserDates.add(`${o.userId}_${dateStr}`);
      }
    });

    for (const entry of affectedUserDates) {
      const [userId, dateStr] = entry.split("_");
      if (!userId || !dateStr) continue;

      const dayStart = new Date(`${dateStr}T00:00:00.000Z`);
      const dayEnd = new Date(`${dateStr}T23:59:59.999Z`);

      const totalRequired = await prisma.taskOccurrence.count({
        where: {
          userId,
          isRequired: true,
          scheduledAt: { gte: dayStart, lte: dayEnd },
        },
      });

      const completedRequired = await prisma.taskOccurrence.count({
        where: {
          userId,
          isRequired: true,
          status: "COMPLETED",
          scheduledAt: { gte: dayStart, lte: dayEnd },
        },
      });

      const activityStatus =
        totalRequired > 0 && completedRequired === totalRequired
          ? "SUCCESSFUL"
          : "MISSED";

      await prisma.dailyActivity.upsert({
        where: { userId_date: { userId, date: dateStr } },
        update: { status: activityStatus },
        create: {
          userId,
          date: dateStr,
          status: activityStatus,
          totalRequiredTasks: totalRequired,
          completedRequiredTasks: completedRequired,
        },
      });
    }

    console.log(`[CRON] Processed ${expiredOccurrences.length} missed task occurrences.`);
  } catch (error) {
    console.error("[CRON Error] Failed to process missed occurrences:", error);
  }
};


// =================================
// Initialize Cron Job Scheduler (Runs daily at midnight: '0 0 * * *')
// =================================
export const initCronJobs = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("[CRON] Running daily midnight missed tasks cleanup...");
    await processMissedOccurrences();
  });
};

