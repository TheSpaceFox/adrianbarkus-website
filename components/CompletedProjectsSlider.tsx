'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  metricLabel: string;
  metricValue: string;
  imageUrl: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'IndiFind – AI Candidate Search',
    subtitle: 'Replaced legacy ATS with a custom, AI-accelerated stack.',
    metricLabel: 'Software savings',
    metricValue: '£120k / yr',
    imageUrl:
      'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/project-placeholder-1.jpeg',
    tech: ['Next.js', 'Supabase', 'OpenAI']
  },
  {
    id: 'project-2',
    title: 'Field Ops Automation',
    subtitle: 'Unified dispatch, reporting, and billing into a single system.',
    metricLabel: 'Time saved',
    metricValue: '3 days / week',
    imageUrl:
      'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/project-placeholder-2.jpeg',
    tech: ['React', 'Azure', 'PostgreSQL']
  },
  {
    id: 'project-3',
    title: 'Subscription Cost Reset',
    subtitle: 'Replaced overlapping tools with a single custom platform.',
    metricLabel: 'Tool reduction',
    metricValue: '12 → 3 apps',
    imageUrl:
      'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/project-placeholder-3.jpeg',
    tech: ['TypeScript', 'Serverless', 'Stripe']
  }
];

export function CompletedProjectsSlider({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = projects[index];

  const goNext = () => setIndex((prev) => (prev + 1) % projects.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-tertiary">
            Completed Projects
          </p>
          <p className="text-sm text-foreground-secondary">
            Recent builds where Software was replaced with custom systems.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#404040] text-foreground-secondary hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#404040] text-foreground-secondary hover:border-primary hover:text-primary transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-[#404040] bg-surface-elevated shadow-[0_22px_45px_rgba(0,0,0,0.3)]"
          >
            <div className="relative w-full aspect-[16/9] bg-[#1f1f1f]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${active.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                    {active.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground-secondary">
                    {active.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-foreground-tertiary">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#404040] bg-background/60 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="text-xs uppercase tracking-[0.16em] text-foreground-tertiary">
                    {active.metricLabel}
                  </span>
                  <span className="text-lg md:text-2xl font-semibold text-primary">
                    {active.metricValue}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile controls + dots */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-[#404040] md:hidden">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#404040] text-foreground-secondary hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#404040] text-foreground-secondary hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-1.5">
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-1.5 w-4 rounded-full transition-colors',
                      i === index ? 'bg-primary' : 'bg-[#404040]'
                    )}
                    aria-label={`Show project ${project.title}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop dots */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-4">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'h-1 w-6 rounded-full transition-colors',
                i === index ? 'bg-primary' : 'bg-[#404040]'
              )}
              aria-label={`Show project ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

