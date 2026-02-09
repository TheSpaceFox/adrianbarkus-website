import { motion } from 'framer-motion';

export interface OffersProps {
  className?: string;
}

export function Offers({ className }: OffersProps) {
  return (
    <section
      id="offers"
      className={`rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="max-w-2xl">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary">
            ENGAGEMENT MODELS
          </h2>
          <p className="text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Flexible engagement models designed for different stages and needs.
          </p>
          <p className="mt-3 text-base text-foreground-secondary sm:text-lg" style={{ lineHeight: '1.6' }}>
            From strategic advisory to hands-on architecture and execution, choose the
            level of engagement that matches your current priorities and growth stage.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="mb-2 text-sm font-semibold text-foreground">Strategic Advisory</p>
            <p className="mt-2 text-xs leading-relaxed text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Retained guidance on architecture, technical strategy, and key decisions.
              Ideal for founders who need a sounding board and strategic oversight.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="mb-2 text-sm font-semibold text-foreground">
              Build & Launch
            </p>
            <p className="mt-2 text-xs leading-relaxed text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Hands-on architecture and execution for critical initiatives. Perfect when
              you need to move fast on a specific product or technical milestone.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="mb-2 text-sm font-semibold text-foreground">
              Technical Audit
            </p>
            <p className="mt-2 text-xs leading-relaxed text-foreground-secondary" style={{ lineHeight: '1.6' }}>
              Due diligence, architecture reviews, and technical assessments for
              investors, boards, or acquisition scenarios.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

