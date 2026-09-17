import { Router } from "express";
import { handleGetProfile, handleUpdateProfile, handleChangePassword } from "@/controllers/user.controller.js";
import { requireAuth } from "@/middlewares/auth.middleware.js";

const router = Router();

router.use(requireAuth);

router.get("/profile", handleGetProfile);                       // Get User Profile
router.patch("/profile", handleUpdateProfile);                  // Update User Profile
router.patch("/change-password", handleChangePassword);         // Change User Password

export default router;
