import prisma from "../config/prisma.js";
import { sendOtpEmail } from "../utils/mail.util.js";
// ================================
// Send OTP to user's email
// ================================
export const sendOtp = async (email) => {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes validity
    // Save or Update OTP in Verification table
    await prisma.verification.create({
        data: {
            identifier: email,
            value: otp,
            expiresAt,
        },
    });
    // Send OTP using your existing mail utility
    const isSent = await sendOtpEmail(email, otp);
    return isSent;
};
// ================================
// Verify OTP
// ================================
export const verifyOtp = async (email, otp) => {
    const record = await prisma.verification.findFirst({
        where: {
            identifier: email,
            value: otp,
            expiresAt: {
                gt: new Date(),
            },
        },
    });
    if (!record) {
        return false;
    }
    // Delete token after successful verification
    await prisma.verification.delete({
        where: { id: record.id },
    });
    return true;
};
//# sourceMappingURL=otp.service.js.map