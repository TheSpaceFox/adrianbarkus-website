'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CaseStudy } from '@/lib/case-studies/types';

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const highlightResults = caseStudy.results.filter((r) => r.highlight).slice(0, 3);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
      className="group rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="block">
        <div className="relative aspect-video w-full overflow-hidden bg-surface-elevated">
          <Image
            src={caseStudy.heroImage}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary mb-2">
            {caseStudy.industry}
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {caseStudy.title}
          </h2>
          <p className="text-sm text-foreground-secondary line-clamp-2 mb-4">
            {caseStudy.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {highlightResults.map((r) => (
              <span
                key={r.label}
                className="rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1.5 text-xs font-medium"
              >
                {r.value}
              </span>
            ))}
          </div>
          <p className="text-xs text-foreground-tertiary">
            {caseStudy.duration}
            <span className="mx-2">·</span>
            {caseStudy.serviceType}
          </p>
          <p className="mt-3 text-sm font-medium text-primary group-hover:underline">
            Read Case Study →
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
