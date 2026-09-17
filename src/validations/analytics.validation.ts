import { z } from "zod";

export const getAnalyticsQuerySchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export type GetAnalyticsQueryInput = z.infer<typeof getAnalyticsQuerySchema>;

