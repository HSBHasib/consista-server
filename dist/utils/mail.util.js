import nodemailer from "nodemailer";
import { env } from "../config/env.js";
// Create reusable SMTP transporter instance
export const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: Number(env.SMTP_PORT) === 465, // true for port 465, false for 587
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
    },
});
// Helper function to send OTP email
export async function sendOtpEmail(toEmail, otpCode) {
    try {
        await transporter.sendMail({
            from: `"Consista" <${env.SMTP_USER}>`,
            to: toEmail,
            subject: "Consista - Verification OTP Code",
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4A90E2;">Consista Verification Code</h2>
          <p>Your one-time OTP code for verification is:</p>
          <div style="background: #f4f4f4; padding: 15px; font-size: 24px; font-weight: bold; letter-spacing: 5px; text-align: center; margin: 20px 0; border-radius: 5px;">
            ${otpCode}
          </div>
          <p>This code is valid for 5 minutes. If you did not request this, please ignore this email.</p>
        </div>
      `,
        });
        return true;
    }
    catch (error) {
        console.error("❌ Email sending error:", error);
        return false;
    }
}
//# sourceMappingURL=mail.util.js.map