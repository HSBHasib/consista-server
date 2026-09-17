import { z } from "zod";
export const getAnalyticsQuerySchema = z.object({
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
});
//# sourceMappingURL=analytics.validation.js.map