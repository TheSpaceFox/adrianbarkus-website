'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function WhyNow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="why-now"
      className="min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface overflow-x-hidden py-24"
    >
      <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-12 md:space-y-16"
        >
          <p className="text-primary text-xs tracking-[0.16em] uppercase font-medium text-center">
            THE MOMENT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto break-words">
            The Market Just Changed. Your Software Strategy Should Too.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 md:gap-x-16">
            <div className="md:pr-8 md:border-r md:border-border">
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                What Just Happened
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed">
                Wall Street is calling it the SaaSpocalypse. In a matter of days, $300 billion was wiped
                from the value of software companies as investors concluded that AI has made the
                traditional subscription software model obsolete.
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed mt-4">
                The businesses most exposed are those locked into expensive, inflexible platforms they
                can&apos;t leave and can&apos;t afford to keep renewing. Your finance team will be asking
                questions. Your board already is.
              </p>
            </div>
            <div>
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                Where Adrian Comes In
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed">
                Adrian Barkus has spent 19 years inside the enterprise software world — implementing
                the same platforms now under threat. He saw this shift coming before the market did.
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed mt-4">
                He now uses that knowledge, combined with AI-accelerated development, to guide
                businesses through the transition: auditing what to cut, building what to keep, and
                delivering custom systems that you own outright — with no subscriptions, no lock-in,
                and no exposure to the next market shock.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
