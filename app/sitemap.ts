import type { MetadataRoute } from "next"; import { projects } from "@/content/site"; import { absoluteUrl } from "@/lib/site-url";
export const sitemapPaths=()=>["","/research","/engineering","/analytics","/projects",...projects.filter(p=>p.public).map(p=>`/projects/${p.slug}`)];
export default function sitemap():MetadataRoute.Sitemap{return sitemapPaths().map(path=>({url:absoluteUrl(path||"/"),changeFrequency:path?"monthly":"weekly",priority:path===""?1:path.startsWith("/projects/")?0.7:0.8}))}
