import { prisma } from "../lib/prisma.js";
// =================================
// Device Token Management
// =================================
export const registerDeviceToken = async (userId, data) => {
    return await prisma.deviceToken.upsert({
        where: { fcmToken: data.fcmToken },
        update: {
            userId,
            deviceType: data.deviceType,
            isActive: true,
            lastUsedAt: new Date(),
        },
        create: {
            userId,
            fcmToken: data.fcmToken,
            deviceType: data.deviceType,
            isActive: true,
        },
    });
};
// ===============================
// Unregister Device Token
// ===============================
export const unregisterDeviceToken = async (userId, data) => {
    const existingToken = await prisma.deviceToken.findFirst({
        where: { fcmToken: data.fcmToken, userId },
    });
    if (!existingToken) {
        throw new Error("Device token not found");
    }
    return await prisma.deviceToken.update({
        where: { fcmToken: data.fcmToken },
        data: { isActive: false },
    });
};
//# sourceMappingURL=deviceToken.service.js.map