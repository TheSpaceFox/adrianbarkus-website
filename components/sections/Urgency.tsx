import { motion } from 'framer-motion';

export interface UrgencyProps {
  className?: string;
}

export function Urgency({ className }: UrgencyProps) {
  return (
    <section
      id="urgency"
      className={`rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-4"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary">
          WHY THIS MATTERS NOW
        </h2>
        <p className="max-w-2xl text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
          Every quarter without strategic technical leadership compounds the cost of
          future decisions.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface-elevated p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
              Missed Windows
            </p>
            <p className="text-sm text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Market opportunities close while you&apos;re still debating technical
              approaches. Competitors move faster with clearer technical strategy.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface-elevated p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-tertiary">
              Compounding Debt
            </p>
            <p className="text-sm text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Each feature built without architectural guidance adds to technical debt
              that slows future development and increases maintenance costs.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

