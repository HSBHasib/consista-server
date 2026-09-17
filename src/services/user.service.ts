import { prisma } from "@/config/prisma.js";
import { hashPassword, verifyPassword } from "better-auth/crypto";
import type { UpdateProfileInput, ChangePasswordInput } from "@/validations/user.validation.js";

// ==================================
// User Profile Services
// ==================================
export const getUserProfile = async (userId: string) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      timezone: true,
      currentStreak: true,
      longestStreak: true,
      createdAt: true,
    },
  });
};


// ==================================
// User Profile Update Services
// ==================================
export const updateUserProfile = async (userId: string, data: UpdateProfileInput) => {
  return await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      timezone: true,
      updatedAt: true,
    },
  });
};


// ==================================
// User Password Change Services
// ==================================
export const changeUserPassword = async (userId: string, data: ChangePasswordInput) => {
  const account = await prisma.account.findFirst({
    where: { userId, providerId: "credential" },
  });

  if (!account || !account.password) {
    throw new Error("Password account not found or signed in via OAuth");
  }

  const isValid = await verifyPassword({
    password: data.currentPassword,
    hash: account.password,
  });

  if (!isValid) {
    throw new Error("Incorrect current password");
  }

  const newHashedPassword = await hashPassword(data.newPassword);

  await prisma.account.update({
    where: { id: account.id },
    data: { password: newHashedPassword },
  });
};