import { z } from "zod";
export declare const getYearlyReportSchema: z.ZodObject<{
    year: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const getLeaderboardSchema: z.ZodObject<{
    year: z.ZodCoercedNumber<unknown>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=report.validation.d.ts.map