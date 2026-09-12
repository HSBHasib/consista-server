import { z } from "zod";

// ==========================================
// Zod schema for validating task creation requests
// ==========================================
export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  isRequired: z.boolean().default(false),
  urgency: z.enum(["NORMAL", "MEDIUM"]).default("NORMAL"), 
  earlyReminderMinutes: z.number().int().nonnegative().optional(),
  intervalValue: z.number().int().positive().optional(),
  intervalUnit: z.enum(["HOUR", "DAY"]).optional(),
  repeatCount: z.number().int().positive().default(1),
  scheduledAt: z.string().datetime().or(z.date()),
});


// ==========================================
// Zod schema for validating task status updates
// ==========================================
export const updateTaskStatusSchema = z.object({
  status: z.enum(["PENDING", "COMPLETED", "SKIPPED", "MISSED"]),
});


// ==========================================
// Type definitions for validated inputs
// ==========================================
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskStatusInput = z.infer<typeof updateTaskStatusSchema>;
