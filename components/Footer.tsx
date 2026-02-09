export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-border/60 pt-10 text-sm text-slate-400 ${className ?? ''}`}
    >
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs sm:text-sm">
          © {year} Adrian Barkus. Fractional CTO & strategic technology partner.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          <span className="rounded-full bg-slate-900/60 px-3 py-1 text-slate-300">
            Availability: Limited
          </span>
          <span className="text-slate-500">
            Built with Next.js, TypeScript, Tailwind, and shadcn/ui.
          </span>
        </div>
      </div>
    </footer>
  );
}

