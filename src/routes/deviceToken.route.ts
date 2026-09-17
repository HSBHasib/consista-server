import { Router } from "express";
import { handleRegisterToken, handleUnregisterToken } from "@/controllers/deviceToken.controller.js";
import { requireAuth } from "@/middlewares/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.post("/register", handleRegisterToken);          // Register a new device token
router.post("/unregister", handleUnregisterToken);      // Unregister an existing device token

export default router;