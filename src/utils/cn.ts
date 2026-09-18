type ClassValue = string | number | boolean | null | undefined;

/**
 * Lightweight className combiner (no external dependency required).
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
