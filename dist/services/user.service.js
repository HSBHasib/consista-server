import { prisma } from "../lib/prisma.js";
import { hashPassword, verifyPassword } from "better-auth/crypto";
// ==================================
// User Profile Services
// ==================================
export const getUserProfile = async (userId) => {
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
export const updateUserProfile = async (userId, data) => {
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
export const changeUserPassword = async (userId, data) => {
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
//# sourceMappingURL=user.service.js.map