export declare const getUserDashboardStats: (userId: string) => Promise<{
    streaks: {
        currentStreak: number;
        longestStreak: number;
    };
    overview: {
        totalTasks: number;
        completedTasks: number;
        missedTasks: number;
        pendingTasks: number;
        completionRate: string;
    };
    recentActivity: {
        id: string;
        userId: string;
        date: string;
        status: import("../generated/prisma/enums.js").DailyStatus;
        totalRequiredTasks: number;
        completedRequiredTasks: number;
        totalOptionalTasks: number;
        completedOptionalTasks: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
}>;
//# sourceMappingURL=analytics.service.d.ts.map