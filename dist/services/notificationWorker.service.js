import { prisma } from "../config/prisma.js";
import { OccurrenceStatus, Urgency } from "../generated/prisma/browser.js";
import cron from "node-cron";
// ==============================
// Initialize Notification Worker
// ==============================
export const initNotificationWorker = () => {
    // Runs every 5 minutes to check pending reminders and alerts
    cron.schedule("*/5 * * * *", async () => {
        const now = new Date();
        // =========================
        // Process Early Reminders (separate from scheduled time)
        // =========================
        const earlyReminders = await prisma.taskOccurrence.findMany({
            where: {
                earlyReminderSent: false,
                reminderScheduledAt: { lte: now },
                status: OccurrenceStatus.PENDING,
                task: {
                    urgency: Urgency.MEDIUM,
                },
            },
            include: {
                task: true,
                user: {
                    include: {
                        deviceTokens: { where: { isActive: true } },
                    },
                },
            },
        });
        for (const occ of earlyReminders) {
            if (occ.user.deviceTokens.length > 0) {
                // FCM push notification logic will trigger here for active tokens
            }
            await prisma.taskOccurrence.update({
                where: { id: occ.id },
                data: {
                    earlyReminderSent: true,
                    earlyReminderSentAt: new Date(),
                },
            });
        }
        // =========================
        // Process Scheduled Alerts (MEDIUM Urgency only)
        // =========================
        const scheduledAlerts = await prisma.taskOccurrence.findMany({
            where: {
                scheduledAlertSent: false,
                scheduledAt: { lte: now },
                status: OccurrenceStatus.PENDING,
                task: {
                    urgency: Urgency.MEDIUM,
                },
            },
            include: {
                task: true,
                user: {
                    include: {
                        deviceTokens: { where: { isActive: true } },
                    },
                },
            },
        });
        for (const occ of scheduledAlerts) {
            if (occ.user.deviceTokens.length > 0) {
                // FCM push notification logic will trigger here for active tokens
            }
            await prisma.taskOccurrence.update({
                where: { id: occ.id },
                data: {
                    scheduledAlertSent: true,
                    scheduledAlertSentAt: new Date(),
                },
            });
        }
    });
};
//# sourceMappingURL=notificationWorker.service.js.map