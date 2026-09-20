import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "../config/env.js";
import { prisma } from "./prisma.js";
import { emailOTP } from "better-auth/plugins";
import { sendOtpEmail } from "../utils/mail.util.js";
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    trustedOrigins: [env.NEXT_PUBLIC_CLIENT_URL],
    emailAndPassword: {
        autoSignIn: false,
        enabled: true,
    },
    plugins: [
        emailOTP({
            expiresIn: 300,
            async sendVerificationOTP({ email, otp }) {
                await sendOtpEmail(email, otp);
            },
        }),
    ],
    // Social login providers — (Google & Github)
    socialProviders: {
        google: {
            clientId: env.GOOGLE_CLIENT_ID || "",
            clientSecret: env.GOOGLE_CLIENT_SECRET || "",
        },
        github: {
            clientId: env.GITHUB_CLIENT_ID || "",
            clientSecret: env.GITHUB_CLIENT_SECRET || "",
        },
    },
});
//# sourceMappingURL=auth.js.map