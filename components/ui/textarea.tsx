import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent selection:bg-accent selection:text-surface border-ink/20 flex field-sizing-content min-h-24 w-full rounded-sm border bg-background px-3 py-2 text-base transition-all outline-none disabled:opacity-50 md:text-sm",
        "focus-visible:ring-1",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
