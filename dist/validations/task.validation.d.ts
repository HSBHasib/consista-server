import { z } from "zod";
export declare const createTaskSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    isRequired: z.ZodDefault<z.ZodBoolean>;
    urgency: z.ZodDefault<z.ZodEnum<{
        MEDIUM: "MEDIUM";
        NORMAL: "NORMAL";
    }>>;
    earlyReminderMinutes: z.ZodOptional<z.ZodNumber>;
    intervalValue: z.ZodOptional<z.ZodNumber>;
    intervalUnit: z.ZodOptional<z.ZodEnum<{
        DAY: "DAY";
        HOUR: "HOUR";
    }>>;
    repeatCount: z.ZodDefault<z.ZodNumber>;
    startDate: z.ZodString;
}, z.core.$strip>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export declare const updateOccurrenceStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        COMPLETED: "COMPLETED";
        MISSED: "MISSED";
        PENDING: "PENDING";
    }>;
}, z.core.$strip>;
export type UpdateOccurrenceStatusInput = z.infer<typeof updateOccurrenceStatusSchema>;
//# sourceMappingURL=task.validation.d.ts.map