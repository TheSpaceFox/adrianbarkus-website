'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCurrency } from '@/hooks/useCurrency';

export interface FAQProps {
  className?: string;
}

const faqs = [
  {
    question: 'We already have an IT team. Why would we need you?',
    answer:
      "Your IT team keeps the lights on. That's their job and they're good at it. What they don't have is the strategic mandate to challenge your entire software estate, the enterprise architecture experience to redesign it, or the AI-accelerated development speed to rebuild it in weeks. I work alongside your team — not instead of them."
  },
  {
    question: 'How do you justify the cost of the Diagnostic Review?',
    answer:
      'The Diagnostic Review costs {currency}6,750. Every client so far has identified savings that exceed that within the first year — typically by a factor of 10 or more. If I can\'t find meaningful savings in your software estate, I\'ll tell you in the first session and we stop there. You keep the findings. No further obligation.'
  },
  {
    question: 'What does the AI Process Sprint actually look like?',
    answer:
      "We start with a one-week process audit — I map the workflows where your team is spending the most time on manual work. The output is a ranked list of automation opportunities with projected time savings attached. You approve the target, I build the solution in 2–3 weeks using AI-accelerated development, and we deploy it into your operation. Pricing is 15% of first-year savings, with a minimum engagement of {currency}5,000. If I can't identify a process worth automating, we stop at the audit. No further obligation."
  },
  {
    question: 'How does the Fractional CTO engagement work?',
    answer:
      "You get senior technology leadership on a day-rate — {currency}6,250/day, minimum 12 days per year. I attend your leadership meetings, own the technology roadmap, make the architecture and vendor decisions, and where it makes sense, build directly rather than outsourcing. No account manager, no handoffs. The same person from the first call to the last deliverable. Engagements typically run quarterly with a standing set of committed days, adjusted as needed. The starting point is a Diagnostic Review so we both know exactly what we're solving for."
  },
  {
    question: "What happens to the system after you've built it? Are we dependent on you?",
    answer:
      "No — and that's by design. Every system I build is fully documented, hosted in your own repository, and built on widely used modern technology. Any competent developer can maintain or extend it. I can also help you hire someone to take it over internally. My goal is to make you independent, not reliant on another vendor — including me."
  },
  {
    question: 'How is this different from hiring a development agency?',
    answer:
      "Three ways. Speed — agencies take 3–6 months, I deliver in 4–6 weeks. Cost — agencies quote {currency}60k–{currency}100k for what I deliver at a fraction of that. Accountability — with an agency you get account managers and handoffs. With me you get the same senior architect from the first call to the final handover. No middlemen, no surprises."
  }
];

export function FAQ({ className }: FAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { currency } = useCurrency();

  const faqsWithCurrency = faqs.map(faq => ({
    ...faq,
    answer: faq.answer.replace(/{currency}/g, currency)
  }));

  return (
    <section
      id="faq"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface overflow-x-hidden ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight break-words max-w-3xl mx-auto line-clamp-2 pb-6 leading-normal">
            The Questions I Get Asked Most
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqsWithCurrency.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
                className="group rounded-lg border border-border bg-surface-elevated p-8 hover:bg-surface transition-colors"
              >
                <summary className="cursor-pointer text-lg font-semibold text-foreground hover:text-primary transition-colors list-none">
                  <span className="flex items-center justify-between gap-3">
                    <span className="min-w-0 break-words text-left">{faq.question}</span>
                    <span className="text-foreground-secondary group-open:hidden">+</span>
                    <span className="text-foreground-secondary hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-6 text-base leading-relaxed text-foreground-secondary">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
