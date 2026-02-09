import { motion } from 'framer-motion';

export interface CredibilityProps {
  className?: string;
}

export function Credibility({ className }: CredibilityProps) {
  return (
    <section
      id="credibility"
      className={`rounded-2xl border border-border/80 bg-slate-950/60 px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="max-w-3xl">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            CREDIBILITY
          </h2>
          <p className="text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
            Built and scaled technical teams and products across multiple industries and
            stages.
          </p>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            From early-stage startups to growth companies, I&apos;ve helped founders
            navigate technical complexity, build scalable systems, and make decisions that
            compound over time.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Experience
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-50">15+ years</p>
            <p className="mt-1 text-xs text-slate-400">
              Building and leading technical teams
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Focus Areas
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-50">SaaS & B2B</p>
            <p className="mt-1 text-xs text-slate-400">
              Product-led growth and enterprise platforms
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Approach
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-50">Pragmatic</p>
            <p className="mt-1 text-xs text-slate-400">
              Balance speed, quality, and long-term scalability
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

