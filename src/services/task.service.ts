import prisma from "../config/prisma.js";

interface CreateTaskInput {
  userId: string;
  title: string;
  description?: string;
  isRequired?: boolean;
  urgency?: "NORMAL" | "MEDIUM";
  intervalValue?: number;
  intervalUnit?: "HOUR" | "DAY";
  repeatCount?: number;
}

export async function createTask(input: CreateTaskInput) {
  return prisma.task.create({
    data: {
      userId: input.userId,
      title: input.title,
      description: input.description,
      isRequired: input.isRequired ?? false,
      urgency: input.urgency ?? "NORMAL",
      intervalValue: input.intervalValue,
      intervalUnit: input.intervalUnit,
      repeatCount: input.repeatCount ?? 1,
    },
  });
}

export async function getTasks(userId: string, page: number, limit: number) {
  const skip = (page - 1) * limit;

  const [tasks, total] = await Promise.all([
    prisma.task.findMany({
      where: { userId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.task.count({ where: { userId } }),
  ]);

  return {
    tasks,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getTaskById(id: string, userId: string) {
  return prisma.task.findFirst({
    where: { id, userId },
    include: { occurrences: true },
  });
}

export async function updateTask(
  id: string,
  userId: string,
  updates: Partial<CreateTaskInput>
) {
  const task = await prisma.task.findFirst({ where: { id, userId } });
  if (!task) return null;

  return prisma.task.update({
    where: { id },
    data: updates,
  });
}

export async function deleteTask(id: string, userId: string) {
  const task = await prisma.task.findFirst({ where: { id, userId } });
  if (!task) return false;

  await prisma.task.delete({ where: { id } });
  return true;
}
