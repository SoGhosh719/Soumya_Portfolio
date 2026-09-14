# Soumyabrata Ghosh — research + engineering portfolio

A statically rendered Next.js App Router portfolio organized around a typed content model, three audience lenses, and explicit distinctions between implemented, measured, designed, deployed, and planned work.

## Architecture

- **Next.js 16 / React 19 / strict TypeScript.** Routes remain Server Components unless interaction requires client code.
- **Central content:** `content/site.ts` owns profile, education, experience, recognition, lenses, project states, future media slots, and case-study records.
- **Evidence-aware routing:** every public project gets a case route, metadata, deterministic navigation, and a sitemap entry.
- **Code-native visuals:** architecture diagrams communicate boundaries without implying that unaudited screenshots exist.
- **Privacy:** no analytics, trackers, social profiles, repositories, or unaudited external links are enabled.

## Local development

Use Node 22 LTS (minimum Node 20.9):

```bash
npm ci
npx playwright install chromium
npm run dev
```

Local metadata resolves against `http://localhost:3000`.

## Canonical origin safety

`lib/site-url.ts` is the sole origin resolver used by metadata, Open Graph, sitemap, and robots. Set `NEXT_PUBLIC_SITE_URL` to a real absolute origin with no path for non-Vercel production. Vercel uses `VERCEL_PROJECT_PRODUCTION_URL`, then its production `VERCEL_URL`. `example.com`, malformed URLs, and localhost in a Vercel production deployment fail loudly. The local fallback is never treated as a production Vercel origin.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:browser
npm run check # all of the above
npm audit
```

Playwright exercises primary/audience/project navigation, mobile menu behavior, theme switching, console errors, keyboard navigation, and axe audits. CI installs Chromium and runs the same full sequence on pushes and pull requests to `main`.

## Content policy

Keep `maturity`, `states`, evidence, limitations, and next steps defensible. Add audited screenshots through a project's `media` field; do not substitute decorative legacy art. See `docs/PUBLIC_CLAIMS_AUDIT.md`, `docs/CONTENT_GAPS.md`, and `docs/LEGACY_AUDIT.md` before publishing new claims.
