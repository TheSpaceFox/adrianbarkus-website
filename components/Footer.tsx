export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-border pt-10 pb-8 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground-secondary">
            © {year} Adrian Barkus. Software replacement & fractional CTO services.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <span className="rounded-full bg-surface-elevated border border-border px-3 py-1 text-foreground-tertiary">
              Availability: Limited
            </span>
            <span className="text-foreground-tertiary">
              Built with Next.js, TypeScript, Tailwind, and shadcn/ui.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
