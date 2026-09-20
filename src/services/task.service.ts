import { prisma }  from "@/lib/prisma.js";
import type { CreateTaskInput } from "@/validations/task.validation.js";
import type { UpdateOccurrenceStatusInput } from "@/validations/task.validation.js";

// ==================================
// Create New Task
// ==================================
export const createNewTask = async (userId: string, input: CreateTaskInput) => {
  const {
    title,
    description,
    isRequired,
    urgency,
    earlyReminderMinutes,
    intervalValue,
    intervalUnit,
    repeatCount,
    startDate,
  } = input;

  const baseDate = new Date(startDate);

  return await prisma.$transaction(async (tx) => {
    // Create Main Task
    const task = await tx.task.create({
      data: {
        userId,
        title,
        description,
        isRequired,
        urgency,
        earlyReminderMinutes,
        intervalValue,
        intervalUnit,
        repeatCount,
      },
    });

    // Generate Task Occurrences based on recurrence
    const occurrencesData = [];

    for (let i = 0; i < repeatCount; i++) {
      const scheduledAt = new Date(baseDate);

      if (i > 0 && intervalValue && intervalUnit) {
        if (intervalUnit === "HOUR") {
          scheduledAt.setHours(scheduledAt.getHours() + i * intervalValue);
        } else if (intervalUnit === "DAY") {
          scheduledAt.setDate(scheduledAt.getDate() + i * intervalValue);
        }
      }

      let reminderScheduledAt: Date | null = null;
      if (earlyReminderMinutes) {
        reminderScheduledAt = new Date(
          scheduledAt.getTime() - earlyReminderMinutes * 60 * 1000,
        );
      }

      occurrencesData.push({
        taskId: task.id,
        userId,
        scheduledAt,
        reminderScheduledAt,
        isRequired,
      });
    }

    await tx.taskOccurrence.createMany({
      data: occurrencesData,
    });

    return task;
  });
};

// ==================================
// Update Occurrence Statust
// ==================================
export const updateOccurrenceStatus = async (
  userId: string,
  occurrenceId: string,
  input: UpdateOccurrenceStatusInput,
) => {
  const { status } = input;

  return await prisma.$transaction(async (tx) => {
    // Fetch occurrence & ensure owner
    const occurrence = await tx.taskOccurrence.findFirst({
      where: { id: occurrenceId, userId },
      include: { task: true },
    });

    if (!occurrence) {
      throw new Error("Task occurrence not found");
    }

    const completedAt = status === "COMPLETED" ? new Date() : null;

    // Update Occurrence Status
    const updatedOccurrence = await tx.taskOccurrence.update({
      where: { id: occurrenceId },
      data: {
        status,
        completedAt,
      },
    });

    // Sync Daily Activity for the scheduled date (YYYY-MM-DD)
    const dateStr = occurrence.scheduledAt.toISOString().split("T")[0] as string;

    const dayOccurrences = await tx.taskOccurrence.findMany({
      where: {
        userId,
        scheduledAt: {
          gte: new Date(`${dateStr}T00:00:00.000Z`),
          lte: new Date(`${dateStr}T23:59:59.999Z`),
        },
      },
    });

    const totalRequired = dayOccurrences.filter((o) => o.isRequired).length;
    const completedRequired = dayOccurrences.filter(
      (o) => o.isRequired && o.status === "COMPLETED",
    ).length;
    const totalOptional = dayOccurrences.filter((o) => !o.isRequired).length;
    const completedOptional = dayOccurrences.filter(
      (o) => !o.isRequired && o.status === "COMPLETED",
    ).length;

    let dailyStatus: "SUCCESSFUL" | "MISSED" | "NO_ACTIVITY" | "OPTIONAL_ONLY" =
      "NO_ACTIVITY";

    if (totalRequired > 0) {
      dailyStatus =
        completedRequired === totalRequired ? "SUCCESSFUL" : "MISSED";
    } else if (totalOptional > 0) {
      dailyStatus = completedOptional > 0 ? "OPTIONAL_ONLY" : "NO_ACTIVITY";
    }

    await tx.dailyActivity.upsert({
      where: {
        userId_date: { userId, date: dateStr },
      },
      update: {
        status: dailyStatus,
        totalRequiredTasks: totalRequired,
        completedRequiredTasks: completedRequired,
        totalOptionalTasks: totalOptional,
        completedOptionalTasks: completedOptional,
      },
      create: {
        userId,
        date: dateStr,
        status: dailyStatus,
        totalRequiredTasks: totalRequired,
        completedRequiredTasks: completedRequired,
        totalOptionalTasks: totalOptional,
        completedOptionalTasks: completedOptional,
      },
    });

    // Update User Streaks if Completed
    if (status === "COMPLETED") {
      const user = await tx.user.findUnique({ where: { id: userId } });
      if (user) {
        const newStreak = user.currentStreak + 1;
        const newLongest = Math.max(newStreak, user.longestStreak);

        await tx.user.update({
          where: { id: userId },
          data: {
            currentStreak: newStreak,
            longestStreak: newLongest,
          },
        });
      }
    }

    return updatedOccurrence;
  });
};
