# Testimonials / Social Proof Section

This document describes the **Social Proof** (testimonials) section on the Adrian Barkus website: implementation, content, and how to update it.

---

## Overview

The Social Proof section uses a **review-style** layout:

- **Header:** "Loved by leaders"
- **Description:** "Hear from enterprise architects, CTOs, CFOs, and product leaders who trust Adrian to deliver."
- **Rating summary:** 5.0 with five stars and "6 reviews"
- **Three carousel rows** of review cards:
  - **Top row:** scrolls left to right
  - **Middle row:** scrolls right to left
  - **Bottom row:** scrolls left to right

Each card shows: avatar (or initials), name, role/title, 5-star rating, and a short quote (25 words or less). The carousels run continuously (infinite loop) so the same 6 reviews scroll in each row.

---

## Location

- **Component:** `components/sections/SocialProof.tsx`
- **On the page:** After the **Urgency** section ("Secure Your Slot"), before **FAQ**. Used on all four routes: main home, Monochromatic Precision, Tech Electric, Nordic Consulting.

---

## Content

### Data in the component

1. **`allTestimonials`**  
   Full list of testimonials (currently 10 entries) with: `name`, `handleOrRole`, `quote`, `avatarUrl` (optional), `verified` (optional). This is the source pool for the carousel and for reuse elsewhere (e.g. proposals, LinkedIn).

2. **`sixReviews`**  
   The 6 reviews shown in the three carousels. Currently:
   - Dinny Evans (CFO, New Horizons – recent client)
   - Tony Harrison (CPTO Digital Transformer – recent client)
   - Priyanka Das (Senior Business Analyst)
   - Kristoffer Ferrer (Complex Project Management)
   - Mike Dudarenok (Chief Information and Digital Officer)
   - Walter Nguyen (Integration Solution Engineer)

Quotes are punchy, 25-word-or-less statements drawn from longer client testimonials (Salesforce, enterprise architecture, PMO, delivery leadership).

### Avatar images

- **`avatarUrl`** is optional. When omitted, the card shows the person’s **initials** (e.g. "DE", "TH") in a circle.
- To use photos: upload images to **Supabase** (e.g. `SiteImages` bucket), then set `avatarUrl` to the public URL for each testimonial in `allTestimonials` and ensure that person is included in `sixReviews` if they should appear in the carousel.
- The component uses `next/image` for avatars; external Supabase URLs work (add the Supabase host to `next.config` images `remotePatterns` if needed).

---

## Changing which 6 reviews show

Edit `sixReviews` in `SocialProof.tsx`. It’s an array of entries from `allTestimonials` (by index or by reference). Example:

```ts
const sixReviews = [
  allTestimonials[4],  // Dinny Evans
  allTestimonials[5],  // Tony Harrison
  allTestimonials[0],  // David Freke
  allTestimonials[1],  // Andrew Fragias
  allTestimonials[2],  // Tony Fitzgibbon
  allTestimonials[3]   // Jason Keith
];
```

Reorder or swap in any of the `allTestimonials` entries. Keep the array length at 6 for the current three-row carousel layout.

---

## Adding or editing testimonials

- **Add:** Append a new object to `allTestimonials` with `name`, `handleOrRole`, `quote`, and optionally `avatarUrl` and `verified`.
- **Edit quote/role:** Change the corresponding object in `allTestimonials`. If that person is in `sixReviews`, the carousel updates automatically.
- **Use elsewhere:** The full list in `allTestimonials` (and the 21-person list from the original testimonial doc) can be used for LinkedIn rotation, proposals, cold outreach, and case studies. Cold outreach can lead with Dinny Evans or Tony Harrison (recent clients, specific outcomes).

---

## Technical details

- **Carousel:** Framer Motion `animate` with `x: ['0%', '-50%']` (or `['-50%', '0%']` for opposite direction). Content is duplicated so one full loop equals 50% translation for a seamless repeat.
- **Card width:** 320px (`CARD_WIDTH`). Row loop duration: 45 seconds (`ROW_DURATION`). Both are constants at the top of the file.
- **Theme:** Uses only theme tokens (`border-border`, `bg-surface-elevated`, `text-foreground`, `text-foreground-secondary`, `text-foreground-tertiary`) so the section works in light and dark mode.
- **Stars:** Lucide React `Star` icon, filled; each card shows 5 stars. Rating summary at the top also shows 5 stars and "6 reviews".

---

## Summary

| Item | Detail |
|------|--------|
| Section name | Social Proof (testimonials) |
| Component | `components/sections/SocialProof.tsx` |
| Layout | Review style: header, description, 5.0 + 6 reviews, 3 carousel rows (L→R, R→L, L→R) |
| Reviews shown | 6 (subset of `allTestimonials`) |
| Avatars | Optional; set `avatarUrl` when Supabase images are ready |
| Full testimonial list | In component as `allTestimonials`; extend for more names/quotes as needed |
