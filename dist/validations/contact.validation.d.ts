import { z } from "zod";
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    subject: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export type ContactInput = z.infer<typeof contactSchema>;
//# sourceMappingURL=contact.validation.d.ts.map