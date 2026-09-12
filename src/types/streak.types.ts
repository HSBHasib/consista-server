// ==========================================
// Interface for the result of a streak update operation
// ==========================================
export interface StreakUpdateResult {
  userId: string;
  previousStreak: number;
  newStreak: number;
  status: "INCREMENTED" | "RESET" | "UNCHANGED";
}


// ==========================================
// Interface for summarizing the execution of a cron job
// ==========================================
export interface CronJobSummary {
  processedUsers: number;
  incrementedCount: number;
  resetCount: number;
  executedAt: Date;
}


// ==========================================
// Interface for the result of a streak calculation operation
// ==========================================
export interface StreakCalculationResult {
  updatedUsersCount: number;
  resetUsersCount: number;
  processedAt: Date;
}

