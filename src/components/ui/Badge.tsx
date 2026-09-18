import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
}

const variantStyles = {
  primary: "bg-primary/15 text-secondary",
  secondary: "bg-secondary text-white",
  outline: "border border-secondary/15 text-secondary/70",
};

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
