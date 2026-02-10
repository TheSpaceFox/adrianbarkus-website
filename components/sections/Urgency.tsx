'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useCurrency } from '@/hooks/useCurrency';

export interface UrgencyProps {
  className?: string;
}

const urgencyPoints = [
  {
    headline: 'Monthly Waste',
    copy: 'Every month costs {currency}5k-{currency}8k. That\'s {currency}60k-{currency}96k per year.'
  },
  {
    headline: 'Competitors Win',
    copy: 'They ship custom solutions in weeks. You wait months.'
  }
];

export function Urgency({ className }: UrgencyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

  const urgencyPointsWithCurrency = urgencyPoints.map(point => ({
    ...point,
    copy: point.copy.replace(/{currency}/g, currency)
  }));

  return (
    <section
      id="urgency"
      className={`py-20 md:py-32 bg-surface ${className ?? ''}`}
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
            The Cost of Waiting
          </h2>

          {/* Two Urgency Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {urgencyPointsWithCurrency.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <Card className="h-full border border-[#404040] bg-surface-elevated hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-10 md:p-12 space-y-6">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {point.headline}
                    </h3>
                    <p className="text-base text-[#A0A0A0] leading-relaxed">
                      {point.copy}
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
