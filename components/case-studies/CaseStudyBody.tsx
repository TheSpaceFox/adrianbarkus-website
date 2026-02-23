'use client';

import type { CaseStudy } from '@/lib/case-studies/types';
import { useCurrency } from '@/hooks/useCurrency';

export interface CaseStudyBodyProps {
  caseStudy: CaseStudy;
}

export function CaseStudyBody({ caseStudy }: CaseStudyBodyProps) {
  const { currency } = useCurrency();
  const rc = (str: string) => str.replace(/£/g, currency);

  return (
    <>
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-secondary mb-3">
          Problem
        </h2>
        <div className="border-l-2 border-primary pl-6">
          <p className="text-foreground leading-relaxed whitespace-pre-line">
            {rc(caseStudy.problem)}
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-secondary mb-3">
          Solution
        </h2>
        <div className="border-l-2 border-primary pl-6">
          <p className="text-foreground leading-relaxed whitespace-pre-line">
            {rc(caseStudy.solution)}
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-secondary mb-3">
          Outcome
        </h2>
        <div className="border-l-2 border-primary pl-6">
          <p className="text-foreground leading-relaxed whitespace-pre-line">
            {rc(caseStudy.outcome)}
          </p>
        </div>
      </section>
    </>
  );
}
