import { motion } from 'framer-motion';

export interface TransformationProps {
  className?: string;
}

export function Transformation({ className }: TransformationProps) {
  return (
    <section
      id="transformation"
      className={`rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid gap-8 lg:grid-cols-2"
      >
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground-tertiary">
            FROM REACTIVE TO INTENTIONAL
          </h2>
          <p className="mb-4 text-balance text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Move from &quot;shipping features&quot; to building a technology engine that
            compounds.
          </p>
          <p className="max-w-xl text-base text-foreground-secondary sm:text-lg" style={{ lineHeight: '1.6' }}>
            With strategic technical leadership, you move from reactive feature delivery
            to building systems that scale. Your team gains clarity, velocity improves, and
            technical decisions compound in your favor rather than creating future drag.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface-elevated p-4">
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-tertiary">
              PRODUCT
            </p>
            <p className="text-foreground-secondary" style={{ lineHeight: '1.6' }}>Roadmap, scope, and technical constraints aligned from day one.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-elevated p-4">
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-tertiary">
              ENGINEERING
            </p>
            <p className="text-foreground-secondary" style={{ lineHeight: '1.6' }}>Teams executing against clear standards, guardrails, and interfaces.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

