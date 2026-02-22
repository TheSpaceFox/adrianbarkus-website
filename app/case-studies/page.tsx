import type { Metadata } from 'next';
import { caseStudies } from '@/lib/case-studies/data';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Case Studies | Adrian Barkus — Fractional CTO',
  description:
    'Real results from SaaS replacement, cost optimisation, and fractional CTO engagements. Delivered in weeks, not months.',
};

export default function CaseStudiesIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 pt-28 pb-16 md:pt-32 md:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
          Case Studies
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight max-w-3xl mb-4">
          Results. Not Estimates.
        </h1>
        <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl">
          Every engagement is measured by what it saves or generates. Here&apos;s the evidence.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
