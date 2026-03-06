import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  interest: z.string().optional(),
  position: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const INTEREST_OPTIONS: { value: string; label: string }[] = [
  { value: "model-office", label: "Model office" },
  { value: "climate-risk", label: "Climate risk" },
  { value: "legacy-systems", label: "Legacy systems" },
  { value: "mi-dashboard", label: "MI dashboards" },
  { value: "other", label: "Other" },
];

export const POSITION_OPTIONS: { value: string; label: string }[] = [
  { value: "executive", label: "Executive / Leadership" },
  { value: "underwriting", label: "Head of Underwriting" },
  { value: "claims", label: "Head of Claims" },
  { value: "actuarial", label: "Chief Actuary" },
  { value: "it", label: "IT / Innovation" },
  { value: "other", label: "Other" },
];
