# Changelog

All notable changes to this project will be documented in this file.

## [1.1.7] - 2026-02-16

### Changed

- **Hero:** Audit CTA now uses BOOK_AUDIT_URL (Cal.com) and label "Book Audit Session".
- **Footer:** Nav link label "Book Audit" → "Book Audit Session" for consistency.

## [1.1.6] - 2026-02-16

### Changed

- **Mobile:** Full mobile view alignment pass. Horizontal overflow prevented (body + main); Credibility section headline and trust badges no longer truncate; responsive padding (px-4 sm:px-6 md:px-12) and min-w-0 containment across sections; section headlines scale down and use break-words on small viewports; FAQ question text wraps correctly in accordions.

## [1.1.5] - 2026-02-16

### Changed

- **Paid audit CTAs:** All audit booking links now use the paid Cal.com flow (systems-audit-session). Configurable via `NEXT_PUBLIC_BOOK_AUDIT_URL`.
- **Copy:** "Book Free Audit" → "Book Audit Session"; form title "Book Your Audit Session"; Final CTA adds "Book a {currency}1,000 audit call." (Hero, Final CTA, Offers, Footer aligned).

## [1.1.4] - 2026-02-16

### Changed

- **Credibility (19 Years. Fortune 500. AI-Accelerated.):** Logo images now preload on page load when theme is resolved so they are cached by the time users scroll to the section.

## [1.1.3] - 2026-02-16

### Changed

- **Social Proof:** Avatar images added for all remaining testimonial contributors (Caroline Birch, Sally Turpin, Paul Reid, Lance Orsmond, Chris Franklin, Yanis Guzel, Alan Blair, Yassine El Jouaidi, Jurie Fourie, Dylan Byrne, Will Focus, Nicole Watson).

## [1.1.2] - 2026-02-16

### Changed

- **Social Proof:** All carousel rows now scroll at the same card speed (rows 4 and 5 duration scaled to match rows 1–3).
- **Social Proof:** Testimonials in rows 4 and 5 are interleaved by person so the same person never appears twice on screen.

## [1.1.1] - 2026-02-16

### Changed

- Offers: delivery timeframe updated from "4-6 weeks" to "4 weeks".

## [1.1.0] - 2026-02-16

### Added

- **Testimonials (Social Proof):** Two new rows (rows 4 and 5) with 58 additional testimonials (76 total).
  - Enterprise Architecture & Technical Expertise: Misha Petrov, Abe Diamond, Jeroen Brejaart, Damon Hayhow, Ian Carpenter, Steve Harris.
  - Salesforce Expertise: Janina Harper, Kapil Shah, Maelle Polak, John Stapleton, Damien Ryan, Brandon Bruce, Brett Greathouse, Matthew Sutton.
  - Client Delivery & Leadership: Charmaine van der Merwe, Caroline Birch, Sally Turpin, Paul Reid, Lance Orsmond, Chris Franklin, Yanis Guzel, Alan Blair.
  - SaaS & Consulting: Yassine El Jouaidi, Jurie Fourie, Dylan Byrne.
  - Project Management & Delivery: Will Focus, Nicole Watson.
- Avatar images for 15 of the new testimonial contributors (Supabase TestimonialImages bucket).
- Mobile: two extra scroll rows for the new testimonial sets (dynamic width for 29 cards per row).
- Desktop: two extra carousel rows (alternating direction) for the new testimonial sets.

### Changed

- Social Proof section label updated from "59 reviews" to "76 reviews".

## [1.0.0] - Initial release
