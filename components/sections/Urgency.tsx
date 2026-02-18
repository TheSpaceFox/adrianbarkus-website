'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UsageMeter } from '@/components/billingsdk/usage-meter';
import { BOOK_AUDIT_URL } from '@/lib/constants';

export interface UrgencyProps {
  className?: string;
}

const STRATEGY_CALL_URL = 'https://calendar.app.google/koCBUPrhiwLc4zFv7';

const urgencyCards = [
  {
    headline: 'Software Detox Sprint',
    copy: '5 slots for 2026. Book in advance; change to next available with 30 days notice or your slot is lost.',
    slotsTotal: 5,
    slotsTaken: 2,
    slotLabel: '2026 slots',
    ctaLabel: 'Book Audit Session',
    ctaHref: BOOK_AUDIT_URL
  },
  {
    headline: 'Fractional CTO',
    copy: '3 slots total. 2 taken. One space left.',
    slotsTotal: 3,
    slotsTaken: 2,
    slotLabel: '1 slot left',
    ctaLabel: 'Book Strategy Call',
    ctaHref: STRATEGY_CALL_URL
  }
];

const getUrgencyInitialPosition = (idx: number) => {
  switch (idx) {
    case 0:
      return { x: -100, y: -80 };
    case 1:
      return { x: 100, y: 80 };
    default:
      return { x: 0, y: 100 };
  }
};

export function Urgency({ className }: UrgencyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="urgency"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface overflow-x-hidden ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight break-words">
            Secure Your Slot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {urgencyCards.map((card, index) => {
              const initialPos = getUrgencyInitialPosition(index);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: initialPos.x, y: initialPos.y, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0, y: 0, scale: 1 }
                      : { opacity: 0, x: initialPos.x, y: initialPos.y, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Card className="h-full border border-border bg-surface-elevated hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-10 md:p-12 space-y-6">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {card.headline}
                      </h3>
                      <p className="text-base text-foreground-secondary leading-relaxed">
                        {card.copy}
                      </p>
                      <UsageMeter
                        usage={[
                          {
                            name: card.headline,
                            usage: card.slotsTaken,
                            limit: card.slotsTotal
                          }
                        ]}
                        title={card.slotLabel}
                        description=""
                        variant="circle"
                        size="md"
                        progressColor="default"
                        className="w-full"
                      />
                      <Button
                        size="lg"
                        onClick={() => window.open(card.ctaHref, '_blank')}
                        className={
                          index === 0
                            ? 'w-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all hover:scale-105 px-8 py-4'
                            : 'w-full border border-border bg-surface hover:bg-surface-elevated text-foreground hover:scale-105 transition-transform duration-200 px-8 py-4'
                        }
                      >
                        {card.ctaLabel}
                      </Button>
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
