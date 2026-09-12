import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { handleRegisterDeviceToken } from "@/controllers/device.controller.js";

const router = Router();

// Define device routes —— to register device tokens
router.post("/register-token", requireAuth, handleRegisterDeviceToken);

export default router;

 