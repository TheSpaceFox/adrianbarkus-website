'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, PiggyBank, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCurrency } from '@/hooks/useCurrency';

export interface TransformationProps {
  className?: string;
}

const benefits = [
  {
    icon: Zap,
    headline: '10x Velocity',
    copy: 'Build full-stack systems solo. No contractors. No delays.'
  },
  {
    icon: PiggyBank,
    headline: '70% Savings',
    copy: 'Replace {currency}60k/year Software with {currency}12k custom build.'
  },
  {
    icon: Shield,
    headline: 'Strategic Execution',
    copy: 'CTO-level thinking plus hands-on building. Weekly strategy.'
  }
];

export function Transformation({ className }: TransformationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

  const benefitsWithCurrency = benefits.map(benefit => ({
    ...benefit,
    copy: benefit.copy.replace(/{currency}/g, currency)
  }));

  const proofMetrics = [
    { value: `${currency}420k`, label: 'Saved (3yr Software replacement)' },
    { value: `${currency}2.5M`, label: 'Revenue Generated' },
    { value: '70%', label: 'Cost Optimization' },
    { value: `${currency}55M`, label: 'Acquisition Enabled' }
  ];

  return (
    <section
      id="transformation"
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
            Build Faster. Save More.
          </h2>

          {/* Three Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {benefitsWithCurrency.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <Card className="h-full border border-[#404040] bg-surface hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-10 md:p-12 space-y-6">
                      {/* Icon */}
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      {/* Headline */}
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {benefit.headline}
                      </h3>

                      {/* Copy */}
                      <p className="text-base text-[#A0A0A0] leading-relaxed">
                        {benefit.copy}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Proof Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="mt-20 md:mt-32 pt-8 border-t border-[#404040]"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-16">
              {proofMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-12 md:gap-16">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                      {metric.value}
                    </p>
                    <p className="text-xs text-[#A0A0A0] sm:text-sm mt-1">
                      {metric.label}
                    </p>
                  </div>
                  {index < proofMetrics.length - 1 && (
                    <Separator orientation="vertical" className="h-12 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
