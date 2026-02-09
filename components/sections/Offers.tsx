import { motion } from 'framer-motion';

export interface OffersProps {
  className?: string;
}

export function Offers({ className }: OffersProps) {
  return (
    <section
      id="offers"
      className={`rounded-2xl border border-border/80 bg-slate-950/60 px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="max-w-2xl">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            ENGAGEMENT MODELS
          </h2>
          <p className="text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
            Placeholder for your core Fractional CTO offers and how you like to work.
          </p>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            We&apos;ll convert this into clearly named offers (e.g. advisory retainer,
            build/launch, technical due diligence) once we have your productized
            services defined.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
            <p className="text-xs font-semibold text-slate-200">Offer A</p>
            <p className="mt-2 text-xs text-slate-400">
              Short description of who this is for and the main outcome.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
            <p className="text-xs font-semibold text-slate-200">Offer B</p>
            <p className="mt-2 text-xs text-slate-400">
              Another structure—e.g. retained advisory or launch-focused engagement.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
            <p className="text-xs font-semibold text-slate-200">Offer C</p>
            <p className="mt-2 text-xs text-slate-400">
              Optional: due diligence or technical audit for investors and boards.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

