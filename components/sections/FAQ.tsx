import { motion } from 'framer-motion';

export interface FAQProps {
  className?: string;
}

export function FAQ({ className }: FAQProps) {
  return (
    <section
      id="faq"
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
          QUESTIONS FOUNDERS ASK
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          This placeholder FAQ section will be replaced with the real questions you get
          about scope, cadence, pricing, and how you work with in-house teams.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          <li>• How do engagements typically start?</li>
          <li>• How do you work with existing engineering leaders?</li>
          <li>• What does communication cadence look like?</li>
        </ul>
      </motion.div>
    </section>
  );
}

