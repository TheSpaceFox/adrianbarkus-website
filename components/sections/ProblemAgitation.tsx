'use client';

import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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

export function ProblemAgitation({ className }: ProblemAgitationProps) {
  return (
    <section
      id="problems"
      className={`py-12 sm:py-16 lg:py-20 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Section Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl"
          >
            The SaaS Tax Is Killing Your Margins
          </motion.h2>

          {/* Three Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
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
