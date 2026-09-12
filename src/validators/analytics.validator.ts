import { z } from "zod";

// ==========================================
// Zod schema for validating user analytics queries
// ==========================================
export const getUserAnalyticsSchema = z.object({
  query: z.object({
    timezone: z.string().default("UTC"),
  }),
});

export type GetUserAnalyticsInput = z.infer<typeof getUserAnalyticsSchema>;