import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Please select your role"),
  area: z.string().min(2, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
