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
          This section will crystallize the cost of waiting—missed windows, slower
          learning, and compounding technical drag.
        </p>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          We&apos;ll collaborate on sharper, specific urgency language here once we
          define your ideal founder profile and buying triggers.
        </p>
      </motion.div>
    </section>
  );
}

