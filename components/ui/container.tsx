import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow";
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:px-6",
        {
          "max-w-7xl": size === "default",
          "max-w-(--breakpoint-2xl)": size === "wide",
          "max-w-3xl": size === "narrow",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
