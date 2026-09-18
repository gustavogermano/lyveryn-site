import { siteConfig } from "@/config/site.config";

/**
 * Builds a wa.me link with a prefilled message.
 */
export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage());
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}
