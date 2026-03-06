"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  INTEREST_OPTIONS,
  POSITION_OPTIONS,
} from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { interest: "", position: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    // Capture UTM from URL in the submit handler (no state + effect)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      data.utm_source = params.get("utm_source") || undefined;
      data.utm_medium = params.get("utm_medium") || undefined;
      data.utm_campaign = params.get("utm_campaign") || undefined;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSuccess(true);
      reset({ interest: "", position: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 md:p-12 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <Check className="h-7 w-7 text-accent" />
        </div>
        <h3 className="text-xl font-serif font-bold text-ink mb-2">
          Message received
        </h3>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto text-sm leading-relaxed">
          Thank you for reaching out. A solutions expert will review your
          request and contact you within 24 hours.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="rounded-md"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-ink">
            Full name
          </Label>
          <Input
            id="contact-name"
            {...register("name")}
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            className={
              errors.name
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }
          />
          {errors.name && (
            <p className="text-xs text-destructive font-medium" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-ink">
            Work email
          </Label>
          <Input
            id="contact-email"
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            aria-invalid={!!errors.email}
            className={
              errors.email
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }
          />
          {errors.email && (
            <p className="text-xs text-destructive font-medium" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-company" className="text-ink">
          Company
        </Label>
        <Input
          id="contact-company"
          {...register("company")}
          placeholder="Acme Insurance"
          aria-invalid={!!errors.company}
          className={
            errors.company
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }
        />
        {errors.company && (
          <p className="text-xs text-destructive font-medium" role="alert">
            {errors.company.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-position" className="text-ink">
          Current position{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Controller
          name="position"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value || undefined}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="contact-position"
                className="w-full h-10 rounded-md"
                aria-label="Current position (optional)"
              >
                <SelectValue placeholder="Select your position (optional)" />
              </SelectTrigger>
              <SelectContent>
                {POSITION_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-interest" className="text-ink">
          Area of interest{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Controller
          name="interest"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value || undefined}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="contact-interest"
                className="w-full h-10 rounded-md"
                aria-label="Area of interest (optional)"
              >
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                {INTEREST_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-ink">
          Message
        </Label>
        <Textarea
          id="contact-message"
          {...register("message")}
          placeholder="Tell us about your goals or questions..."
          rows={5}
          aria-invalid={!!errors.message}
          className={
            errors.message
              ? "border-destructive focus-visible:ring-destructive"
              : ""
          }
        />
        {errors.message && (
          <p className="text-xs text-destructive font-medium" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <div
          className="flex items-center gap-2 rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full sm:w-auto h-12 px-10 rounded-md"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
