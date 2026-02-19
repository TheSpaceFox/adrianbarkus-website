'use client';

import { Download, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { GithubCommitsChart } from '@/components/GithubCommitsChart';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? currentTheme === 'dark' : true; // default to dark during SSR

  const year = new Date().getFullYear();
  const cvUrl =
    'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus-CV-July-2025-FRACTIONAL-CTO-AI-POWERED-BUILDER.pdf';

  const supabaseLogo = isDark
    ? 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Supabase%20Dark%20theme%20-%20373737.png'
    : 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Supabase%20Light%20Theme%20-%20FFFFFF.png';

  const vercelLogo = isDark
    ? 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Vercel%20Dark%20theme%20-%20373737.png'
    : 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Vercel%20Light%20Theme%20-%20FFFFFF.png';

  return (
    <footer
      className={`border-t border-border pt-10 pb-10 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10">
          {/* GitHub commits chart */}
          <GithubCommitsChart className="max-w-4xl mx-auto" />

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
              <div className="flex items-center gap-2">
                <Image
                  src={supabaseLogo}
                  alt="Supabase"
                  width={72}
                  height={24}
                  className="opacity-80"
                  unoptimized
                />
                <Image
                  src={vercelLogo}
                  alt="Vercel"
                  width={72}
                  height={24}
                  className="opacity-80"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <Link
                href={cvUrl}
                download="AdrianBarkus-CV-July-2025-FRACTIONAL-CTO-AI-POWERED-BUILDER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download CV (PDF)</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/adrianbarkus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
