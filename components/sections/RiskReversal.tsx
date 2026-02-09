import { motion } from 'framer-motion';

export interface RiskReversalProps {
  className?: string;
}

export function RiskReversal({ className }: RiskReversalProps) {
  return (
    <section
      id="risk"
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
          DE-RISKING THE ENGAGEMENT
        </h2>
        <p className="max-w-2xl text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
          Start with a focused project. Expand only if the value is clear.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="mb-2 text-xs font-semibold text-emerald-300">
              Clear Milestones
            </p>
            <p className="text-xs text-slate-300">
              Defined deliverables and checkpoints so you always know what you&apos;re
              getting and when.
            </p>
          </div>
          <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-4">
            <p className="mb-2 text-xs font-semibold text-sky-300">
              Flexible Scope
            </p>
            <p className="text-xs text-slate-300">
              Start with a focused engagement. We&apos;ll expand only if the value is
              clear and you want to continue.
            </p>
          </div>
          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
            <p className="mb-2 text-xs font-semibold text-cyan-300">
              Transparent Process
            </p>
            <p className="text-xs text-slate-300">
              Regular updates, documented decisions, and knowledge transfer so you&apos;re
              never in the dark.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

