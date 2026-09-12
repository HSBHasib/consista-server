import prisma from "@/config/prisma.js";
import cron from "node-cron";


// runs every hour to check for missed occurrences
export function scheduleOccurrenceChecker() {
  cron.schedule("0 * * * *", async () => {
    try {
      const now = new Date();
      await prisma.taskOccurrence.updateMany({
        where: {
          status: "PENDING",
          scheduledAt: { lt: now },
        },
        data: { status: "MISSED" },
      });
    } catch (error) {
      // silently handle error
    }
  });
}

// runs daily at midnight to update streaks
export function scheduleStreakUpdater() {
  cron.schedule("0 0 * * *", async () => {
    try {
      // streak logic will be implemented here
    } catch {
      // silently handle error
    }
  });
}

