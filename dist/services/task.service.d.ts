import type { CreateTaskInput } from "../validations/task.validation.js";
import type { UpdateOccurrenceStatusInput } from "../validations/task.validation.js";
export declare const createNewTask: (userId: string, input: CreateTaskInput) => Promise<{
    id: string;
    userId: string;
    title: string;
    description: string | null;
    isRequired: boolean;
    urgency: import("../generated/prisma/enums.js").Urgency;
    earlyReminderMinutes: number | null;
    intervalValue: number | null;
    intervalUnit: import("../generated/prisma/enums.js").RecurrenceUnit | null;
    repeatCount: number;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateOccurrenceStatus: (userId: string, occurrenceId: string, input: UpdateOccurrenceStatusInput) => Promise<{
    id: string;
    taskId: string;
    userId: string;
    scheduledAt: Date;
    reminderScheduledAt: Date | null;
    status: import("../generated/prisma/enums.js").OccurrenceStatus;
    completedAt: Date | null;
    isRequired: boolean;
    earlyReminderSent: boolean;
    earlyReminderSentAt: Date | null;
    scheduledAlertSent: boolean;
    scheduledAlertSentAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=task.service.d.ts.map