export interface YearlyReportPDFData {
  year: number;
  yearlyConsistencyPct: number;
  totalTasksCompleted: number;
  successfulDaysCount: number;
  missedDaysCount: number;
  noActivityDaysCount: number;
  optionalOnlyDaysCount: number;
  streakBreaksCount: number;
  finalRank?: number | null;
}

export interface LeaderboardSnapshotRecord {
  id: string;
  userId: string;
  year: number;
  consistencyPct: number;
  currentStreakAtEnd: number;
  longestStreakAtEnd: number;
  streakBreaks: number;
  totalCompletedTasks: number;
  createdAt: Date;
}
