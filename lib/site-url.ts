const stripSlash = (value: string) => value.replace(/\/$/, "");

export function resolveSiteUrl(env: NodeJS.ProcessEnv = process.env): URL {
  const configured = env.NEXT_PUBLIC_SITE_URL;
  const vercelHost = env.VERCEL_PROJECT_PRODUCTION_URL || (env.VERCEL_ENV === "production" ? env.VERCEL_URL : undefined);
  const candidate = configured || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
  let url: URL;
  try { url = new URL(stripSlash(candidate)); } catch { throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute http(s) origin."); }
  if (!["http:", "https:"].includes(url.protocol) || url.pathname !== "/" || url.search || url.hash) throw new Error("Site URL must be an http(s) origin without a path, query, or hash.");
  if (url.hostname === "example.com") throw new Error("example.com is not a valid deployment origin.");
  if (env.VERCEL_ENV === "production" && url.hostname === "localhost") throw new Error("A production deployment requires NEXT_PUBLIC_SITE_URL or a Vercel production URL.");
  return url;
}
export const siteUrl = resolveSiteUrl();
export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();
