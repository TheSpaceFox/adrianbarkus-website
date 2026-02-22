'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';
import { SearchIcon } from '@/components/ui/search';
import { ZapIcon } from '@/components/ui/zap';
import { BOOK_AUDIT_URL } from '@/lib/constants';

export interface TransformationProps {
  className?: string;
}

const processSteps = [
  {
    label: '01',
    headline: 'Discovery Call',
    priceTag: 'Free',
    body: "A 45-minute conversation — no pitch, no agenda. I want to understand where your business is losing money or time, what technology decisions aren't being made, and which problem is most worth solving first. If I don't see a clear path to meaningful value, I'll tell you straight. You'll walk away with a clearer picture regardless.",
    icon: Phone,
    isAnimated: false
  },
  {
    label: '02',
    headline: 'Diagnostic Review',
    priceTag: '{currency}6,750',
    body: "A one-week deep-dive into your business — covering your software estate, your manual processes, and your technology decision-making. I interview your team, audit what you spend, map what your people do by hand, and identify where strategic oversight is missing. You receive a written report with your total software spend, your highest-value automation opportunities, and a clear picture of the technology leadership gaps. This report is yours whether you work with me further or not. Most clients cover the cost of the diagnostic in the first month of changes they make from it.",
    icon: SearchIcon,
    isAnimated: true
  },
  {
    label: '03',
    headline: 'Your Engagement',
    priceTag: 'Priced on findings',
    body: "Based on the Diagnostic Review findings, we agree on the right engagement. That could be a Software Detox Sprint — custom replacement built in 4–6 weeks, priced at 10% of your projected 3-year savings. An AI Process Sprint — highest-value automation built in 2–3 weeks, charged on what you save. Or a Fractional CTO engagement — strategic technology leadership on a day-rate, starting from a clear roadmap. Fixed scope. No surprises. The engagement is sized to the opportunity, not a standard package.",
    icon: ZapIcon,
    isAnimated: true
  }
];

export function Transformation({ className }: TransformationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

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
            THE RESPONSE
          </p>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto break-words line-clamp-2 pb-6 leading-normal">
            How It Works. No Surprises.
          </h2>

          {/* Section Subtitle */}
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto text-center mt-4 mb-16">
            No retainers until you've seen the opportunity. No surprises. Every step is designed so you can walk
            away — until you don't want to.
          </p>

          {/* Process Steps: vertical timeline mobile, horizontal stepper desktop */}
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
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
                        {step.isAnimated ? (
                          <Icon className="h-5 w-5 text-primary" size={20} aria-hidden />
                        ) : (
                          <Icon className="h-5 w-5 text-primary" aria-hidden />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-xl">{step.headline}</h3>
                      <span className="inline-flex mt-2 bg-primary/10 text-primary border border-primary/30 rounded-full px-3 py-1 text-sm font-medium">
                        {step.priceTag.replace(/{currency}/g, currency)}
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
        </motion.div>
      </div>
    </section>
  );
}
