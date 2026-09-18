import { buildWhatsAppLink } from "@/lib/whatsapp";

export type ContactFormData = {
  name: string;
  phone: string;
  message: string;
};

/**
 * Currently routes the contact form straight into a prefilled WhatsApp
 * message. Swap the implementation here if a backend/email endpoint is
 * added later — no component changes required.
 */
export function submitContactForm(data: ContactFormData): { redirectUrl: string } {
  const message = `Olá! Meu nome é ${data.name}.\nTelefone: ${data.phone}\n\n${data.message}`;
  return { redirectUrl: buildWhatsAppLink(message) };
}
