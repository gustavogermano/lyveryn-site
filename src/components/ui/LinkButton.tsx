import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-secondary hover:bg-primary/90 shadow-sm shadow-primary/20",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  outline:
    "border border-secondary/20 text-secondary hover:border-primary hover:bg-primary/10",
  ghost: "text-secondary hover:bg-secondary/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-base px-8 py-4",
};

export function LinkButton({
  href,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  external,
  children,
  ...props
}: LinkButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out active:scale-[0.97]",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
}
