import { z } from "zod";

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

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
