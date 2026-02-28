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
          "bg-muted": variant === "muted",
          "bg-ink text-surface": variant === "ink",
        },
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <span className="text-sm font-semibold tracking-wider text-accent uppercase block mb-3">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
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
