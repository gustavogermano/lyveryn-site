import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, rows = 5, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-secondary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          className={cn(
            "w-full resize-none rounded-xl border border-secondary/15 bg-white px-4 py-3 text-secondary placeholder:text-secondary/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30",
            error && "border-red-400 focus:border-red-400 focus:ring-red-200",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
