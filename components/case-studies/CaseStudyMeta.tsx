'use client';

import { motion } from 'framer-motion';
import { BOOK_AUDIT_URL } from '@/lib/constants';
import { CaseStudyTestimonial } from './CaseStudyTestimonial';
import type { CaseStudy } from '@/lib/case-studies/types';

export interface CaseStudyMetaProps {
  caseStudy: CaseStudy;
}

export function CaseStudyMeta({ caseStudy }: CaseStudyMetaProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="rounded-2xl border border-border bg-surface p-6"
      >
        <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary mb-4">
          Results
        </h3>
        <ul className="space-y-4">
          {caseStudy.results.map((r) => (
            <li key={r.label} className="border-b border-border last:border-0 pb-4 last:pb-0">
              <p className={r.highlight ? 'text-2xl font-bold text-primary' : 'text-2xl font-bold text-foreground'}>
                {r.value}
              </p>
              <p className="text-sm text-foreground-secondary mt-0.5">{r.label}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {caseStudy.techStack && caseStudy.techStack.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {caseStudy.testimonial && (
        <CaseStudyTestimonial testimonial={caseStudy.testimonial} compact />
      )}
      {caseStudy.testimonialSecondary && (
        <CaseStudyTestimonial testimonial={caseStudy.testimonialSecondary} compact />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="rounded-2xl border border-border bg-surface p-6"
      >
        <p className="text-sm font-medium text-foreground mb-4">
          Seen enough? Book a free Software Review.
        </p>
        <a
          href={BOOK_AUDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-medium shadow-lg shadow-primary/25 hover:bg-primary-hover hover:scale-[1.02] transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Book Your Free Discovery Call
        </a>
      </motion.div>
    </div>
  );
}
