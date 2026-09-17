import { DailyStatus } from "../generated/prisma/enums.js";
import type { DayOccurrencesSummary } from "../types/activity.type.js";
export declare const determineDailyStatus: (summary: DayOccurrencesSummary) => DailyStatus;
export declare const calculateConsistency: (successfulDays: number, totalActiveDays: number) => number;
//# sourceMappingURL=activity.service.d.ts.map