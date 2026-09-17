import type { RegisterDeviceTokenInput, UnregisterDeviceTokenInput } from "../validations/deviceToken.validation.js";
export declare const registerDeviceToken: (userId: string, data: RegisterDeviceTokenInput) => Promise<{
    id: string;
    userId: string;
    fcmToken: string;
    deviceType: string | null;
    isActive: boolean;
    lastUsedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const unregisterDeviceToken: (userId: string, data: UnregisterDeviceTokenInput) => Promise<{
    id: string;
    userId: string;
    fcmToken: string;
    deviceType: string | null;
    isActive: boolean;
    lastUsedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=deviceToken.service.d.ts.map