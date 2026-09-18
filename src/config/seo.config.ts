import { siteConfig } from "./site.config";
import { assetPath } from "@/utils/assetPath";

export const seoConfig = {
  defaultTitle: siteConfig.seo.title,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  siteUrl: siteConfig.url,
  ogImage: assetPath("/images/og-image.jpg"),
  twitterHandle: siteConfig.contact.instagramHandle,
  locale: "pt_BR",
} as const;
