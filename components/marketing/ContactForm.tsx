"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    // Capture UTM parameters from URL
    const params = new URLSearchParams(window.location.search);
    setValue("utm_source", params.get("utm_source") || undefined);
    setValue("utm_medium", params.get("utm_medium") || undefined);
    setValue("utm_campaign", params.get("utm_campaign") || undefined);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

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
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-accent/20 bg-accent/5">
        <CardContent className="pt-12 pb-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-ink mb-2">
            Message Received
          </h3>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Thank you for reaching out. An insurance solutions expert will
            review your request and contact you within 24 hours.
          </p>
          <Button variant="outline" onClick={() => setIsSuccess(false)}>
            Send another message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 uppercase tracking-wider">
            Full Name
          </label>
          <Input
            {...register("name")}
            placeholder="John Doe"
            className={
              errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
            }
          />
          {errors.name && (
            <p className="text-xs text-red-500 font-medium">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 uppercase tracking-wider">
            Work Email
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className={
              errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
            }
          />
          {errors.email && (
            <p className="text-xs text-red-500 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 uppercase tracking-wider">
            Company
          </label>
          <Input
            {...register("company")}
            placeholder="Acme Insurance"
            className={
              errors.company ? "border-red-500 focus-visible:ring-red-500" : ""
            }
          />
          {errors.company && (
            <p className="text-xs text-red-500 font-medium">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-ink/70 uppercase tracking-wider">
            Role
          </label>
          <select
            {...register("role")}
            className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
          >
            <option value="">Select your role</option>
            <option value="executive">Executive / Leadership</option>
            <option value="underwriting">Head of Underwriting</option>
            <option value="claims">Head of Claims</option>
            <option value="actuarial">Chief Actuary</option>
            <option value="it">IT / Innovation</option>
            <option value="other">Other</option>
          </select>
          {errors.role && (
            <p className="text-xs text-red-500 font-medium">
              {errors.role.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-ink/70 uppercase tracking-wider">
          Area of Interest
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Underwriting",
            "Claims",
            "Actuarial",
            "Modernization",
            "Compliance",
            "Other",
          ].map((area) => (
            <label
              key={area}
              className="flex items-center gap-2 p-3 border border-surface/10 rounded-sm bg-surface/2 cursor-pointer hover:bg-surface/5 transition-colors has-checked:border-accent has-checked:bg-accent/5"
            >
              <input
                type="radio"
                value={area}
                {...register("area")}
                className="w-4 h-4 accent-accent"
              />
              <span className="text-sm font-medium">{area}</span>
            </label>
          ))}
        </div>
        {errors.area && (
          <p className="text-xs text-red-500 font-medium">
            {errors.area.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-ink/70 uppercase tracking-wider">
          Message
        </label>
        <Textarea
          {...register("message")}
          placeholder="Tell us about your automation goals or specific decision logic challenges..."
          rows={5}
          className={
            errors.message ? "border-red-500 focus-visible:ring-red-500" : ""
          }
        />
        {errors.message && (
          <p className="text-xs text-red-500 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 border border-red-500/20 bg-red-500/5 rounded-sm text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <p>{error}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full md:w-auto h-12 px-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>

      <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center md:text-left mt-4">
        🔒 Encrypted & Secure Lead Capture
      </p>
    </form>
  );
}
