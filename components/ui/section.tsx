import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "default" | "muted" | "ink";
  containerSize?: "default" | "wide" | "narrow";
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  variant = "default",
  containerSize = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        {
          "bg-background": variant === "default",
          "bg-muted/60": variant === "muted",
          "bg-ink text-surface": variant === "ink",
        },
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>
        {(eyebrow || title || description) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-accent/85 uppercase mb-4">
                <span className="h-px w-6 bg-accent/40" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-balance text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg text-muted-foreground/95 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
