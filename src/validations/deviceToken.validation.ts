import { z } from "zod";

// ============================
// Device Token Validation
// ============================
export const registerDeviceTokenSchema = z.object({
  fcmToken: z.string().min(1, "FCM token is required"),
  deviceType: z.string().optional(),
});


// ===============================
// Unregister Device Token
// ===============================
export const unregisterDeviceTokenSchema = z.object({
  fcmToken: z.string().min(1, "FCM token is required"),
});


// ===============================
// Input Types for Device Token Operations
// ===============================
export type RegisterDeviceTokenInput = z.infer<typeof registerDeviceTokenSchema>;


// ===============================
// Unregister Device Token Input Type
// ===============================
export type UnregisterDeviceTokenInput = z.infer<typeof unregisterDeviceTokenSchema>;
