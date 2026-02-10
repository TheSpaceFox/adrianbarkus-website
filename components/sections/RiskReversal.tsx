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
    copy: "If I can't identify £100k+ in savings, you don't pay."
  },
  {
    headline: '4-Week Delivery',
    copy: 'Full system built and deployed in 2-4 weeks.'
  },
  {
    headline: 'Solo Execution',
    copy: 'No contractors. No overhead. Just speed.'
  }
];

export function RiskReversal({ className }: RiskReversalProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="risk"
      className={`py-20 md:py-32 bg-background ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight">
            Zero Risk
          </h2>

          {/* Three Guarantee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <Card className="h-full border border-[#404040] bg-surface hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-10 md:p-12 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {guarantee.headline}
                      </h3>
                    </div>
                    <p className="text-base text-[#A0A0A0] leading-relaxed">
                      {guarantee.copy}
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
