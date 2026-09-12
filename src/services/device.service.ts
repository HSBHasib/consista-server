import { prisma } from "../config/prisma.js";
import type { RegisterDeviceTokenDTO } from "../types/device.types.js";

// ==========================================
// Register a new device token for a user
// ==========================================
export const registerDeviceToken = async (userId: string, data: RegisterDeviceTokenDTO) => {
  return await prisma.deviceToken.upsert({
    where: { fcmToken: data.token },
    update: {
      userId,
      deviceType: data.deviceType,
      updatedAt: new Date(),
    },
    create: {
      userId,
      fcmToken: data.token,
      deviceType: data.deviceType,
    },
  });
};
