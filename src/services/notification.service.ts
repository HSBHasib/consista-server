import type { SendNotificationPayload } from "@/types/device.types.js";
import { messaging } from "../config/firebase.js";
import { prisma } from "../config/prisma.js";


// ==========================================
// Send Push Notification to User
// ==========================================
export const sendPushNotificationToUser = async ({
  userId,
  title,
  body,
  data,
}: SendNotificationPayload) => {
  if (!messaging) {
    console.error("Firebase Admin messaging is not initialized.");
    return null;
  }


  // ==========================================
  // Find all device tokens associated with the user
  // ==========================================
  const deviceTokens = await prisma.deviceToken.findMany({
    where: { userId },
    select: { fcmToken: true },
  });

  if (!deviceTokens.length) return null;

  const tokens = deviceTokens.map((d) => d.fcmToken);

  const message = {
    notification: { title, body },
    data,
    tokens,
  };


  // ==========================================
  // Send the notification to all device tokens
  // ==========================================
  try {
    const response = await messaging.sendEachForMulticast(message);

    // Clean up invalid/ expired tokens from the database
    const invalidTokens: string[] = [];
    response.responses.forEach((resp, idx) => {
      if (!resp.success) {
        const errCode = resp.error?.code;
        if (
          errCode === "messaging/invalid-registration-token" ||
          errCode === "messaging/registration-token-not-registered"
        ) {
          const token = tokens[idx];
          if (token) {
            invalidTokens.push(token);
          }
        }
      }
    });


    // Delete invalid/ expired tokens from the database
    if (invalidTokens.length > 0) {
      await prisma.deviceToken.deleteMany({
        where: { fcmToken: { in: invalidTokens } },
      });
    }

    return response;
  } catch (error) {
    console.error("Error sending push notification:", error);
    throw error;
  }
};

