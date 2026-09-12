import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { bearer, emailOTP, jwt } from "better-auth/plugins";
import { prisma } from "./prisma.js";
import { sendOTPEmail } from "@/services/email.service.js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  // ==========================================
  // Email & Password Support
  // ==========================================
  emailAndPassword: {
    autoSignIn: false,
    enabled: true,
    async sendResetPassword(data) {
      // Password reset link sent via Nodemailer
      await sendOTPEmail(data.user.email, `Reset password link: ${data.url}`);
    },
  },


  // ==========================================
  // Social OAuth Providers
  // ==========================================
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },


  // ==========================================
  // Plugins (Email OTP & JWT)
  // ==========================================
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await sendOTPEmail(email, otp);
      },
    }),
    jwt(),
    bearer(),
  ],


  // ==========================================
  // Database Session Config
  // ==========================================
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24,     // 1 day
  },
});
