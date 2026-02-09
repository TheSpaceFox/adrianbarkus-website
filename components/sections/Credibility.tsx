import { motion } from 'framer-motion';

export interface CredibilityProps {
  className?: string;
}

export function Credibility({ className }: CredibilityProps) {
  return (
    <section
      id="credibility"
      className={`rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="max-w-3xl">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary">
            CREDIBILITY
          </h2>
          <p className="text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Built and scaled technical teams and products across multiple industries and
            stages.
          </p>
          <p className="mt-3 text-base text-foreground-secondary sm:text-lg" style={{ lineHeight: '1.6' }}>
            From early-stage startups to growth companies, I&apos;ve helped founders
            navigate technical complexity, build scalable systems, and make decisions that
            compound over time.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-tertiary">
              Experience
            </p>
            <p className="mt-2 text-2xl font-semibold text-primary">15+ years</p>
            <p className="mt-1 text-xs text-foreground-secondary">
              Building and leading technical teams
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-tertiary">
              Focus Areas
            </p>
            <p className="mt-2 text-2xl font-semibold text-foreground">SaaS & B2B</p>
            <p className="mt-1 text-xs text-foreground-secondary">
              Product-led growth and enterprise platforms
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-tertiary">
              Approach
            </p>
            <p className="mt-2 text-2xl font-semibold text-foreground">Pragmatic</p>
            <p className="mt-1 text-xs text-foreground-secondary">
              Balance speed, quality, and long-term scalability
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

