'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, PiggyBank, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export interface TransformationProps {
  className?: string;
}

const benefits = [
  {
    icon: Zap,
    headline: '10x Velocity',
    copy: 'AI-accelerated development means I build full-stack systems solo. No contractors. No delays. No overhead. Just speed.',
    badge: 'Speed'
  },
  {
    icon: PiggyBank,
    headline: '70% Cost Reduction',
    copy: "Replace £60k/year SaaS with £12k custom build. That's £420k saved over 3 years. Your CFO will love you.",
    badge: 'Savings'
  },
  {
    icon: Shield,
    headline: 'Strategic + Hands-On',
    copy: 'You get CTO-level thinking AND execution. Not one or the other. Weekly strategy + daily building.',
    badge: 'Leadership'
  }
];

const proofMetrics = [
  { value: '£420k', label: 'Saved (3yr SaaS replacement)' },
  { value: '£2.5M', label: 'Revenue Generated' },
  { value: '70%', label: 'Cost Optimization' },
  { value: '£55M', label: 'Acquisition Enabled' }
];

export function Transformation({ className }: TransformationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="transformation"
      className={`py-12 sm:py-16 lg:py-20 bg-background ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16"
        >
          {/* Section Headline */}
          <h2 className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl max-w-4xl mx-auto">
            What If You Could Ship Custom Systems in 4 Weeks Instead of 6 Months?
          </h2>

          {/* Three Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <Card className="h-full border-border bg-surface hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs border-foreground-tertiary text-foreground-tertiary">
                          {benefit.badge}
                        </Badge>
                      </div>

                      {/* Headline */}
                      <h3 className="text-xl font-semibold text-foreground">
                        {benefit.headline}
                      </h3>

                      {/* Copy */}
                      <p className="text-base text-foreground-secondary leading-relaxed" style={{ lineHeight: '1.6' }}>
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
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {proofMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                      {metric.value}
                    </p>
                    <p className="text-xs text-foreground-secondary sm:text-sm mt-1">
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
