import rateLimit from "express-rate-limit";

// ==================================
// Auth, OTP & Password-related strict rate limiter
// ==================================
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication requests. Please try again after 15 minutes.",
  },
});


// ==================================
// Standard rate limiter for general API endpoints
// ==================================
export const apiRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please slow down.",
  },
});


// ==================================
// Contact form rate limiter
// ==================================
export const contactRateLimiter = rateLimit({
  windowMs: 8 * 60 * 1000, // 8 minutes
  max: 400, // Limit each IP to 6 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests from this IP. Please try again after 8 minutes.",
  },
});
