import { z } from "zod";
export declare const registerDeviceTokenSchema: z.ZodObject<{
    fcmToken: z.ZodString;
    deviceType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const unregisterDeviceTokenSchema: z.ZodObject<{
    fcmToken: z.ZodString;
}, z.core.$strip>;
export type RegisterDeviceTokenInput = z.infer<typeof registerDeviceTokenSchema>;
export type UnregisterDeviceTokenInput = z.infer<typeof unregisterDeviceTokenSchema>;
//# sourceMappingURL=deviceToken.validation.d.ts.map