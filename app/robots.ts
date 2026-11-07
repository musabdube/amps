import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.amps.co.za/sitemap.xml",
    host: "https://www.amps.co.za",
  };
}
