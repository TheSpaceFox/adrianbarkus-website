import { motion } from 'framer-motion';

export interface UrgencyProps {
  className?: string;
}

export function Urgency({ className }: UrgencyProps) {
  return (
    <section
      id="urgency"
      className={`rounded-2xl border border-border/80 bg-slate-950/60 px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-4"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          WHY THIS MATTERS NOW
        </h2>
        <p className="max-w-2xl text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
          Every quarter without strategic technical leadership compounds the cost of
          future decisions.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
              Missed Windows
            </p>
            <p className="text-sm text-slate-300">
              Market opportunities close while you&apos;re still debating technical
              approaches. Competitors move faster with clearer technical strategy.
            </p>
          </div>
          <div className="rounded-lg border border-foreground/20 bg-foreground/5 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
              Compounding Debt
            </p>
            <p className="text-sm text-slate-300">
              Each feature built without architectural guidance adds to technical debt
              that slows future development and increases maintenance costs.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

