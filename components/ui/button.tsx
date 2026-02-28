import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-surface hover:bg-ink/90 shadow-[0_14px_40px_-26px_rgba(15,23,42,0.8)] hover:-translate-y-[1px] active:translate-y-0",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-border bg-background hover:bg-muted/70 hover:text-ink",
        secondary:
          "bg-muted text-ink hover:bg-muted/80 border border-border/70",
        ghost: "hover:bg-muted/70 hover:text-ink",
        link: "text-ink underline underline-offset-4 hover:text-accent",
        accent:
          "bg-accent text-accent-foreground shadow-[0_18px_45px_-24px_rgba(15,23,42,0.65)] hover:bg-accent/90 hover:-translate-y-[1px] hover:shadow-[0_24px_60px_-32px_rgba(15,23,42,0.85)] active:translate-y-0",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
