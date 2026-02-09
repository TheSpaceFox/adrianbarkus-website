import { motion } from 'framer-motion';

export interface RiskReversalProps {
  className?: string;
}

export function RiskReversal({ className }: RiskReversalProps) {
  return (
    <section
      id="risk"
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
          DE-RISKING THE ENGAGEMENT
        </h2>
        <p className="max-w-2xl text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
          Start with a focused project. Expand only if the value is clear.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface-elevated p-4">
            <p className="mb-2 text-xs font-semibold text-foreground">
              Clear Milestones
            </p>
            <p className="text-xs text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Defined deliverables and checkpoints so you always know what you&apos;re
              getting and when.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface-elevated p-4">
            <p className="mb-2 text-xs font-semibold text-foreground">
              Flexible Scope
            </p>
            <p className="text-xs text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Start with a focused engagement. We&apos;ll expand only if the value is
              clear and you want to continue.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface-elevated p-4">
            <p className="mb-2 text-xs font-semibold text-foreground">
              Transparent Process
            </p>
            <p className="text-xs text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Regular updates, documented decisions, and knowledge transfer so you&apos;re
              never in the dark.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

