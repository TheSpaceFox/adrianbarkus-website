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
    question: 'How do you justify the cost of the Software Review?',
    answer:
      'The Software Review costs £6,750. Every client so far has identified savings that exceed that within the first year — typically by a factor of 10 or more. If I can\'t find meaningful savings in your software estate, I\'ll tell you in the first session and we stop there. You keep the findings. No further obligation.'
  },
  {
    question: 'Can you really build a replacement system in 4–6 weeks?',
    answer:
      "Yes — because I'm not building for a portfolio of clients or managing a team of contractors. I build solo, using AI-accelerated development tools that compress what used to take months into weeks. The scope is scoped tightly to what you actually use, not what your current vendor sells you. Smaller scope, faster delivery, lower cost."
  },
  {
    question: "What if we're locked into a long-term contract with our current vendors?",
    answer:
      "That's the most common situation I walk into. We plan around your renewal dates. The Software Review maps every contract expiry, so we sequence the replacements to coincide with natural exit points. You stop paying the moment the contract ends — not a day later than necessary."
  },
  {
    question: "What happens to the system after you've built it? Are we dependent on you?",
    answer:
      "No — and that's by design. Every system I build is fully documented, hosted in your own repository, and built on widely used modern technology. Any competent developer can maintain or extend it. I can also help you hire someone to take it over internally. My goal is to make you independent, not reliant on another vendor — including me."
  },
  {
    question: 'How is this different from hiring a development agency?',
    answer:
      "Three ways. Speed — agencies take 3–6 months, I deliver in 4–6 weeks. Cost — agencies quote £60k–£100k for what I deliver at a fraction of that. Accountability — with an agency you get account managers and handoffs. With me you get the same senior architect from the first call to the final handover. No middlemen, no surprises."
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center tracking-tight break-words max-w-3xl mx-auto line-clamp-2 pb-4">
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
                className="group rounded-lg border border-[#404040] bg-surface-elevated p-8 hover:bg-surface transition-colors"
              >
                <summary className="cursor-pointer text-lg font-semibold text-foreground hover:text-primary transition-colors list-none">
                  <span className="flex items-center justify-between gap-3">
                    <span className="min-w-0 break-words text-left">{faq.question}</span>
                    <span className="text-[#A0A0A0] group-open:hidden">+</span>
                    <span className="text-[#A0A0A0] hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-6 text-base leading-relaxed text-[#A0A0A0]">
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
