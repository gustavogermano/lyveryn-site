import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  highlighted?: boolean;
}

export function Card({
  className,
  hoverable = true,
  highlighted = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-8 transition-all duration-300",
        highlighted
          ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/40"
          : "border-secondary/10 shadow-sm",
        hoverable && "hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
