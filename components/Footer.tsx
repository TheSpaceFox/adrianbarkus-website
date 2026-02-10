import { Download, Linkedin } from 'lucide-react';
import Link from 'next/link';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();
  const cvUrl = 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus-CV-July-2025-FRACTIONAL-CTO-AI-POWERED-BUILDER.pdf';

  return (
    <footer
      className={`border-t border-border pt-10 pb-8 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6">
          {/* Main content row */}
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
          
          {/* Links Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-4 border-t border-border">
            <Link
              href={cvUrl}
              download="AdrianBarkus-CV-July-2025-FRACTIONAL-CTO-AI-POWERED-BUILDER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download CV (PDF)</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/adrianbarkus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
