import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/utils/cn";
import { assetPath } from "@/utils/assetPath";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const textColor = variant === "dark" ? "text-secondary" : "text-white";

  return (
    <Link href="#hero" className={cn("group inline-flex items-center", className)}>
      <img
        src={assetPath("/images/gallery/logo-transparente.png")}
        alt={siteConfig.name}
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}
