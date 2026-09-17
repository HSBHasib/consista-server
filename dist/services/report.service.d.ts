export declare const getYearlyReport: (userId: string, year: number) => Promise<{
    id: string;
    userId: string;
    year: number;
    yearlyConsistencyPct: number;
    totalTasksCompleted: number;
    successfulDaysCount: number;
    missedDaysCount: number;
    noActivityDaysCount: number;
    optionalOnlyDaysCount: number;
    streakBreaksCount: number;
    finalRank: number | null;
    reportData: import("@prisma/client/runtime/client").JsonValue;
    createdAt: Date;
} | null>;
export declare const getLeaderboard: (year: number, limit: number) => Promise<({
    user: {
        id: string;
        image: string | null;
        name: string;
    };
} & {
    id: string;
    userId: string;
    year: number;
    rank: number;
    currentStreakAtEnd: number;
    longestStreakAtEnd: number;
    consistencyPct: number;
    streakBreaks: number;
    totalCompletedTasks: number;
    createdAt: Date;
})[]>;
export declare const getTop10Leaderboard: (year: number) => Promise<({
    user: {
        createdAt: Date;
        id: string;
        image: string | null;
        name: string;
    };
} & {
    id: string;
    userId: string;
    year: number;
    rank: number;
    currentStreakAtEnd: number;
    longestStreakAtEnd: number;
    consistencyPct: number;
    streakBreaks: number;
    totalCompletedTasks: number;
    createdAt: Date;
})[]>;
//# sourceMappingURL=report.service.d.ts.map