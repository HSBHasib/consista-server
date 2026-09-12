// ==========================================
// Data Transfer Object for registering a device token
// ==========================================
export interface RegisterDeviceTokenDTO {
  token: string;
  deviceType?: "android" | "ios" | "web";
}


// ==========================================
// Data Transfer Object for sending a notification
// ==========================================
export interface SendNotificationPayload {
  userId: string;
  title: string;
  body: string;
  data?: Record<string, string>;
}

