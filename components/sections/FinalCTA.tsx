import { motion } from 'framer-motion';

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps) {
  return (
    <section
      id="cta"
      className={`rounded-2xl border border-sky-500/40 bg-gradient-to-br from-slate-950 via-slate-950 to-sky-900/40 px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-xl">
          <h2 className="mb-2 text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
            Ready to shape the next phase of your product?
          </h2>
          <p className="text-sm text-slate-200 sm:text-base">
            This call-to-action block will be wired to your scheduling link or contact
            form once we define your intake process.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-blue-500/35 transition hover:-translate-y-[1px] hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Request a strategy call
          </button>
          <p className="text-xs text-slate-300">
            No obligation. We&apos;ll simply assess fit and outline options.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

