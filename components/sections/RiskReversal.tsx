'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export interface RiskReversalProps {
  className?: string;
}

const guarantees = [
  {
    headline: 'ROI Guarantee',
    copy: "If I can't identify £100k+ in 3-year savings during the audit, you don't pay. Zero risk.",
    icon: Check
  },
  {
    headline: '4-Week Delivery',
    copy: 'Full custom system built and deployed in 2-4 weeks. Not 6 months. Not 12 months. Weeks.',
    icon: Check
  },
  {
    headline: 'Solo Execution',
    copy: 'No contractors. No project managers. No overhead. Just me, building your system. Faster. Cheaper. Better.',
    icon: Check
  }
];

export function RiskReversal({ className }: RiskReversalProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="risk"
      className={`py-12 sm:py-16 lg:py-20 bg-background ${className ?? ''}`}
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
            Zero-Risk Engagement. Guaranteed ROI.
          </h2>

          {/* Three Guarantee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <Card className="h-full border-border bg-surface hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {guarantee.headline}
                        </h3>
                      </div>
                      <p className="text-base text-foreground-secondary leading-relaxed" style={{ lineHeight: '1.6' }}>
                        {guarantee.copy}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
