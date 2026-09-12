import { prisma } from "../config/prisma.js";


// ==========================================
// Generate Next Task Occurrence
// ==========================================
export const generateNextOccurrence = async (taskId: string) => {

  // Find the task and its existing occurrences
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    include: {
      occurrences: {
        orderBy: { scheduledAt: "desc" },
        take: 1,
      },
    },
  });

  if (!task || !task.intervalValue || !task.intervalUnit) {
    return null; // If the task is not found or doesn't have a recurrence interval
  }

  const existingOccurrencesCount = await prisma.taskOccurrence.count({
    where: { taskId },
  });


  // Check if the task has reached its repeat count limit
  if (task.repeatCount && existingOccurrencesCount >= task.repeatCount) {
    return null; // If the task has reached its repeat count limit
  }

  const lastOccurrence = task.occurrences[0];
  const lastScheduledAt = lastOccurrence ? new Date(lastOccurrence.scheduledAt) : new Date();


  // Calculate the next scheduled time
  const nextScheduledAt = new Date(lastScheduledAt);
  if (task.intervalUnit === "HOUR") {
    nextScheduledAt.setHours(nextScheduledAt.getHours() + task.intervalValue);
  } else if (task.intervalUnit === "DAY") {
    nextScheduledAt.setDate(nextScheduledAt.getDate() + task.intervalValue);
  }


  // Calculate the early reminder time
  let reminderScheduledAt: Date | null = null;
  if (task.earlyReminderMinutes && task.earlyReminderMinutes > 0) {
    reminderScheduledAt = new Date(
      nextScheduledAt.getTime() - task.earlyReminderMinutes * 60 * 1000
    );
  }

  // Create the new occurrence
  return prisma.taskOccurrence.create({
    data: {
      taskId: task.id,
      userId: task.userId,
      scheduledAt: nextScheduledAt,
      reminderScheduledAt,
      isRequired: task.isRequired,
      status: "PENDING" as any,
    },
  });
};

