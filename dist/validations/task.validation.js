import { z } from "zod";
// ================================
// Create Task Schema
// ================================
export const createTaskSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    isRequired: z.boolean().default(false),
    urgency: z.enum(["NORMAL", "MEDIUM"]).default("NORMAL"),
    earlyReminderMinutes: z.number().int().optional(),
    intervalValue: z.number().int().optional(),
    intervalUnit: z.enum(["HOUR", "DAY"]).optional(),
    repeatCount: z.number().int().min(1).default(1),
    startDate: z.string().datetime({ message: "Invalid ISO date format" }),
});
// ================================
// Type for the input data when updating occurrence status
// ================================
export const updateOccurrenceStatusSchema = z.object({
    status: z.enum(["COMPLETED", "MISSED", "PENDING"]),
});
//# sourceMappingURL=task.validation.js.map