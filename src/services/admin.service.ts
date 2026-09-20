import { prisma } from "@/lib/prisma.js";
import type { AdminMetricsResponse } from "@/types/admin.type.js";

export const getSystemMetrics = async (): Promise<AdminMetricsResponse> => {
  const [totalUsers, totalTasks, totalOccurrences, completedOccurrences] =
    await Promise.all([
      prisma.user.count(),
      prisma.task.count(),
      prisma.taskOccurrence.count(),
      prisma.taskOccurrence.count({
        where: { status: "COMPLETED" },
      }),
    ]);

  const completionRate =
    totalOccurrences > 0
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
