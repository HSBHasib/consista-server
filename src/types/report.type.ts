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

export interface LeaderboardUserSummary {
  id: string;
  name: string;
  image?: string | null;
  createdAt: Date;
}

