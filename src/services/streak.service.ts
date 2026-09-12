import { prisma } from "../config/prisma.js";
import { sendPushNotificationToUser } from "./notification.service.js";
import type { StreakCalculationResult } from "../types/streak.types.js";


// ==========================================
// Process Daily Streaks
// ==========================================
export const processDailyStreaks = async (): Promise<StreakCalculationResult> => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const startOfYesterday = new Date(yesterday.setHours(0, 0, 0, 0));
  const endOfYesterday = new Date(yesterday.setHours(23, 59, 59, 999));

  let updatedUsersCount = 0;
  let resetUsersCount = 0;


  // Fetch all users
  const users = await prisma.user.findMany({
    select: { id: true, name: true, currentStreak: true, longestStreak: true },
  });

  // Process each user's daily streak 
  for (const user of users) {
    const completedOccurrenceYesterday = await prisma.taskOccurrence.findFirst({
      where: {
        userId: user.id,
        status: "COMPLETED",
        scheduledAt: {
          gte: startOfYesterday,
          lte: endOfYesterday,
        },
      },
    });


    // Update streak information
    if (completedOccurrenceYesterday) {
      const newStreak = (user.currentStreak || 0) + 1;
      const bestStreak = Math.max(newStreak, user.longestStreak || 0);


      // Update user's streak information
      await prisma.user.update({
        where: { id: user.id },
        data: {
          currentStreak: newStreak,
          longestStreak: bestStreak,
        },
      });

      updatedUsersCount++;


      // Send push notification to user
      await sendPushNotificationToUser({
        userId: user.id,
        title: "🔥 Streak Maintained!",
        body: `Awesome job ${user.name || "there"}! Your current streak is now ${newStreak} days.`,
      });
    } else if (user.currentStreak && user.currentStreak > 0) {

      // Reset streak
      await prisma.user.update({
        where: { id: user.id },
        data: { currentStreak: 0 },
      });

      resetUsersCount++;


      // Send push notification to user
      await sendPushNotificationToUser({
        userId: user.id,
        title: "💔 Streak Reset",
        body: "You missed yesterday's goals. Start fresh today and build a new streak!",
      });
    }
  }

  // If any users were updated or reset
  return {
    updatedUsersCount,
    resetUsersCount,
    processedAt: new Date(),
  };
};

