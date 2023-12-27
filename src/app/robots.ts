import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thanks", "/404", "/links"],
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
    host: process.env.SITE_URL,
  };
}
