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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto break-words line-clamp-2 pb-6 leading-normal">
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
                The businesses most exposed are those locked into expensive platforms, running manual processes that AI could eliminate overnight, and making technology decisions by committee or not at all. The CFO is asking questions about the software bill. The operations director is frustrated by how long everything takes. The MD knows something needs to change but has nobody to own it.
              </p>
            </div>
            <div>
              <p className="text-primary text-xs tracking-[0.12em] uppercase font-medium mb-3">
                Where I Come In
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed">
                I&apos;ve spent 19 years inside the enterprise software world — at Woolworths, Thomson Reuters, the Australian Government, and a dozen established businesses in between. I&apos;ve implemented the platforms your business runs on, which means I know exactly where they&apos;re costing you money, where your team is losing hours to work that shouldn&apos;t require a person, and what it actually takes to make technology decisions that stick.
              </p>
              <p className="text-foreground-secondary text-base leading-relaxed mt-4">
                I now combine that experience with AI-accelerated development to move at a speed no agency can match. Whether that&apos;s auditing your software estate and building a replacement you own outright, automating the manual processes bleeding your team&apos;s time, or sitting at the table as your Fractional CTO making the strategic calls — the engagement is scoped to what your business actually needs, not a fixed retainer or a generic methodology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
