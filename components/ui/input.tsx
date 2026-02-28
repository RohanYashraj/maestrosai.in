import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-ink placeholder:text-muted-foreground selection:bg-accent selection:text-surface border-ink/20 h-11 w-full min-w-0 rounded-sm border bg-background px-3 py-1 text-base transition-all outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        "focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
