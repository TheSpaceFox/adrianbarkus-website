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
            The Cost of Custom Software Just Collapsed. Your Renewal Invoice Didn&apos;t.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 md:gap-x-16">
            <div className="md:pr-8 md:border-r md:border-border">
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                What Just Happened
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed">
                AI has fundamentally changed what custom software costs to build and how long it takes to deliver. What used to require a development team of six and six months now takes one person with the right tools a matter of weeks.
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed mt-4">
                The businesses most exposed are those locked into expensive platforms they can&apos;t leave and can&apos;t justify renewing. The CFO is asking questions. The MD is frustrated. And the answer is no longer &quot;this is just the cost of doing business.&quot;
              </p>
            </div>
            <div>
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                Where I Come In
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed">
                I&apos;ve spent 19 years inside the enterprise software world — at Woolworths, Thomson Reuters, the Australian Government, and a dozen established businesses in between. I&apos;ve implemented the platforms your business runs on, which means I know exactly where they&apos;re costing you money and how to replace them without disrupting your operations.
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed mt-4">
                I now combine that experience with AI-accelerated development to do what no agency can match: audit what to cut, build the replacement, migrate your data, and hand you a system you own outright — delivered in weeks, not months. No subscriptions on the other side. No lock-in. No vendor to negotiate with at renewal time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
