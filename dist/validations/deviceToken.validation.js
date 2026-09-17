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
//# sourceMappingURL=deviceToken.validation.js.map