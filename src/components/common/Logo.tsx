import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/utils/cn";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const textColor = variant === "dark" ? "text-secondary" : "text-white";

  return (
    <Link href="#hero" className={cn("group inline-flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="34"
        viewBox="0 0 30 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M15 0L0 8.5V25.5L15 34V17L0 8.5L15 0Z" fill="#A3FF6B" />
        <path d="M15 0L30 8.5V25.5L15 34V17L30 8.5L15 0Z" fill="#1F2937" />
      </svg>
      <span className={cn("flex flex-col leading-none", textColor)}>
        <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] opacity-60">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
