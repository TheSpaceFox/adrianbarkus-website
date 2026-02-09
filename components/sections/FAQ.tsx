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
        <div className="mt-6 space-y-4">
          <details className="group rounded-lg border border-slate-800/80 bg-slate-950/60 p-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-200 hover:text-slate-50">
              How do engagements typically start?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Most engagements begin with a strategy call to understand your situation,
              challenges, and goals. From there, we define a focused initial project or
              advisory scope. This could be an architecture review, a specific build
              milestone, or a retained advisory relationship—whatever matches your current
              needs.
            </p>
          </details>
          <details className="group rounded-lg border border-slate-800/80 bg-slate-950/60 p-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-200 hover:text-slate-50">
              How do you work with existing engineering leaders?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              I complement, never replace. I work alongside your engineering leads to
              provide strategic guidance, architectural oversight, and technical
              decision-making support. The goal is to elevate your team&apos;s execution,
              not to create dependencies.
            </p>
          </details>
          <details className="group rounded-lg border border-slate-800/80 bg-slate-950/60 p-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-200 hover:text-slate-50">
              What does communication cadence look like?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Typically weekly or bi-weekly syncs depending on engagement type, plus
              async communication as needed. For advisory, expect regular check-ins and
              availability for key decisions. For build projects, daily standups and
              continuous collaboration.
            </p>
          </details>
          <details className="group rounded-lg border border-slate-800/80 bg-slate-950/60 p-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-200 hover:text-slate-50">
              What&apos;s the typical engagement duration?
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              It varies by need. Some projects are 4-8 week sprints for specific
              milestones. Advisory relationships often run 3-6 months with the option to
              extend. We start focused and expand only if it makes sense for both sides.
            </p>
          </details>
        </div>
      </motion.div>
    </section>
  );
}

