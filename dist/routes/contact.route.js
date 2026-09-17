import { Router } from "express";
import { handleContactSubmission } from "../controllers/contact.controller.js";
import { contactRateLimiter } from "../middlewares/rateLimit.middleware.js";
const router = Router();
router.post("/", contactRateLimiter, handleContactSubmission);
export default router;
//# sourceMappingURL=contact.route.js.map