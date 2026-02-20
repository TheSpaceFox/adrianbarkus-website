'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface CaseStudiesProps {
  className?: string;
}

export interface CaseStudyItem {
  title: string;
  clientOrContext?: string;
  summary: string;
  problem?: string;
  solution?: string;
  outcome?: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    title: 'Replaced legacy stack for Fortune 500 retailer',
    clientOrContext: 'Fortune 500 retailer',
    summary: 'Migrated core operations off ageing vendor stack onto a modern, AI-augmented system. Reduced annual software spend by 40% and cut time-to-insight from days to hours.',
    problem: 'Multiple legacy platforms, high renewal costs, and siloed data across regions.',
    solution: 'Single replacement system built with modern stack; AI-assisted workflows for reporting and approvals.',
    outcome: '40% reduction in software spend; same team now runs operations with one system instead of five.'
  },
  {
    title: 'Fractional CTO delivery for scale-up',
    clientOrContext: 'B2B scale-up',
    summary: 'Defined technical roadmap and led build of customer-facing platform. Delivered MVP in 6 weeks and handed over to internal team with full documentation.',
    problem: 'No in-house CTO; needed to ship a new product line without hiring a full-time lead.',
    solution: 'Fixed-scope engagement: strategy, architecture, and hands-on build using AI-accelerated development.',
    outcome: 'MVP live on schedule; internal team onboarded and maintaining the system without ongoing dependency.'
  },
  {
    title: 'Software audit and replacement for professional services',
    clientOrContext: 'Professional services firm',
    summary: 'Audited 20+ subscriptions, consolidated to a single custom system. Eliminated six-figure annual spend and gave the firm full ownership of data and workflows.',
    problem: 'Spend was spread across many tools; renewals were auto-approved; no single view of costs or usage.',
    solution: 'Full software review, then a single replacement build covering CRM, projects, and reporting.',
    outcome: 'Six-figure annual savings; one system to maintain; data and IP fully owned by the client.'
  }
];

export function CaseStudies({ className }: CaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="case-studies"
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight break-words">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <Card className="h-full flex flex-col border-border bg-surface overflow-hidden">
                  <CardHeader className="pb-2">
                    {study.clientOrContext && (
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground-tertiary mb-1">
                        {study.clientOrContext}
                      </p>
                    )}
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {study.summary}
                    </p>
                    {(study.problem ?? study.solution ?? study.outcome) && (
                      <details className="group mt-auto">
                        <summary className="cursor-pointer text-sm font-medium text-primary hover:text-primary/90 transition-colors list-none flex items-center gap-2">
                          <span className="text-[#A0A0A0] group-open:hidden">+</span>
                          <span className="text-[#A0A0A0] hidden group-open:inline">−</span>
                          <span>More detail</span>
                        </summary>
                        <div className="mt-4 space-y-3 text-sm text-foreground-tertiary border-t border-border pt-4">
                          {study.problem && (
                            <div>
                              <span className="font-medium text-foreground-secondary">Problem: </span>
                              {study.problem}
                            </div>
                          )}
                          {study.solution && (
                            <div>
                              <span className="font-medium text-foreground-secondary">Solution: </span>
                              {study.solution}
                            </div>
                          )}
                          {study.outcome && (
                            <div>
                              <span className="font-medium text-foreground-secondary">Outcome: </span>
                              {study.outcome}
                            </div>
                          )}
                        </div>
                      </details>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
