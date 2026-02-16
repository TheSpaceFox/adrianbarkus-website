'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Badge } from '@/components/ui/badge';
import { ScrollingLogos } from '@/components/ScrollingLogos';

export interface CredibilityProps {
  className?: string;
}

const backgroundLogos = [
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AU%20GOV%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AU-GOV%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Australian Government'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Breville%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Breville%20Light%20Theme%20-%20FFFFFF%20(1).png',
    alt: 'Breville'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Fairfax%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Fairfax%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Fairfax'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/RXP%20Dark%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/RXP%20Light%20-%20FFFFFF.png',
    alt: 'RXP'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/SUEZ%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/SUEZ%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'SUEZ'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/WW%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/WW%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Woolworths'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/LaunchTN%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/LaunchTN%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'LaunchTN'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/SiteMinder%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/SiteMinder%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'SiteMinder'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/ThomsonR%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/ThomsonR%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Thomson Reuters'
  }
];

const modernStackLogos = [
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Supabase%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Supabase%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Supabase'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Vercel%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Vercel%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Vercel'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Typescript%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Typescript%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'TypeScript'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/NEXT%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/NEXT%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Next.js'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Cursor%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Cursor%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Cursor'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Claude%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Claude%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Claude'
  },
  {
    dark: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Azure%20Dark%20theme%20-%20373737.png',
    light: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Azure%20Light%20Theme%20-%20FFFFFF.png',
    alt: 'Azure'
  }
];

const trustBadges = [
  '19 Years',
  'Top Secret',
  'AI-Accelerated',
  'Fortune 500'
];

export function Credibility({ className }: CredibilityProps) {
  const ref = useRef(null);
  const preloadRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isPreloadZone = useInView(preloadRef, { once: true, margin: '800px 0px' });
  const { resolvedTheme } = useTheme();
  const preloadedRef = useRef(false);

  // Preload logo images when section is ~800px away so they're cached by scroll time
  useEffect(() => {
    if (!isPreloadZone || preloadedRef.current) return;
    const isDark = resolvedTheme === 'dark' || (resolvedTheme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const urls = [
      ...backgroundLogos.map((l) => (isDark ? l.dark : l.light)),
      ...modernStackLogos.map((l) => (isDark ? l.dark : l.light))
    ];
    urls.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    });
    preloadedRef.current = true;
  }, [isPreloadZone, resolvedTheme]);

  return (
    <section
      id="credibility"
      ref={preloadRef}
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight">
            19 Years. Fortune 500. AI-Accelerated.
          </h2>

          {/* Background + Modern Stack logos, both visible */}
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-tertiary">
                Background
              </p>
              <ScrollingLogos logos={backgroundLogos} speed={20} direction="left" />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-tertiary">
                Modern Stack
              </p>
              <ScrollingLogos logos={modernStackLogos} speed={25} direction="right" />
            </div>
          </div>

          {/* Trust Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            {trustBadges.map((badge, index) => (
              <Badge
                key={index}
                className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm font-medium"
              >
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
