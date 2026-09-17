import prisma from "@/config/prisma.js";
import type { CreateTaskInput } from "@/validations/task.validation.js";

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
          scheduledAt.getTime() - earlyReminderMinutes * 60 * 1000
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
