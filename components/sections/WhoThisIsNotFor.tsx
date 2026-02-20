'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BOOK_AUDIT_URL } from '@/lib/constants';

export function WhoThisIsNotFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="who-this-is-not-for"
      className="min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface overflow-x-hidden py-24"
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
            THE FILTER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground text-center max-w-3xl mx-auto break-words">
            This Isn&apos;t for Everyone.
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg leading-relaxed">
            <p className="text-foreground-secondary text-center">
              I work with a small number of clients at any time, and I&apos;m selective about who I take on. This is not the right fit if:
            </p>
            <ul className="list-none space-y-3 text-foreground pl-4">
              <li>— You&apos;re looking for the cheapest option. I&apos;m not it, and I won&apos;t pretend to be.</li>
              <li>— You need someone to manage a team of developers. I work directly, not through layers.</li>
              <li>— You want a six-month strategy document with no delivery attached. Everything I produce ships.</li>
              <li>— You&apos;re a startup that hasn&apos;t proven the business model yet. My background is in established operations, and that&apos;s where I add the most value.</li>
            </ul>
            <p className="text-foreground-secondary text-center pt-4">
              If you&apos;re an established business with real revenue, real software costs, and a real decision-maker who&apos;s ready to act — I want to hear from you.
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <a
              href={BOOK_AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground rounded-full px-8 py-4 shadow-lg shadow-primary/25 hover:scale-105 hover:bg-primary-hover transition-all font-medium"
            >
              Book Your Free Software Review Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
