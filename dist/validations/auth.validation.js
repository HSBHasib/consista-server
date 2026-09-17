import { z } from "zod";
// =========================
// Send OTP Schema
// =========================
export const sendOtpSchema = z.object({
    email: z.string().email("Invalid email address"),
});
// =========================
// Verify OTP Schema
// =========================
export const verifyOtpSchema = z.object({
    email: z.string().email("Invalid email address"),
    otp: z.string().length(6, "OTP must be 6 digits"),
    name: z.string().min(2, "Name is required").optional(),
    password: z.string().min(8, "Password must be at least 8 characters").optional(),
});
// =========================
// Login Schema
// =========================
export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});
// =========================
// Reset Password Schema
// =========================
export const resetPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
    otp: z.string().length(6, "OTP must be 6 digits"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
});
//# sourceMappingURL=auth.validation.js.map