import { prisma } from "@/lib/prisma.js";
import cron from "node-cron";
import { determineDailyStatus } from "@/services/activity.service.js";
import { getLocalHourForTimezone, getLocalDateString } from "@/utils/date.util.js";
import { OccurrenceStatus } from "@/generated/prisma/enums.js";


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

// ===============================
// Initialize Timezone-Specific Cron Jobs
// ===============================
export const initTimezoneCronJobs = () => {
  // Runs every hour at minute 0
  cron.schedule("0 * * * *", async () => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        timezone: true,
        currentStreak: true,
        longestStreak: true,
      },
    });

    const now = new Date();

    for (const user of users) {
      const userTimezone = user.timezone || "UTC";
      const localHour = getLocalHourForTimezone(now, userTimezone);

      // Trigger processing when local time strikes 00:00 (midnight)
      if (localHour === 0) {
        await processUserLocalMidnight(
          user.id,
          userTimezone,
          user.currentStreak,
          user.longestStreak
        );
      }
    }
  });
};


// ===============================
// Process user-specific midnight tasks based on their timezone
// ===============================
const processUserLocalMidnight = async (
  userId: string,
  userTimezone: string,
  currentStreak: number,
  longestStreak: number
) => {
  // Get yesterday's local calendar date (YYYY-MM-DD)
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const dateStr = getLocalDateString(yesterday, userTimezone);

  // Mark overdue PENDING occurrences as MISSED
  await prisma.taskOccurrence.updateMany({
    where: {
      userId,
      status: OccurrenceStatus.PENDING,
      scheduledAt: { lt: new Date() },
    },
    data: { status: OccurrenceStatus.MISSED },
  });

  // Aggregate occurrences for the finalized day
  const occurrences = await prisma.taskOccurrence.findMany({
    where: {
      userId,
      scheduledAt: { gte: new Date(dateStr) },
    },
  });

  const totalRequired = occurrences.filter((o) => o.isRequired).length;
  const completedRequired = occurrences.filter(
    (o) => o.isRequired && o.status === OccurrenceStatus.COMPLETED
  ).length;
  const totalOptional = occurrences.filter((o) => !o.isRequired).length;
  const completedOptional = occurrences.filter(
    (o) => !o.isRequired && o.status === OccurrenceStatus.COMPLETED
  ).length;

  const status = determineDailyStatus({
    totalRequired,
    completedRequired,
    totalOptional,
    completedOptional,
  });

  // Upsert DailyActivity
  await prisma.dailyActivity.upsert({
    where: {
      userId_date: { userId, date: dateStr },
    },
    update: {
      status,
      totalRequiredTasks: totalRequired,
      completedRequiredTasks: completedRequired,
      totalOptionalTasks: totalOptional,
      completedOptionalTasks: completedOptional,
    },
    create: {
      userId,
      date: dateStr,
      status,
      totalRequiredTasks: totalRequired,
      completedRequiredTasks: completedRequired,
      totalOptionalTasks: totalOptional,
      completedOptionalTasks: completedOptional,
    },
  });

  // Recalculate streak
  let newCurrentStreak = currentStreak;
  if (status === "SUCCESSFUL") {
    newCurrentStreak += 1;
  } else if (
    status === "MISSED" ||
    status === "NO_ACTIVITY" ||
    status === "OPTIONAL_ONLY"
  ) {
    newCurrentStreak = 0;
  }

  const newLongestStreak = Math.max(longestStreak, newCurrentStreak);

  await prisma.user.update({
    where: { id: userId },
    data: {
      currentStreak: newCurrentStreak,
      longestStreak: newLongestStreak,
    },
  });
};

