import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies, getCaseStudyBySlug } from '@/lib/case-studies/data';
import { BOOK_AUDIT_URL } from '@/lib/constants';
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero';
import { CaseStudyMeta } from '@/components/case-studies/CaseStudyMeta';
import { CaseStudyGallery } from '@/components/case-studies/CaseStudyGallery';
import { CaseStudyTestimonial } from '@/components/case-studies/CaseStudyTestimonial';
import Header from '@/components/Header';

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) {
    return { title: 'Case Study | Adrian Barkus' };
  }
  return {
    title: `${caseStudy.title} | Adrian Barkus`,
    description: caseStudy.metaDescription,
    openGraph: {
      images: [caseStudy.heroImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 pb-24">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm text-foreground-secondary hover:text-primary transition-colors mb-6"
          >
            ← Back to Case Studies
          </Link>

          <CaseStudyHero caseStudy={caseStudy} />

          <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-secondary mb-3">
                  Problem
                </h2>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {caseStudy.problem}
                  </p>
                </div>
              </section>
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-secondary mb-3">
                  Solution
                </h2>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {caseStudy.solution}
                  </p>
                </div>
              </section>
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-secondary mb-3">
                  Outcome
                </h2>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {caseStudy.outcome}
                  </p>
                </div>
              </section>

              {caseStudy.additionalImages && caseStudy.additionalImages.length > 0 && (
                <CaseStudyGallery images={caseStudy.additionalImages} />
              )}

              {caseStudy.testimonial && !caseStudy.testimonialSecondary && (
                <CaseStudyTestimonial testimonial={caseStudy.testimonial} />
              )}
              {caseStudy.testimonial && caseStudy.testimonialSecondary && (
                <>
                  <CaseStudyTestimonial testimonial={caseStudy.testimonial} />
                  <CaseStudyTestimonial testimonial={caseStudy.testimonialSecondary} />
                </>
              )}
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <CaseStudyMeta caseStudy={caseStudy} />
              </div>
            </div>
          </div>
        </div>

        <section className="w-full border-t border-border bg-surface py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ready to see what your stack is costing you?
            </h2>
            <a
              href={BOOK_AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-8 py-4 text-base font-medium shadow-lg shadow-primary/25 hover:bg-primary-hover hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
