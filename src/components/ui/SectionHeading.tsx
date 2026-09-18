import { cn } from "@/utils/cn";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-primary" />
          <Badge variant="outline" className="px-0 border-none uppercase">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-primary-foreground bg-primary/20 px-1 text-secondary">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-secondary/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
