import { motion } from 'framer-motion';

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative overflow-hidden rounded-2xl border border-border bg-section-gradient px-6 py-10 shadow-soft-xl sm:px-10 sm:py-14 lg:px-14 lg:py-20 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 inline-flex rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
          Fractional CTO for high-velocity founders
        </p>
        <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Senior technical leadership,
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {' '}
            exactly when you need it.
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-balance text-sm text-slate-300 sm:text-base">
          Advisory, architecture, and execution support for startups that can&apos;t yet
          justify a full-time CTO—but can&apos;t afford to get technology decisions wrong.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-blue-500/35 transition hover:-translate-y-[1px] hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Request a strategy call
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/50 px-5 py-2 text-xs font-medium text-slate-200 backdrop-blur transition hover:border-slate-500 hover:text-slate-50">
            View typical engagements
          </button>
        </div>
      </motion.div>
    </section>
  );
}

