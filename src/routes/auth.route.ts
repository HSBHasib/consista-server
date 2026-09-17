import { Router } from "express";
import { handleLogin, handleSendOtp, handleVerifyOtp } from "@/controllers/auth.controller.js";

const router = Router();

router.post("/send-otp", handleSendOtp);
router.post("/verify-otp", handleVerifyOtp);
router.post("/login", handleLogin);

export default router;