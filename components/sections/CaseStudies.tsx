'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { caseStudies as allCaseStudies } from '@/lib/case-studies/data';
import type { CaseStudy } from '@/lib/case-studies/types';

export interface CaseStudiesProps {
  className?: string;
}

const FEATURED_SLUGS = [
  'salesforce-replacement-crm-420k',
  'moneyspot-automated-microloan-system',
  'indifind-pan-european-marketplace'
];

const featuredStudies = FEATURED_SLUGS
  .map(slug => allCaseStudies.find(cs => cs.slug === slug))
  .filter((cs): cs is CaseStudy => cs !== undefined);

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight break-words max-w-3xl mx-auto line-clamp-2 pb-6 leading-normal">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="h-full"
              >
                <Link href={`/case-studies/${study.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col border-border bg-surface overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
                    <div className="relative w-full aspect-[16/10] shrink-0 bg-muted overflow-hidden rounded-t-lg">
                      <Image
                        src={study.heroImage}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 336px"
                        unoptimized
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-1">
                        {study.serviceType}
                      </p>
                      <CardTitle className="text-lg font-semibold text-foreground leading-tight line-clamp-2">
                        {study.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <p className="text-sm text-foreground-secondary leading-relaxed line-clamp-3">
                        {study.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors"
            >
              View all case studies →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
