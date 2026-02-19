'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedNumber from '@/components/AnimatedNumber';
import { useCurrency } from '@/hooks/useCurrency';
import { BOOK_AUDIT_URL } from '@/lib/constants';
import { HERO_REVIEW_AVATARS, REVIEW_RATING, REVIEW_COUNT } from '@/components/sections/SocialProof';

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? (currentTheme === 'dark') : true; // Default to dark during SSR

  const metrics = [
    { value: 155, prefix: currency, suffix: 'M', label: 'Delivered Projects' },
    { value: 74, suffix: '%', label: 'Costs Cut' },
    { value: 92, suffix: '%', label: 'Faster AI Dev.' },
    { value: 84, prefix: currency, suffix: 'B', label: 'Transaction Per Year' }
  ];

  return (
    <section
      className={`relative min-h-screen-dynamic snap-start flex flex-col items-center justify-start md:justify-center bg-background overflow-hidden ${className ?? ''}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Homepage-Hero-1.jpeg')`
        }}
      >
        {/* Theme-aware overlay for readability */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: isDark 
              ? 'rgba(45, 45, 45, 0.5)' // Dark overlay: #2D2D2D at 50% opacity
              : 'rgba(250, 250, 250, 0.5)' // Light overlay: #FAFAFA at 50% opacity
          }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none z-[1]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto min-w-0 px-4 sm:px-6 md:px-12 pt-24 md:pt-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center min-w-0"
        >
          {/* Headline — smaller breakpoints to avoid 4-line wrap */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight break-words max-w-4xl mx-auto"
          >
            Your Software Stack Just Became a Liability.
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl font-normal text-white mt-6 mb-0 leading-relaxed"
          >
            Wall Street is repricing software. Your board will ask the question soon. I help you cut your exposure, own your systems, and move faster than the market.
          </motion.h2>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => window.open(BOOK_AUDIT_URL, '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 px-8 py-4 text-base font-medium rounded-full transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background my-8"
            >
              Book Your Free Software Review
            </Button>
          </motion.div>

          {/* Social proof: avatars + star rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            <div className="inline-flex items-center -space-x-4">
              {HERO_REVIEW_AVATARS.map((review, index) => (
                <Image
                  key={index}
                  src={review.avatarUrl!}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full border-2 border-background object-cover"
                  unoptimized
                />
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1.5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="text-sm font-semibold text-foreground">{REVIEW_RATING}</span>
              </div>
              <p className="text-xs font-medium text-white">
                from {REVIEW_COUNT} reviews
              </p>
            </div>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="mt-24 pt-12 border-t border-[#404040]"
          >
            <div className="grid grid-cols-2 gap-12 md:gap-16 sm:grid-cols-4">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                    <AnimatedNumber
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      duration={2000}
                    />
                  </p>
                  <p className="text-sm text-[#A0A0A0] sm:text-base uppercase tracking-wide">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
