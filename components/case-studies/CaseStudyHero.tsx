'use client';

import Image from 'next/image';
import type { CaseStudy } from '@/lib/case-studies/types';

export interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <div className="relative w-full max-h-[500px] overflow-hidden rounded-b-2xl">
      <div className="relative aspect-[21/9] min-h-[280px] w-full md:max-h-[500px]">
        <Image
          src={caseStudy.heroImage}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
              {caseStudy.industry}
            </span>
            <span className="rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
              {caseStudy.serviceType}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight max-w-4xl">
            {caseStudy.title}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-foreground-secondary max-w-3xl">
            {caseStudy.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
