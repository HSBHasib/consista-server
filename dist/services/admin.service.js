import { prisma } from "../config/prisma.js";
export const getSystemMetrics = async () => {
    const [totalUsers, totalTasks, totalOccurrences, completedOccurrences] = await Promise.all([
        prisma.user.count(),
        prisma.task.count(),
        prisma.taskOccurrence.count(),
        prisma.taskOccurrence.count({
            where: { status: "COMPLETED" },
        }),
    ]);
    const completionRate = totalOccurrences > 0
        ? ((completedOccurrences / totalOccurrences) * 100).toFixed(2)
        : "0.00";
    return {
        totalUsers,
        totalTasks,
        totalOccurrences,
        completedOccurrences,
        completionRate: `${completionRate}%`,
    };
};
//# sourceMappingURL=admin.service.js.map