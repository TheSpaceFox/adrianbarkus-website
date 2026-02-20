'use client';

import { DownloadIcon } from '@/components/ui/download';
import { LinkedinIcon } from '@/components/ui/linkedin';
import Link from 'next/link';
import { GitHubHeatmap } from '@/components/GitHubHeatmap';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();
  const cvUrl =
    'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus-CV-July-2025-FRACTIONAL-CTO-AI-POWERED-BUILDER.pdf';

  return (
    <footer
      className={`border-t border-border pt-10 pb-10 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10">
          {/* GitHub contribution heatmap (full profile) */}
          <GitHubHeatmap className="w-full" />

          {/* Top row: brand + nav columns */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Brand / summary */}
            <div className="max-w-md space-y-3">
              <p className="text-sm text-foreground-secondary">
                © {year} Adrian Barkus. I offer software replacement and fractional CTO services.
              </p>
              <p className="text-sm text-foreground-tertiary">
                I help software-heavy businesses with fractional CTO work, AI-accelerated systems,
                and cost reduction.
              </p>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                  Navigation
                </p>
                <div className="flex flex-col gap-1.5 text-foreground-secondary">
                  <Link href="#problems" className="hover:text-primary transition-colors">
                    The Cost
                  </Link>
                  <Link href="#transformation" className="hover:text-primary transition-colors">
                    Transformation
                  </Link>
                  <Link href="#offers" className="hover:text-primary transition-colors">
                    Offers
                  </Link>
                  <Link href="#cta" className="hover:text-primary transition-colors">
                    Book Your Free Software Review
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                  Services
                </p>
                <div className="flex flex-col gap-1.5 text-foreground-secondary">
                  <span className="text-foreground-tertiary">Software audit</span>
                  <span className="text-foreground-tertiary">Custom system build</span>
                  <span className="text-foreground-tertiary">Fractional CTO</span>
                  <span className="text-foreground-tertiary">AI-accelerated delivery</span>
                </div>
              </div>

              <div className="space-y-2 hidden md:block">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                  Resources
                </p>
                <div className="flex flex-col gap-1.5 text-foreground-secondary">
                  <span className="text-foreground-tertiary">Style guide</span>
                  <span className="text-foreground-tertiary">Case notes</span>
                  <span className="text-foreground-tertiary">Experiment log</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: status + tech + actions */}
          <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="rounded-full bg-surface-elevated border border-border px-3 py-1 text-foreground-tertiary">
                Availability: Limited
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <Link
                href={cvUrl}
                download="AdrianBarkus-CV-July-2025-FRACTIONAL-CTO-AI-POWERED-BUILDER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
              >
                <DownloadIcon className="h-4 w-4" size={16} aria-hidden />
                <span>Download CV (PDF)</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/adrianbarkus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" size={16} aria-hidden />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
