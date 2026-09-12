import cron from "node-cron";
import { prisma } from "../config/prisma.js";
import { OccurrenceStatus } from "@/generated/prisma/enums.js";
import { sendPushNotificationToUser } from "./notification.service.js";

export const initNotificationCron = () => {

  // Run every minute
  cron.schedule("* * * * *", async () => {
    const now = new Date();

    try {
      // Early Reminder Process to send notifications for upcoming tasks
      const pendingReminders = await prisma.taskOccurrence.findMany({
        where: {
          status: OccurrenceStatus.PENDING,
          earlyReminderSent: false,
          reminderScheduledAt: {
            lte: now,
          },
        },
        include: {
          task: {
            select: {
              title: true,
              urgency: true,
            },
          },
        },
      });


      // ==========================================
      // Process each pending reminder
      // ==========================================
      for (const occurrence of pendingReminders) {
        
        // ==========================================
        // FCM Push Notification
        // ==========================================
        await sendPushNotificationToUser({
          userId: occurrence.userId,
          title: `⏰ Early Reminder: ${occurrence.task.title}`,
          body: `Your task is scheduled soon!`,
          data: {
            occurrenceId: occurrence.id,
            taskId: occurrence.taskId,
            type: "EARLY_REMINDER",
          },
        });


        // ==========================================
        // After sending the notification, update the record
        // ==========================================
        await prisma.taskOccurrence.update({
          where: { id: occurrence.id },
          data: {
            earlyReminderSent: true,
            earlyReminderSentAt: new Date(),
          },
        });
      }


      // ==========================================
      // Scheduled Alert Process to send notifications for tasks that are due
      // ==========================================
      const pendingAlerts = await prisma.taskOccurrence.findMany({
        where: {
          status: OccurrenceStatus.PENDING,
          scheduledAlertSent: false,
          scheduledAt: {
            lte: now,
          },
        },
        include: {
          task: {
            select: {
              title: true,
              urgency: true,
            },
          },
        },
      });


      // ==========================================
      // Process each pending alert
      // ==========================================
      for (const occurrence of pendingAlerts) {
        // ==========================================
        // FCM Push Notification
        // ==========================================
        await sendPushNotificationToUser({
          userId: occurrence.userId, 
          title: `🚨 Task Due Now: ${occurrence.task.title}`,
          body: `It's time to perform your task!`,
          data: {
            occurrenceId: occurrence.id,
            taskId: occurrence.taskId,
            type: "SCHEDULED_ALERT",
          },
        });


        // ==========================================
        // Update the task occurrence record
        // ==========================================
        await prisma.taskOccurrence.update({
          where: { id: occurrence.id },
          data: {
            scheduledAlertSent: true,
            scheduledAlertSentAt: new Date(),
          },
        });
      }
    } catch {
      // silent catch to prevent cron worker crash
    }
  });
};