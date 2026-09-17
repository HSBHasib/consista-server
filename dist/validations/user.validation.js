import { z } from "zod";
export const updateProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    image: z.string().url("Invalid image URL").optional(),
    timezone: z.string().optional(),
});
export const changePasswordSchema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
});
//# sourceMappingURL=user.validation.js.map