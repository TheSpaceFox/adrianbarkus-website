import { motion } from 'framer-motion';

export interface ProblemAgitationProps {
  className?: string;
}

export function ProblemAgitation({ className }: ProblemAgitationProps) {
  return (
    <section
      id="problems"
      className={`rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="grid gap-8 lg:grid-cols-[1.15fr,1.1fr]"
      >
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary">
            THE REAL RISK
          </h2>
          <p className="mb-4 text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Your product isn&apos;t limited by engineering effort. It&apos;s limited by
            technical decisions made in uncertainty.
          </p>
          <p className="max-w-xl text-base text-foreground-secondary sm:text-lg" style={{ lineHeight: '1.6' }}>
            Without senior technical leadership, teams over-build, under-architect, and
            accumulate debt that quietly taxes every new feature. You feel the drag in
            missed timelines, brittle systems, and an engineering team that&apos;s
            constantly firefighting.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface-elevated p-4">
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-tertiary">
              COMMON PATTERN
            </p>
            <p className="text-sm text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Architecture shaped by immediate feature demands rather than a clear
              product roadmap.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-elevated p-4">
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-tertiary">
              HIDDEN COST
            </p>
            <p className="text-sm text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Every quarter, velocity slows as onboarding, coordination, and debugging get
              more expensive.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

