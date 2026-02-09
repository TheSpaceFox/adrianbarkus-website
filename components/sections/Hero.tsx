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
        <p className="mb-4 inline-flex rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-foreground">
          Fractional CTO for high-velocity founders
        </p>
        <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Senior technical leadership,
          <span className="text-foreground">
            {' '}
            exactly when you need it.
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-balance text-sm text-foreground/80 sm:text-base">
          Advisory, architecture, and execution support for startups that can&apos;t yet
          justify a full-time CTO—but can&apos;t afford to get technology decisions wrong.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-lg shadow-foreground/20 transition hover:-translate-y-[1px] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Request a strategy call
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-foreground/30 bg-background/50 px-5 py-2 text-xs font-medium text-foreground backdrop-blur transition hover:border-foreground/50 hover:bg-muted">
            View typical engagements
          </button>
        </div>
      </motion.div>
    </section>
  );
}

