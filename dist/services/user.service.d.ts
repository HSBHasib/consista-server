import type { UpdateProfileInput, ChangePasswordInput } from "../validations/user.validation.js";
export declare const getUserProfile: (userId: string) => Promise<{
    createdAt: Date;
    currentStreak: number;
    email: string;
    id: string;
    image: string | null;
    longestStreak: number;
    name: string;
    role: import("../generated/prisma/enums.js").Role;
    timezone: string;
} | null>;
export declare const updateUserProfile: (userId: string, data: UpdateProfileInput) => Promise<{
    email: string;
    id: string;
    image: string | null;
    name: string;
    timezone: string;
    updatedAt: Date;
}>;
export declare const changeUserPassword: (userId: string, data: ChangePasswordInput) => Promise<void>;
//# sourceMappingURL=user.service.d.ts.map