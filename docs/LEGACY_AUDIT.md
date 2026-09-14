# Legacy audit

## Method

The repository was inventoried by file path and size. HTML, CSS, JavaScript, text placeholders, and extractable PDF text were reviewed; raster images and videos were checked as media assets. The old implementation was an HTTrack mirror of the BreezyCV/LMPixels template rather than an application source tree.

## Retained and migrated

- `img/profile_image.jpeg` was the only personal image retained. It was visually reviewed, moved to `public/profile.jpeg`, and is served through `next/image` with explicit responsive dimensions and negotiated optimized output.
- Defensible facts were migrated only where they agree with the supplied canonical public record. Content now lives in `content/site.ts`.

## Removed from the deployed bundle

- Three legacy HTML pages, including copied template metadata and the unaudited career article.
- BreezyCV CSS, Bootstrap grid, animations, carousel, popup, scrollbar, reset, icon-font, and Font Awesome assets.
- jQuery 2.1.3, Modernizr, and all obsolete jQuery/template plugins.
- The LMPixels demo contact endpoint, copied reCAPTCHA/configuration references, Cloudflare/HTTrack artifacts, template navigation, rotating titles, skill meters, testimonial placeholders, and dead references.
- The obsolete `Soumyabrata Ghosh Business Analyst.pdf` containing stale private/profile information and the retired Bharti AXA GenAI claim.
- Legacy logos, generic/project images, GIFs, and placeholder text files because they did not add verified evidence to the rebuilt case studies.
- The 13.6 MB Hanover and 8.5 MB Company Expansion MP4 files. Neither materially supported a current featured case; no video is shipped.

## Factual corrections

- Bharti AXA is described as data-driven workflow redesign using Excel automation, tracking, call scheduling, and escalation rules. AI/GenAI is not attributed to the 31% productivity result.
- The ISMRITI result is approximately 0.68 held-out MAE on a five-star MovieLens scale—not “86.7% accuracy.”
- Quarantined figures, private customer data, unverifiable project maturity, and unverified external links are omitted.

The original Git history remains the archival record; legacy assets are not duplicated in the production tree.

## V2 evidence migration

The archive now includes Twitter sentiment, national commercial-bank analysis, actor age classification, and Boston transportation work using only bounded claims supplied in the master record. The Boston R² remains quarantined. Competition recognition is separated from research evidence, and Westcliff appears only as the competition organizer—not as an educational affiliation.

Canonical URL handling no longer has an `example.com` fallback. IIT Kanpur is represented as a dated research internship rather than an educational `alumniOf` relationship.
