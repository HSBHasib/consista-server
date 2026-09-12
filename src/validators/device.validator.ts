import { z } from "zod";

// ==========================================
// Zod schema for validating device token registration requests
// ==========================================
export const registerDeviceTokenSchema = z.object({
  token: z.string().min(1, "Device token is required"),
  deviceType: z.enum(["android", "ios", "web"]).optional(),
});
