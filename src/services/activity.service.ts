import { DailyStatus } from "@/generated/prisma/enums.js";
import type { DayOccurrencesSummary } from "@/types/activity.type.js";


// ====================================
// Determines the exact DailyStatus based on task occurrences summary.
// ====================================
export const determineDailyStatus = (summary: DayOccurrencesSummary): DailyStatus => {
  const { totalRequired, completedRequired, totalOptional } = summary;

  if (totalRequired === 0 && totalOptional === 0) {
    return DailyStatus.NO_ACTIVITY;
  }

  if (totalRequired === 0 && totalOptional > 0) {
    return DailyStatus.OPTIONAL_ONLY;
  }

  if (totalRequired > 0 && completedRequired === totalRequired) {
    return DailyStatus.SUCCESSFUL;
  }

  return DailyStatus.MISSED;
};


// ==============================
// Central consistency formula abstraction
// ==============================
export const calculateConsistency = (successfulDays: number, totalActiveDays: number): number => {
  if (totalActiveDays === 0) return 0;
  const pct = (successfulDays / totalActiveDays) * 100;
  return Math.round(pct * 100) / 100; // 2 decimal precision
};

