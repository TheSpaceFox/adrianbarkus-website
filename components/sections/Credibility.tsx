import { motion } from 'framer-motion';

export interface CredibilityProps {
  className?: string;
}

export function Credibility({ className }: CredibilityProps) {
  return (
    <section
      id="credibility"
      className={`rounded-2xl border border-border/80 bg-slate-950/60 px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="max-w-3xl">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            CREDIBILITY
          </h2>
          <p className="text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
            This is where we showcase your track record, markets, and technical depth.
          </p>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            For now this section is a placeholder. We&apos;ll replace it with concrete
            logos, case studies, and proof points that match your background.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
            <p className="text-xs font-medium text-slate-400">Sample metric</p>
            <p className="mt-1 text-lg font-semibold text-slate-50">+X% delivery</p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
            <p className="text-xs font-medium text-slate-400">Sample metric</p>
            <p className="mt-1 text-lg font-semibold text-slate-50">Y exits</p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
            <p className="text-xs font-medium text-slate-400">Sample metric</p>
            <p className="mt-1 text-lg font-semibold text-slate-50">Z markets</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

