import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/legal", "/privacy"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-07-24"),
    changeFrequency: path === "" ? "weekly" : "yearly",
    priority: path === "" ? 1 : 0.4,
  }));
}
