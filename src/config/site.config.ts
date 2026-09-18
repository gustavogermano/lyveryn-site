import { assetPath } from "@/utils/assetPath";

export const siteConfig = {
  name: "Lyveryn",
  tagline: "Sites • Cardápios Digitais",
  description:
    "Sites institucionais modernos e cardápios digitais com pedido via WhatsApp. Soluções simples, rápidas e sob medida para o seu negócio.",
  shortDescription: "Tecnologia que impulsiona o seu negócio.",
  url: "https://www.lyveryn.com.br",

  contact: {
    whatsapp: "5519997298492",
    whatsappDisplay: "(19) 99729-8492",
    email: "contato@lyveryn.com.br",
    instagram: "https://instagram.com/lyveryn",
    instagramHandle: "@lyveryn",
    facebook: "https://facebook.com/lyveryn",
    address: {
      city: "Piracicaba",
      state: "SP",
      country: "Brasil",
      full: "Piracicaba, SP - Brasil",
    },
    googleMapsUrl: "https://maps.google.com/?q=Piracicaba,SP",
  },

  whatsappMessage: (context?: string) =>
    `Olá! Tenho interesse em conhecer os serviços da Lyveryn${
      context ? ` (${context})` : ""
    }.`,

  logo: {
    icon: assetPath("/images/logo-icon.svg"),
    full: assetPath("/images/gallery/logo-transparente.png"),
  },

  seo: {
    title: "Lyveryn — Sites Institucionais e Cardápios Digitais",
    description:
      "Criamos sites institucionais modernos e cardápios digitais com pedido via WhatsApp. Presença profissional e mais vendas para o seu negócio.",
    keywords: [
      "sites institucionais",
      "cardápio digital",
      "cardápio online",
      "pedido whatsapp",
      "criação de sites",
      "site para restaurante",
      "agência de tecnologia Piracicaba",
    ],
  },

  stats: [
    { value: "+100", label: "projetos entregues" },
    { value: "100%", label: "clientes satisfeitos" },
    { value: "+3x", label: "mais pedidos com cardápios digitais" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
