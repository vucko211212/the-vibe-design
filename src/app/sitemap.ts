import { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thevibedesign.com";

  // Static routes
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes (Case studies)
  const workRoutes = caseStudies.map((work) => ({
    url: `${baseUrl}/work/${work.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
