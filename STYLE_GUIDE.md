# Style Guide
## Monochromatic Precision with Leica Brass

**Last Updated:** 2024  
**Theme:** Monochromatic Precision with Leica Brass Accent  
**Design Philosophy:** Minimalist, sophisticated, timeless. Soft dark mode (Claude.ai-inspired) with a single luxurious accent color.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Styles](#component-styles)
6. [Brass Accent Usage](#brass-accent-usage)
7. [Dark/Light Mode](#darklight-mode)
8. [Animation Guidelines](#animation-guidelines)
9. [Accessibility](#accessibility)

---

## Design Philosophy

### Core Principles

1. **Monochromatic Base**: The foundation is entirely grayscale—no blues, greens, or other colors except brass.
2. **Brass as Luxury**: Leica Brass is used SPARINGLY—only for CTAs, hero elements, and key metrics. It should feel premium and intentional.
3. **Soft Dark Default**: Comfortable dark mode (#2D2D2D) inspired by Claude.ai—never harsh pure black (#000000).
4. **Readable Contrast**: Text uses soft white (#ECECEC) not harsh white (#FFFFFF) for comfortable reading.
5. **Generous White Space**: Breathing room is essential—don't crowd elements.
6. **Bold Typography**: Large, confident headings (up to 96px on desktop).
7. **Timeless Sophistication**: Avoid trends—focus on what will age well.

### What NOT to Do

- ❌ Use blues, greens, or any colors other than brass
- ❌ Use pure black (#000000) or pure white (#FFFFFF) in dark mode
- ❌ Overuse brass—it should be rare and special
- ❌ Crowd elements—maintain generous spacing
- ❌ Use harsh contrasts—keep it comfortable

---

## Color Palette

### Dark Mode (Default)

**Background Colors:**
- `--color-background`: `#2D2D2D` - Main background (soft charcoal, Claude.ai style)
- `--color-surface`: `#373737` - Elevated surfaces (cards, modals)
- `--color-surface-elevated`: `#404040` - Highest elevation (hover states, nested cards)
- `--color-muted`: `#373737` - Muted backgrounds

**Text Colors:**
- `--color-foreground`: `#ECECEC` - Primary text (soft white, NOT #FFFFFF)
- `--color-foreground-secondary`: `#A0A0A0` - Secondary text
- `--color-foreground-tertiary`: `#6B6B6B` - Tertiary text (labels, captions)

**Accent Colors (Leica Brass):**
- `--color-primary`: `#C9A962` - Main brass (champagne gold)
- `--color-primary-hover`: `#D4B876` - Lighter brass (hover states)
- `--color-primary-dark`: `#B8995F` - Darker brass (pressed states)
- `--color-accent`: `#C9A962` - Same as primary

**Borders:**
- `--color-border`: `#404040` - Subtle dark borders

**CSS Variables:**
```css
--color-background: #2D2D2D;
--color-surface: #373737;
--color-surface-elevated: #404040;
--color-foreground: #ECECEC;
--color-foreground-secondary: #A0A0A0;
--color-foreground-tertiary: #6B6B6B;
--color-primary: #C9A962;
--color-primary-hover: #D4B876;
--color-border: #404040;
```

### Light Mode

**Background Colors:**
- `--color-background`: `#FAFAFA` - Main background (off-white)
- `--color-surface`: `#FFFFFF` - Elevated surfaces (cards, modals)
- `--color-surface-elevated`: `#F5F5F5` - Highest elevation
- `--color-muted`: `#F5F5F5` - Muted backgrounds

**Text Colors:**
- `--color-foreground`: `#000000` - Primary text (black)
- `--color-foreground-secondary`: `#525252` - Secondary text
- `--color-foreground-tertiary`: `#6B6B6B` - Tertiary text

**Accent Colors (Leica Brass):**
- `--color-primary`: `#B8995F` - Main brass (warm antique brass)
- `--color-primary-hover`: `#A37F4A` - Darker brass (hover states)
- `--color-primary-dark`: `#A37F4A` - Darker brass (pressed states)

**Borders:**
- `--color-border`: `#E5E5E5` - Light grey borders

---

## Typography

### Font Families

**Body Text:**
- Font: `Inter` (Google Fonts)
- Variable: `--font-inter`
- Usage: All body text, headings, UI elements

**Code/Monospace:**
- Font: `JetBrains Mono` (Google Fonts)
- Variable: `--font-mono`
- Usage: Code snippets, technical details, inline code

### Type Scale

**Headings:**
- H1 (Hero): `text-3xl sm:text-4xl lg:text-5xl lg:text-6xl` (48px → 96px)
- H2 (Section): `text-2xl sm:text-3xl lg:text-4xl` (24px → 36px)
- H3 (Subsection): `text-xl sm:text-2xl` (20px → 24px)

**Body Text:**
- Base: `18px` (1.125rem)
- Line Height: `1.6` (comfortable reading)
- Large: `text-lg` (20px) for emphasis
- Small: `text-sm` (14px) for captions

**Labels:**
- Section Labels: `text-sm font-semibold uppercase tracking-[0.2em]`
- Card Labels: `text-xs font-medium uppercase tracking-[0.16em]`

### Typography Classes

```tsx
// Primary heading
className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl"

// Section label
className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary"

// Body text
className="text-base text-foreground-secondary sm:text-lg" style={{ lineHeight: '1.6' }}

// Small label
className="text-xs font-medium uppercase tracking-[0.16em] text-foreground-tertiary"
```

---

## Spacing & Layout

### Container

- Max width: Responsive container with padding
- Padding: `1rem` mobile → `1.5rem` tablet → `2rem` desktop
- Centered: `mx-auto`

### Section Spacing

- Between sections: `space-y-24 sm:space-y-28 lg:space-y-32` (96px → 128px)
- Section padding: `px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20`
- Internal spacing: `gap-4` (16px) for cards, `gap-6` (24px) for larger elements

### Card Spacing

- Card padding: `p-4` (16px) small, `p-5` (20px) medium
- Card gap: `gap-4` (16px) between cards
- Border radius: `rounded-xl` (12px) or `rounded-2xl` (16px)

---

## Component Styles

### Buttons

**Primary CTA (Brass):**
```tsx
className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-[1px] hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
```

**Secondary Button:**
```tsx
className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2 text-xs font-medium text-foreground backdrop-blur transition hover:border-primary/30 hover:bg-surface-elevated"
```

### Cards

**Standard Card:**
```tsx
className="rounded-xl border border-border bg-surface-elevated p-4"
```

**Section Container:**
```tsx
className="rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-12"
```

### Badges/Labels

**Hero Badge:**
```tsx
className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary"
```

**Section Label:**
```tsx
className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary"
```

---

## Brass Accent Usage

### When to Use Brass

✅ **DO Use Brass For:**
- Primary CTA buttons ("Request a strategy call", "Get in touch")
- Hero section accent text (key phrase in headline)
- Hero badge (top label)
- Key metrics/numbers (e.g., "15+ years" in Credibility section)
- Hover states on important interactive elements
- Focus rings on primary actions

❌ **DON'T Use Brass For:**
- Secondary buttons
- Body text
- Borders (unless it's a brass button border)
- Backgrounds
- Decorative elements
- Multiple elements in the same view (keep it rare)

### Brass Usage Examples

**Hero Accent:**
```tsx
<span className="text-primary">exactly when you need it.</span>
```

**Key Metric:**
```tsx
<p className="text-2xl font-semibold text-primary">15+ years</p>
```

**CTA Button:**
```tsx
<button className="bg-primary text-primary-foreground hover:bg-primary-hover">
  Request a strategy call
</button>
```

---

## Dark/Light Mode

### Default Mode

- **Default:** Dark mode (`defaultTheme="dark"`)
- Dark mode provides the premium, comfortable experience
- Light mode is available via theme switcher

### Theme Switcher

- Location: Top-right corner (floating button)
- Options: Light, Dark, System
- Uses `next-themes` for persistence

### Implementation

Theme is controlled via CSS variables that change based on `:root.light` class:

```css
:root {
  /* Dark mode colors */
}

:root.light {
  /* Light mode colors */
}
```

---

## Animation Guidelines

### Scroll Animations

**Fade Up (Standard):**
```tsx
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.35 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
```

**Hero Animation:**
```tsx
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.55 }}
transition={{ duration: 0.65, ease: 'easeOut' }}
```

### Hover States

**Button Hover:**
- Slight lift: `hover:-translate-y-[1px]`
- Color change: `hover:bg-primary-hover`
- Smooth transition: `transition`

**Interactive Elements:**
- Use `transition-colors` for color changes
- Use `transition` for transforms
- Keep animations subtle and professional

### Animation Principles

- **Subtle**: Animations should enhance, not distract
- **Smooth**: Use `ease-out` for natural motion
- **Fast**: Keep durations under 0.7s
- **Purposeful**: Only animate when it adds value

---

## Accessibility

### Color Contrast

- **Text on Background**: Minimum 4.5:1 (WCAG AA)
- **Large Text**: Minimum 3:1 (WCAG AA)
- **Interactive Elements**: Minimum 3:1 (WCAG AA)

### Focus States

All interactive elements must have visible focus indicators:

```tsx
focus-visible:outline-none 
focus-visible:ring-2 
focus-visible:ring-primary 
focus-visible:ring-offset-2 
focus-visible:ring-offset-background
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<section>`, `<article>`, `<nav>`)
- Include ARIA labels where needed
- Ensure keyboard navigation works

### Text Readability

- Minimum font size: 14px (mobile), 16px (desktop)
- Line height: 1.6 for body text
- Maximum line length: ~75 characters
- Adequate spacing between lines and paragraphs

---

## File Structure Reference

### Theme Files

- `app/globals.css` - Main theme CSS variables and styles
- `app/layout.tsx` - Root layout with fonts and theme provider
- `components/ThemeProvider.tsx` - Theme context provider
- `components/ThemeSwitcher.tsx` - Dark/light mode toggle

### Component Locations

- `components/sections/` - All landing page sections
- `components/ui/` - shadcn/ui components
- `components/Footer.tsx` - Site footer
- `components/ContactForm.tsx` - Contact form component

---

## Quick Reference

### Common Color Classes

```tsx
// Backgrounds
bg-background          // Main background (#2D2D2D dark, #FAFAFA light)
bg-surface            // Card background (#373737 dark, #FFFFFF light)
bg-surface-elevated   // Elevated card (#404040 dark, #F5F5F5 light)

// Text
text-foreground              // Primary text (#ECECEC dark, #000000 light)
text-foreground-secondary    // Secondary text (#A0A0A0 dark, #525252 light)
text-foreground-tertiary     // Tertiary text (#6B6B6B both modes)

// Accent (Brass - use sparingly!)
text-primary          // Brass text (#C9A962 dark, #B8995F light)
bg-primary            // Brass background
border-primary        // Brass border

// Borders
border-border         // Standard border (#404040 dark, #E5E5E5 light)
```

### Common Spacing

```tsx
// Section spacing
space-y-24 sm:space-y-28 lg:space-y-32  // Between sections

// Padding
px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20  // Section padding
p-4  // Small card padding
p-5  // Medium card padding

// Gaps
gap-4  // Standard gap (16px)
gap-6  // Large gap (24px)
```

### Typography Scale

```tsx
// Headings
text-2xl sm:text-3xl lg:text-4xl  // Section heading
text-3xl sm:text-4xl lg:text-5xl lg:text-6xl  // Hero heading

// Body
text-base sm:text-lg  // Body text with line-height: 1.6
text-sm  // Small text
text-xs  // Extra small (labels)

// Labels
text-sm font-semibold uppercase tracking-[0.2em]  // Section label
text-xs font-medium uppercase tracking-[0.16em]   // Card label
```

---

## Design Checklist

Before adding new components or sections:

- [ ] Uses monochromatic colors (no blues, greens, etc.)
- [ ] Brass used sparingly (only for CTAs, hero, key metrics)
- [ ] Text uses soft white (#ECECEC) not harsh white (#FFFFFF) in dark mode
- [ ] Generous spacing between elements
- [ ] Typography follows scale (18px base, 1.6 line-height)
- [ ] Focus states visible for accessibility
- [ ] Animations are subtle and purposeful
- [ ] Works in both dark and light modes
- [ ] Responsive (mobile-first approach)
- [ ] Follows semantic HTML structure

---

## String Formatting & HTML Entities

### Apostrophes and Quotes

**❌ NEVER Use HTML Entities in JavaScript Strings:**
```tsx
// BAD - Don't use HTML entities
const text = "You can't do this";
const copy = 'He said "hello"';
```

**✅ DO Use Regular Characters with Proper Escaping:**
```tsx
// GOOD - Use double quotes for strings with apostrophes
const text = "You can't do this";
const copy = "He said \"hello\"";

// GOOD - Use single quotes for strings with double quotes
const text = 'He said "hello"';
const copy = 'You can\'t do this';

// GOOD - Use template literals for complex strings
const text = `You can't do this and he said "hello"`;
```

### Common Patterns

**Apostrophes in Text:**
```tsx
// ✅ Correct
const headline = "I can't identify savings";
const copy = "You're wasting money";
const text = "That's £420k saved";

// ❌ Incorrect
const headline = "I can&apos;t identify savings";
const copy = "You&apos;re wasting money";
```

**Quotes in Text:**
```tsx
// ✅ Correct
const text = 'He said "hello"';
const copy = "The \"right time\" never comes";

// ❌ Incorrect
const text = 'He said &quot;hello&quot;';
```

**Mixed Apostrophes and Quotes:**
```tsx
// ✅ Correct - Use template literals
const text = `You can't say "I'll do it later"`;

// ✅ Correct - Escape properly
const text = "You can't say \"I'll do it later\"";
```

### Why This Matters

- HTML entities (`&apos;`, `&quot;`) are for HTML/JSX content, not JavaScript strings
- They display literally in strings instead of rendering as characters
- Regular characters with proper escaping are cleaner and more maintainable
- TypeScript/JavaScript handles escaping automatically

### Quick Reference

| Situation | Solution |
|-----------|----------|
| Apostrophe in string | Use double quotes: `"can't"` |
| Double quote in string | Use single quotes: `'said "hello"'` or escape: `"said \"hello\""` |
| Both in string | Use template literal: `` `can't say "hello"` `` |
| JSX content | Use regular characters: `<p>You can't do this</p>` |

---

## Notes

- This style guide reflects the current implementation as of the latest commit
- All color values are defined in `app/globals.css` as CSS variables
- Theme switching is handled by `next-themes` via `ThemeProvider`
- Components should use theme variables, not hardcoded colors
- **Never use HTML entities (`&apos;`, `&quot;`) in JavaScript strings** - use regular characters with proper escaping
- When in doubt, refer to existing section components as examples

---

**Maintained by:** Development Team  
**Last Review:** 2024
