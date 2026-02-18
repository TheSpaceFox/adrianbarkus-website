'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Search, Zap, LucideIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useCurrency } from '@/hooks/useCurrency';
import { BOOK_AUDIT_URL } from '@/lib/constants';

export interface TransformationProps {
  className?: string;
}

const processSteps = [
  {
    label: '01',
    headline: 'Discovery Call',
    priceTag: 'Free',
    body: "A 45-minute conversation to understand your current stack, your costs, and whether I can save you money. No pitch. No obligation. If I can't find savings, I'll tell you.",
    icon: Phone
  },
  {
    label: '02',
    headline: 'Software Review',
    priceTag: '£6,750',
    body: "A one-week deep-dive into your entire software estate. I interview your team, audit every active subscription, map every workflow, and identify exactly where you're haemorrhaging cash. You receive a written report with projected 3-year savings, replacement recommendations, and a clear ROI model — whether you work with me further or not.",
    icon: Search
  },
  {
    label: '03',
    headline: 'SaaS Detox Sprint',
    priceTag: 'Priced on findings',
    body: 'Based on the Software Review, I build your custom replacement in 4–6 weeks. Fixed price, fixed scope, zero subscriptions on the other side. Priced at 10% of your projected 3-year savings — you keep the other 90%.',
    icon: Zap
  }
];

export function Transformation({ className }: TransformationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

  const proofMetrics = [
    { value: `${currency}420k`, label: 'Saved (3yr Software replacement)' },
    { value: `${currency}2.5M`, label: 'Revenue Generated' },
    { value: '70%', label: 'Cost Optimization' },
    { value: `${currency}55M`, label: 'Acquisition Enabled' }
  ];

  return (
    <section
      id="transformation"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface-elevated overflow-x-hidden ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Label */}
          <p className="text-primary text-xs tracking-[0.16em] uppercase font-medium text-center">
            HOW IT WORKS
          </p>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground text-center break-words">
            Adrian Rebuilds It. With AI.
          </h2>

          {/* Section Subtitle */}
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto text-center mt-4 mb-16">
            No retainers until you've seen the savings. No surprises. Every step is designed so you can walk
            away — until you don't want to.
          </p>

          {/* Process Steps: vertical timeline mobile, horizontal stepper desktop */}
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon as LucideIcon;
              const isLast = index === processSteps.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`flex-1 min-w-0 ${!isLast ? 'md:border-r md:border-dashed md:border-border md:pr-6 lg:pr-10' : ''}`}
                >
                  <div className="flex gap-4 md:flex-col md:px-2">
                    <div className="flex gap-3 md:flex-row md:items-center">
                      <span className="text-primary text-4xl font-bold flex-shrink-0">{step.label}</span>
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 w-fit h-fit">
                        <Icon className="h-5 w-5 text-primary" aria-hidden />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-xl">{step.headline}</h3>
                      <span className="inline-flex mt-2 bg-primary/10 text-primary border border-primary/30 rounded-full px-3 py-1 text-sm font-medium">
                        {step.priceTag}
                      </span>
                      <p className="text-foreground-secondary text-sm leading-relaxed mt-3">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA above stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="flex justify-center mb-12"
          >
            <a
              href={BOOK_AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground rounded-full px-8 py-4 shadow-lg shadow-primary/25 hover:scale-105 hover:bg-primary-hover transition-all font-medium"
            >
              Book Your Free Discovery Call
            </a>
          </motion.div>

          {/* Proof Metrics Row — unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-16">
              {proofMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-12 md:gap-16">
                  <div className="text-center">
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
