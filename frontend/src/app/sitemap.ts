import type { MetadataRoute } from "next";
import { courseSlugMap } from "@/lib/constants/courseSlugs";
import { siteConfig } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact-us",
    "/login",
    "/register",
    "/forgot-password",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const courseRoutes = Object.keys(courseSlugMap).map((slug) => ({
    url: `${siteConfig.siteUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
