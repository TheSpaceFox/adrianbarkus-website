'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export interface HeroProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const metrics = [
  { value: '£420k', label: 'Saved' },
  { value: '£2.5M', label: 'Generated' },
  { value: '70%', label: 'Cost Cut' },
  { value: '£55M', label: 'Exit Enabled' }
];

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center bg-background overflow-hidden ${className ?? ''}`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-[72px] leading-tight tracking-tight"
          >
            Your SaaS Bill Just Hit £80k/Year.
            <br />
            <span className="text-foreground-secondary">You Use 20% of It.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            variants={itemVariants}
            className="text-xl text-foreground-secondary sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ lineHeight: '1.6' }}
          >
            I replace Salesforce, HubSpot & Dynamics with custom systems built in 4 weeks — not 6 months. What agencies charge £60k for, I deliver solo for £18k. Using AI.
          </motion.h2>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 px-8 py-6 text-base font-medium rounded-full transition-all hover:-translate-y-[2px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book 30-Min SaaS Audit (Free)
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-foreground-secondary hover:text-foreground underline underline-offset-4 decoration-foreground-tertiary hover:decoration-foreground px-6 py-6 text-base font-medium transition-colors"
            >
              See My Recent £420k Save →
            </Button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            variants={itemVariants}
            className="pt-12 mt-12 border-t border-border"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                    {metric.value}
                  </p>
                  <p className="text-sm text-foreground-secondary sm:text-base uppercase tracking-wide">
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
