import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";

if (!getApps().length) {
  initializeApp({
    credential: cert(process.env.FIREBASE_SERVICE_ACCOUNT_JSON || ""),
  });
}

interface NotificationPayload {
  token: string;
  title: string;
  body: string;
  data?: Record<string, string>;
}

export async function sendPushNotification(payload: NotificationPayload): Promise<boolean> {
  try {
    const messaging = getMessaging();
    await messaging.send({
      token: payload.token,
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: payload.data,
    });
    return true;
  } catch (error) {
    return false;
  }
}

export async function sendBulkNotifications(
  tokens: string[],
  title: string,
  body: string
): Promise<void> {
  const messaging = getMessaging();
  const message = {
    notification: { title, body },
    tokens,
  };

  await messaging.sendEachForMulticast(message);
}
