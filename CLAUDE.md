# CLAUDE.md – Adrian Barkus Website

## Project Overview

Next.js 16 (App Router) site for a Fractional CTO consulting practice.

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode — `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`)
- **Styling**: Tailwind CSS v4 with custom CSS variables (no hardcoded colors)
- **UI Components**: shadcn/ui + Radix primitives (`components/ui/`)
- **Animations**: Framer Motion
- **Backend**: Supabase (client in `lib/supabase.ts`)
- **Package manager**: npm

## Dev Commands

```bash
npm run dev           # Start dev server at http://localhost:3000
npm run build         # Production build
npm run start         # Run production server
npm run lint          # ESLint (next/core-web-vitals)
npm run build:knowledge  # Rebuild case study knowledge blob (scripts/build-case-study-knowledge.ts)
```

## Project Structure

```
app/                  # Next.js App Router pages and layouts
  api/                # API routes
  ask/                # AI "Ask" feature page
  case-studies/       # Case study pages
  globals.css         # Theme CSS variables (dark/light mode)
  layout.tsx          # Root layout (fonts, ThemeProvider)
components/
  ui/                 # shadcn/ui components (do not modify structure)
  sections/           # Landing page sections
  ask/                # Ask feature components
  case-studies/       # Case study components
lib/
  utils.ts            # Utility functions
  constants.ts        # Site-wide constants
  supabase.ts         # Supabase client
  case-studies/       # Case study data and knowledge
hooks/                # Custom React hooks
contexts/             # React context providers
scripts/              # Build scripts (tsx-executed)
docs/                 # Internal documentation
```

## Code Conventions

### TypeScript
- Strict mode enforced — no `any`, no unused vars/params
- Path alias: `@/*` maps to project root
- No `.js` files — TypeScript only

### Prettier (`.prettierrc`)
- `singleQuote: true`
- `semi: true`
- `trailingComma: "none"`
- `tabWidth: 2`
- `printWidth: 90`

### String Formatting
- Never use HTML entities (`&apos;`, `&quot;`) in JS/TS strings
- Use double quotes for strings with apostrophes: `"can't"`
- Use template literals for mixed: `` `can't say "hello"` ``

### Components
- Prefer editing existing files over creating new ones
- Section components live in `components/sections/`
- Reuse shadcn/ui primitives from `components/ui/` before building custom UI
- Framer Motion for animations: subtle, `ease-out`, under 0.7s duration

## Design System

See `STYLE_GUIDE.md` for full details. Key rules:

- **Dark mode default** (`#2D2D2D` background) — never pure black
- **Monochromatic base** — only grayscale + Leica Brass accent (`#C9A962`)
- **Brass sparingly** — only for CTAs, hero elements, key metrics
- **Theme via CSS variables** — use `bg-background`, `text-foreground`, `text-primary`, etc. — never hardcode hex colors
- **Generous spacing** — `py-32` sections, `gap-12/16` between cards
- **Typography**: Inter (body), JetBrains Mono (code); headings `font-bold tracking-tight`, 2 lines max with `line-clamp-2`

## Environment Variables

Local dev uses `.env.local` (gitignored):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Any other `NEXT_PUBLIC_*` or `SUPABASE_*` vars

## Documentation

- `STYLE_GUIDE.md` — Brand, colors, typography, spacing, component patterns
- `TESTIMONIALS.md` — Social proof section content and layout rules
- `README.md` — Setup instructions
