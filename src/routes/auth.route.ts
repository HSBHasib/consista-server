import { Router } from "express";
import { handleLogin, handleResetPassword, handleSendOtp, handleVerifyOtp } from "@/controllers/auth.controller.js";

const router = Router();

router.post("/send-otp", handleSendOtp);                // Send OTP to user's email
router.post("/verify-otp", handleVerifyOtp);            // Verify OTP and create user if necessary
router.post("/login", handleLogin);                     // Login user
router.post("/reset-password", handleResetPassword);    // Reset user's password

export default router;
