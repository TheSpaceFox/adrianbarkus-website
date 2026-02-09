'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export interface UrgencyProps {
  className?: string;
}

const urgencyPoints = [
  {
    headline: 'Every Month = £5k-£8k Wasted',
    copy: 'While you wait for "the right time" to fix your SaaS stack, you\'re burning £5k-£8k every single month. That\'s £60k-£96k per year down the drain.',
    emphasis: '£60k-£96k/year'
  },
  {
    headline: 'Competitors Are Moving Faster',
    copy: 'While you\'re managing 5 different SaaS platforms, your competitors are shipping custom solutions in weeks. They\'re faster, leaner, and more profitable.',
    emphasis: 'Weeks vs Months'
  }
];

export function Urgency({ className }: UrgencyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="urgency"
      className={`py-12 sm:py-16 lg:py-20 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Section Headline */}
          <h2 className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl">
            Every Month You Wait Costs £5k-£8k
          </h2>

          {/* Two Urgency Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {urgencyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <Card className="h-full border-border bg-surface-elevated hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {point.headline}
                    </h3>
                    <p className="text-base text-foreground-secondary leading-relaxed" style={{ lineHeight: '1.6' }}>
                      {point.copy}
                    </p>
                    <p className="text-lg font-bold text-primary pt-2">
                      {point.emphasis}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
