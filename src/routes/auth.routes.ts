import { Router } from "express";  
import { register, login, logout, me } from "@/controllers/auth.controller.js";

const authRouter = Router();

// ==========================================
// Define authentication routes —— to handle OTP requests and verification
// ==========================================
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", me);

export default authRouter;

