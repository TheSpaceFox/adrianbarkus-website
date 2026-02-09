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
          Placeholder for how you remove risk for founders—trial projects, clear
          milestones, and transparent communication.
        </p>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          We&apos;ll replace this with your specific guarantees, engagement checkpoints,
          and ways you like to start small before expanding scope.
        </p>
      </motion.div>
    </section>
  );
}

