'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface ProblemAgitationProps {
  className?: string;
}

const painPoints = [
  {
    icon: TrendingDown,
    headline: 'Wasted Spend',
    copy: 'You pay for 100% of features. Use 20%.'
  },
  {
    icon: Clock,
    headline: 'Slow Delivery',
    copy: 'Agencies want 6 months. Needs change faster.'
  },
  {
    icon: AlertTriangle,
    headline: 'Hiring Delay',
    copy: 'CTO search takes 4-6 months. Opportunities slip away.'
  }
];

export function ProblemAgitation({ className }: ProblemAgitationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="problems"
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
            The Real Cost
          </h2>

          {/* Three Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <Card className="h-full border border-[#404040] bg-surface-elevated hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-10 md:p-12 space-y-6">
                      {/* Icon */}
                      <div className="p-3 rounded-lg bg-foreground/5 border border-[#404040] w-fit">
                        <Icon className="h-6 w-6 text-foreground-secondary" />
                      </div>

                      {/* Headline */}
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {point.headline}
                      </h3>

                      {/* Copy */}
                      <p className="text-base text-[#A0A0A0] leading-relaxed">
                        {point.copy}
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
