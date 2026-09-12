import rateLimit from "express-rate-limit";

// ==========================================
// Auth & Sensitive Endpoints (OTP, Login, Password Reset) Rate Limiter
// ==========================================
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 10, // Maxium 10 requent in 15 mins
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts. Please try again after 15 minutes.",
  },
});


// ==========================================
// General API Rate Limiter
// ==========================================
export const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // Maxium 100 requent in 15 mins
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP. Please try again later.",
  },
});

