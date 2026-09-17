import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string({ message: "Email is required" })
    .trim()
    .email("Please provide a valid email address"),
  subject: z
    .string({ message: "Subject is required" })
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject cannot exceed 200 characters"),
  message: z
    .string({ message: "Message is required" })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
