'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface CaseStudiesProps {
  className?: string;
}

export interface CaseStudyItem {
  title: string;
  clientOrContext?: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
}

const CASE_STUDY_IMAGE_WIDTH = 800;
const CASE_STUDY_IMAGE_HEIGHT = 500;

const caseStudies: CaseStudyItem[] = [
  {
    title: 'Legacy stack replacement — 40% cost reduction, one system instead of five',
    clientOrContext: 'Fortune 500 retailer',
    summary: 'Migrated core operations off ageing vendor stack onto a modern, AI-augmented system. Reduced annual software spend by 40% and cut time-to-insight from days to hours.',
    image: 'https://placehold.co/800x500/373737/ffffff?text=Case+Study+1',
    imageAlt: 'Legacy stack replacement for Fortune 500 retailer',
    problem: 'A major retailer running multiple legacy platforms with high annual renewal costs and siloed data across regions. Reporting took days. Teams operated from different systems with no single source of truth. Every renewal was a negotiation nobody was winning.',
    solution: 'Full software estate audit followed by a single replacement system built on a modern stack. AI-assisted workflows for reporting, approvals, and data consolidation across regions. Delivered in 6 weeks with full team handover and documentation.',
    outcome: '40% reduction in annual software spend. The same operations team now runs the business from one system instead of five. Time-to-insight dropped from days to hours. No ongoing vendor contracts.'
  },
  {
    title: 'Fractional CTO — technology leadership without the full-time hire',
    clientOrContext: 'Established professional services firm',
    summary: 'Defined technology roadmap and led build of customer-facing platform. Delivered in 6 weeks and handed over to internal team with full documentation.',
    image: 'https://placehold.co/800x500/373737/ffffff?text=Case+Study+2',
    imageAlt: 'Fractional CTO delivery for established professional services firm',
    problem: 'A 12-year-old professional services firm with strong revenue but no technology leadership. The MD was making all technical decisions. Two failed attempts to hire a full-time CTO. Meanwhile, the product roadmap had stalled and a competitor was pulling ahead.',
    solution: 'Fractional CTO engagement: defined the technology roadmap, took ownership of technical decisions, and led the build of a new customer-facing platform using AI-accelerated development. The MD was removed from technical decision-making within two weeks.',
    outcome: 'New platform live in 6 weeks. Internal team fully onboarded with documentation. The MD hasn\'t made a technical decision since. Business is now moving faster than the competitor that prompted the engagement.'
  },
  {
    title: 'Six-figure SaaS spend eliminated — 20 subscriptions to one custom system',
    clientOrContext: 'Professional services firm',
    summary: 'Audited 20+ subscriptions, consolidated to a single custom system. Eliminated six-figure annual spend and gave the firm full ownership of data and workflows.',
    image: 'https://placehold.co/800x500/373737/ffffff?text=Case+Study+3',
    imageAlt: 'Software audit and replacement for professional services firm',
    problem: 'A 15-year-old professional services firm had accumulated 20+ SaaS subscriptions over a decade of reactive purchasing. Total annual spend was over {currency}120k. Renewals were auto-approved because nobody owned the review process. No single view of costs, usage, or data. The firm was locked into platforms it had long outgrown.',
    solution: 'One-week software review identified {currency}120k in annual spend with significant overlap and redundancy. Built a single custom system covering CRM, project tracking, client portal, and reporting — tailored to how the firm actually works, not how the SaaS vendor assumed it would.',
    outcome: '{currency}120k annual saving from year one. One system to maintain instead of twenty. All data and IP fully owned by the client — no vendor relationship to manage, no renewal to dread, no price increase to absorb. The Software Review paid for itself in the first week of changes.'
  }
];

export function CaseStudies({ className }: CaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight break-words max-w-3xl mx-auto line-clamp-2 pb-6 leading-normal">
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
                  {study.image ? (
                    <div className="relative w-full aspect-[16/10] shrink-0 bg-muted overflow-hidden rounded-t-lg">
                      <Image
                        src={study.image}
                        alt={study.imageAlt ?? study.title}
                        width={CASE_STUDY_IMAGE_WIDTH}
                        height={CASE_STUDY_IMAGE_HEIGHT}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 336px"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/10] shrink-0 bg-muted rounded-t-lg" aria-hidden />
                  )}
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
                          <span className="text-foreground-secondary group-open:hidden">+</span>
                          <span className="text-foreground-secondary hidden group-open:inline">−</span>
                          <span>More detail</span>
                        </summary>
                        <div className="mt-4 space-y-3 text-sm text-foreground-tertiary border-t border-border pt-4">
                          {study.problem && (
                            <div>
                              <span className="font-medium text-foreground-secondary">Problem: </span>
                              {study.problem.replace(/{currency}/g, currency)}
                            </div>
                          )}
                          {study.solution && (
                            <div>
                              <span className="font-medium text-foreground-secondary">Solution: </span>
                              {study.solution.replace(/{currency}/g, currency)}
                            </div>
                          )}
                          {study.outcome && (
                            <div>
                              <span className="font-medium text-foreground-secondary">Outcome: </span>
                              {study.outcome.replace(/{currency}/g, currency)}
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
