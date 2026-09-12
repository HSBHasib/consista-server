import { z } from "zod";

// ==========================================
// Zod schemas for validating authentication requests
// ==========================================
export const requestOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
});


// ==========================================
// Zod schema for validating OTP verification requests
// ==========================================
export const verifyOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
  code: z.string().length(6, "OTP must be 6 digits"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
});

