'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UsageMeter } from '@/components/billingsdk/usage-meter';
import { useCurrency } from '@/hooks/useCurrency';
import { BOOK_AUDIT_URL } from '@/lib/constants';

const STRATEGY_CALL_URL = 'https://calendar.app.google/koCBUPrhiwLc4zFv7';

export interface OffersProps {
  className?: string;
}

const saasDetoxItems = [
  'Full software audit',
  'Custom replacement built',
  'Full handover — you own everything'
];

const aiProcessSprintItems = [
  'Process audit included',
  'AI solution built and deployed',
  'Pay on results — outcome agreed upfront'
];

const fractionalCTOItems = [
  'Strategy and roadmap owned',
  'Direct access — no account manager',
  'Hands-on execution included'
];

const offerSlots = [
  {
    slotsTotal: 5,
    slotsTaken: 2,
    slotLabel: '2026 slots',
    slotCopy: 'Limited slots per quarter. Each engagement receives full focus — I don\'t run parallel sprints.',
    ctaLabel: 'Book Your Free Discovery Call',
    ctaHref: BOOK_AUDIT_URL
  },
  {
    slotsTotal: 3,
    slotsTaken: 1,
    slotLabel: '2 / 3 left',
    slotCopy: '3 sprints per quarter. One slot currently available.',
    ctaLabel: 'Get Your Free Process Audit',
    ctaHref: BOOK_AUDIT_URL
  },
  {
    slotsTotal: 3,
    slotsTaken: 2,
    slotLabel: '1 slot left',
    slotCopy: '3 slots total. 2 taken. 1 space left.',
    ctaLabel: 'Book Strategy Call',
    ctaHref: STRATEGY_CALL_URL
  }
];

export function Offers({ className }: OffersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

  return (
    <section
      id="offers"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-background overflow-x-hidden ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight break-words max-w-3xl mx-auto pb-6 leading-normal">
              Three Ways to Work Together
            </h2>
          </div>

          {/* Three Cards Grid — equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            {/* Card 1 - Software Detox Sprint */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="h-full min-h-0 flex flex-col"
            >
              <Card className="h-full flex flex-col border border-border bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4 shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                    For businesses drowning in SaaS costs
                  </p>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Software Detox Sprint
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-8 p-10 md:p-12 min-h-0">
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    Your software bill grew one renewal at a time. Nobody questioned it. I audit your entire stack, cut what you don&apos;t need, and build what you do — custom, owned outright, no subscriptions.
                  </p>
                  {/* Checklist */}
                  <ul className="space-y-4">
                    {saasDetoxItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base text-foreground-secondary leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Investment, Timeline & Minimum */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Investment:</span>
                      <span className="text-base font-semibold text-foreground">Priced on Findings</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Pricing model:</span>
                      <span className="text-base font-semibold text-foreground">10% of 3-year savings</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Timeline:</span>
                      <span className="text-base font-semibold text-foreground">4–6 weeks</span>
                    </div>
                  </div>

                  {/* Slot availability + CTA — pinned to bottom */}
                  <div className="mt-auto space-y-4 pt-4">
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {offerSlots[0].slotCopy}
                    </p>
                    <UsageMeter
                      usage={[
                        {
                          name: 'Software Detox Sprint',
                          usage: offerSlots[0].slotsTaken,
                          limit: offerSlots[0].slotsTotal
                        }
                      ]}
                      title={offerSlots[0].slotLabel}
                      description=""
                      variant="circle"
                      size="md"
                      progressColor="default"
                      className="w-full"
                    />
                    <Button
                      size="lg"
                      onClick={() => window.open(offerSlots[0].ctaHref, '_blank')}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all hover:scale-105 px-8 py-4"
                    >
                      {offerSlots[0].ctaLabel}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 - AI Process Sprint (Primary with brass border) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="h-full min-h-0 flex flex-col"
            >
              <Card className="h-full flex flex-col border-2 border-primary bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4 shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                    For businesses losing hours to manual work
                  </p>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    AI Process Sprint
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-8 p-10 md:p-12 min-h-0">
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    Your team is doing manually what AI could handle in minutes. I find the highest-value processes, build the automation, and charge based on what you save.
                  </p>
                  {/* Checklist */}
                  <ul className="space-y-4">
                    {aiProcessSprintItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base text-foreground-secondary leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Investment, Timeline & Minimum */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Investment:</span>
                      <span className="text-base font-semibold text-foreground">15% of first-year savings</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Timeline:</span>
                      <span className="text-base font-semibold text-foreground">2–3 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Minimum engagement:</span>
                      <span className="text-base font-semibold text-foreground">{currency}5,000</span>
                    </div>
                  </div>

                  {/* Slot availability + CTA — pinned to bottom */}
                  <div className="mt-auto space-y-4 pt-4">
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {offerSlots[1].slotCopy}
                    </p>
                    <UsageMeter
                      usage={[
                        {
                          name: 'AI Process Sprint',
                          usage: offerSlots[1].slotsTaken,
                          limit: offerSlots[1].slotsTotal
                        }
                      ]}
                      title={offerSlots[1].slotLabel}
                      description=""
                      variant="circle"
                      size="md"
                      progressColor="default"
                      className="w-full"
                    />
                    <Button
                      size="lg"
                      onClick={() => window.open(offerSlots[1].ctaHref, '_blank')}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all hover:scale-105 px-8 py-4"
                    >
                      {offerSlots[1].ctaLabel}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 - Fractional CTO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="h-full min-h-0 flex flex-col"
            >
              <Card className="h-full flex flex-col border border-border bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4 shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
                    For businesses that need a tech leader, not a hire
                  </p>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Fractional CTO
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-8 p-10 md:p-12 min-h-0">
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    Senior technology leadership without the {currency}150k hire. I own your tech strategy, make the architecture calls, and build what we decide needs building. One person. No handoffs.
                  </p>
                  {/* Checklist */}
                  <ul className="space-y-4">
                    {fractionalCTOItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-foreground-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-base text-foreground-secondary leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Investment & Terms */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Investment:</span>
                      <span className="text-base font-semibold text-foreground">{currency}6,250/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-secondary">Minimum:</span>
                      <span className="text-base font-semibold text-foreground">12 days per year</span>
                    </div>
                  </div>

                  {/* Slot availability + CTA — pinned to bottom */}
                  <div className="mt-auto space-y-4 pt-4">
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {offerSlots[2].slotCopy}
                    </p>
                    <UsageMeter
                      usage={[
                        {
                          name: 'Fractional CTO',
                          usage: offerSlots[2].slotsTaken,
                          limit: offerSlots[2].slotsTotal
                        }
                      ]}
                      title={offerSlots[2].slotLabel}
                      description=""
                      variant="circle"
                      size="md"
                      progressColor="default"
                      className="w-full"
                    />
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open(offerSlots[2].ctaHref, '_blank')}
                      className="w-full border border-border bg-surface-elevated hover:bg-surface text-foreground hover:scale-105 transition-transform duration-200 px-8 py-4"
                    >
                      {offerSlots[2].ctaLabel}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
