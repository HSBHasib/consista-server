import type { DailyStatus } from "../generated/prisma/browser.js";
export interface DayOccurrencesSummary {
    totalRequired: number;
    completedRequired: number;
    totalOptional: number;
    completedOptional: number;
}
export interface DailyActivityRecord {
    userId: string;
    date: string;
    status: DailyStatus;
    totalRequiredTasks: number;
    completedRequiredTasks: number;
    totalOptionalTasks: number;
    completedOptionalTasks: number;
}
//# sourceMappingURL=activity.type.d.ts.map