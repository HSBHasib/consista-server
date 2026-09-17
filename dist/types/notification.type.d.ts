export interface PushNotificationPayload {
    title: string;
    body: string;
    data?: Record<string, string>;
}
export interface EarlyReminderConfig {
    occurrenceId: string;
    userId: string;
    taskTitle: string;
    scheduledAt: Date;
    earlyReminderMinutes: number;
}
//# sourceMappingURL=notification.type.d.ts.map