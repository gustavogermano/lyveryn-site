import { siteConfig } from "./site.config";

export const seoConfig = {
  defaultTitle: siteConfig.seo.title,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  siteUrl: siteConfig.url,
  ogImage: "/images/og-image.jpg",
  twitterHandle: siteConfig.contact.instagramHandle,
  locale: "pt_BR",
} as const;
