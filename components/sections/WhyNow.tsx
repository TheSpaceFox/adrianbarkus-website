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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto break-words line-clamp-2 pb-6 leading-normal">
            The Cost of Custom Software Just Collapsed. Your Renewal Invoice Didn&apos;t.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 md:gap-x-16">
            <div className="md:pr-8 md:border-r md:border-border">
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                What Just Happened
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed line-clamp-2 pb-1">
                AI has changed what custom software costs and how long it takes — what used to need six people and six months now takes one person weeks. The businesses most exposed are locked into platforms they can&apos;t leave; the answer is no longer &quot;just the cost of doing business.&quot;
              </p>
            </div>
            <div>
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                Where I Come In
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed line-clamp-2 pb-1">
                19 years implementing the platforms your business runs on — Woolworths, Thomson Reuters, Australian Government and more. I now combine that with AI-accelerated development to audit, build and hand you a system you own in weeks. No subscriptions, no lock-in.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
