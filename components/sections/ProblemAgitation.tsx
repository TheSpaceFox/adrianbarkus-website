'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ProblemAgitationProps {
  className?: string;
}

const painPoints = [
  {
    icon: TrendingDown,
    headline: '£50k-£100k/Year Wasted',
    copy: "Salesforce. HubSpot. Dynamics. You're paying for 100% of features. Using 20%. Your CFO knows it. You know it. But who has time to fix it?",
    badge: 'Waste'
  },
  {
    icon: Clock,
    headline: '6-Month Agency Quotes',
    copy: "Traditional dev shops want £60k and 6 months. By the time they deliver, your needs have changed. You're stuck managing contractors, not growing.",
    badge: 'Delay'
  },
  {
    icon: AlertTriangle,
    headline: 'CTO Search = 4-6 Months',
    copy: '£150k salary + equity. 4-6 month hiring process. Meanwhile, tech debt piles up and opportunities slip away.',
    badge: 'Risk'
  }
];

export function ProblemAgitation({ className }: ProblemAgitationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="problems"
      className={`py-12 sm:py-16 lg:py-20 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Headline */}
          <h2 className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl">
            The SaaS Tax Is Killing Your Margins
          </h2>

          {/* Three Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <Card className="h-full border-border bg-surface-elevated hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-lg bg-foreground/5 border border-border">
                          <Icon className="h-6 w-6 text-foreground-secondary" />
                        </div>
                        <Badge variant="destructive" className="text-xs">
                          {point.badge}
                        </Badge>
                      </div>

                      {/* Headline */}
                      <h3 className="text-xl font-semibold text-foreground">
                        {point.headline}
                      </h3>

                      {/* Copy */}
                      <p className="text-base text-foreground-secondary leading-relaxed" style={{ lineHeight: '1.6' }}>
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
