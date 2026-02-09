import { motion } from 'framer-motion';

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-10 shadow-soft-xl sm:px-10 sm:py-14 lg:px-14 lg:py-20 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Fractional CTO for high-velocity founders
        </p>
        <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:text-6xl">
          Senior technical leadership,
          <span className="text-primary">
            {' '}
            exactly when you need it.
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-balance text-base text-foreground-secondary sm:text-lg" style={{ lineHeight: '1.6' }}>
          Advisory, architecture, and execution support for startups that can&apos;t yet
          justify a full-time CTO—but can&apos;t afford to get technology decisions wrong.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-[1px] hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Request a strategy call
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2 text-xs font-medium text-foreground backdrop-blur transition hover:border-primary/30 hover:bg-surface-elevated">
            View typical engagements
          </button>
        </div>
      </motion.div>
    </section>
  );
}

