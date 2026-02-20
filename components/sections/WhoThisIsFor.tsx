'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BOOK_AUDIT_URL } from '@/lib/constants';

export function WhoThisIsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="who-this-is-for"
      className="min-h-screen-dynamic snap-start flex flex-col justify-center bg-background overflow-x-hidden py-24"
    >
      <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8 md:space-y-12"
        >
          <p className="text-primary text-xs tracking-[0.16em] uppercase font-medium text-center">
            THE FIT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto break-words line-clamp-2">
            Who This Is For
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-foreground-secondary text-base md:text-lg leading-relaxed text-center">
            <p>
              I work with established businesses — typically 10 to 30 years old, £5M to £75M in revenue — that have grown through operational strength, not technology.
            </p>
            <p>
              Companies where the MD still makes the technology decisions, or where nobody does. Where SaaS costs have crept up for a decade without anyone doing the full maths. Where a competitor is moving faster and the honest answer is: they have better systems.
            </p>
            <p>
              If your finance director just pulled the software invoice report and it was an uncomfortable number — we should talk.
            </p>
            <p>
              If you&apos;ve tried to hire a CTO and it hasn&apos;t worked, or you&apos;re not ready to commit £150k to a full-time hire — we should talk.
            </p>
            <p>
              If your operations feel like a £5M company even though you&apos;re turning over £20M — we should talk.
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <a
              href={BOOK_AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground rounded-full px-8 py-4 shadow-lg shadow-primary/25 hover:scale-105 hover:bg-primary-hover transition-all font-medium"
            >
              Book Your Free Software Review
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
