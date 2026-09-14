# Soumyabrata Ghosh — portfolio

A statically rendered Next.js App Router portfolio built around one typed content layer and three audience lenses: research, engineering, and analytics.

## Architecture

- **Next.js 16 / React 19 / strict TypeScript.** Routes are Server Components by default; only theme selection and archive filtering ship client JavaScript.
- **Central content:** edit profile, education, experience, lenses, and `Project` records in `content/site.ts`.
- **Project routing:** each public project automatically receives `/projects/[slug]`, metadata, and a sitemap entry.
- **Design system:** `app/globals.css` contains light/dark tokens and reusable layout/component classes. Geist variable fonts are optimized with `next/font`.
- **Privacy:** no analytics, trackers, contact form, social profile, or unaudited project URL is enabled.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Use Node.js 20.9 or newer.

## Content editing

1. Update `content/site.ts`; do not hard-code profile facts in route components.
2. Mark a project `public: false` until every published field is defensible.
3. Keep `maturity`, `evidence`, `limitations`, and `nextSteps` explicit.
4. Add audited media under `public/`, with useful alt text and dimensions in its project record.
5. Record unresolved claims/assets in `docs/CONTENT_GAPS.md` rather than filling gaps.

Future audited essays can be added as MDX under a `content/writing/` directory and exposed through a dedicated route only when meaningful content exists. The current build deliberately ships no writing index.

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-origin.example
```

This value drives canonical metadata, Open Graph URLs, `robots.txt`, and `sitemap.xml`. No secrets are required.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
# or all checks
npm run check
```

Manual QA should include keyboard-only navigation, theme cycling, reduced-motion emulation, and responsive widths. Test `/`, all three audience lenses, `/projects`, and featured case routes.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` in the deployment environment, then deploy to any Next.js-capable Node host. For Vercel:

```bash
npx vercel
npx vercel --prod
```

The production server can also be run directly:

```bash
npm run build
npm start
```

See `docs/LEGACY_AUDIT.md` for removals and `docs/CONTENT_GAPS.md` for intentionally withheld material.
