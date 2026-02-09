## Fractional CTO – Adrian Barkus Website

This is a Next.js 16 (App Router) site for a Fractional CTO consulting practice, built with:

- Next.js + TypeScript (strict)
- Tailwind CSS + custom dark theme
- shadcn/ui + Radix primitives
- Framer Motion

### Local development

```bash
cd /home/spacefoxdog/Documents/PROJECTS/ACTIVE_PROJECTS/AdrianBarkus-Website
npm install
npm run dev
```

App runs by default at `http://localhost:3000`.

### Environment variables

Create a `.env.local` file for local development:

```bash
cp .env.local.example .env.local
```

Fill in any `NEXT_PUBLIC_*` and `SUPABASE_*` values as needed.

### Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – run ESLint

