import { initializeApp, cert, getApps, type App } from "firebase-admin/app";
import { getMessaging, type Messaging } from "firebase-admin/messaging";
import { env } from "./env.js";

let firebaseApp: App | null = null;

// ==========================================
// Initialize Firebase Admin SDK and messaging 
// ==========================================
if (!getApps().length) {
  try {
    const serviceAccountJson = env.FIREBASE_SERVICE_ACCOUNT_JSON;

    if (serviceAccountJson) {
      const serviceAccount = JSON.parse(serviceAccountJson);

      firebaseApp = initializeApp({
        credential: cert(serviceAccount),
      });
    }
  } catch (error) {
    // Firebase messaging will gracefully stay null if init fails
  }
} else {
  firebaseApp = getApps()[0]!;
}

export const messaging: Messaging | null = firebaseApp
  ? getMessaging(firebaseApp)
  : null;

  