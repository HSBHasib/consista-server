import { z } from "zod";
export declare const getAnalyticsQuerySchema: z.ZodObject<{
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetAnalyticsQueryInput = z.infer<typeof getAnalyticsQuerySchema>;
//# sourceMappingURL=analytics.validation.d.ts.map