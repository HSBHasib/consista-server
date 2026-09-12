import prisma from "@/config/prisma.js";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export async function createUser(input: CreateUserInput) {
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
    },
  });
  return user;
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function updateUserStreak(
  userId: string,
  currentStreak: number,
  longestStreak: number
) {
  return prisma.user.update({
    where: { id: userId },
    data: { currentStreak, longestStreak },
  });
}
