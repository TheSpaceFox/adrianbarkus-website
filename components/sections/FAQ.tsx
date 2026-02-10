'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface FAQProps {
  className?: string;
}

const faqs = [
  {
    question: 'What is a fractional CTO?',
    answer: 'A fractional CTO provides part-time tech leadership—strategy, execution, and team mentoring without full-time salary.'
  },
  {
    question: 'Am I wasting money on SaaS?',
    answer: 'If you use less than 30% of features, you likely waste £50k-£100k per year.'
  },
  {
    question: 'Can you build in 4 weeks?',
    answer: 'Yes. AI-accelerated development means full-stack systems in 2-4 weeks.'
  },
  {
    question: 'What if it doesn\'t work?',
    answer: 'ROI Guarantee: If I can\'t identify £100k+ in savings, you don\'t pay.'
  },
  {
    question: 'How is this different?',
    answer: 'Agencies charge £60k and take 6 months. I charge £18k-£45k and deliver in weeks.'
  },
  {
    question: 'What about ongoing support?',
    answer: 'Fractional CTO offer includes 8 hours/week strategy plus 32-40 hours/month building.'
  }
];

export function FAQ({ className }: FAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      className={`py-20 md:py-32 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight">
            Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
                className="group rounded-lg border border-[#404040] bg-surface-elevated p-8 hover:bg-surface transition-colors"
              >
                <summary className="cursor-pointer text-lg font-semibold text-foreground hover:text-primary transition-colors list-none">
                  <span className="flex items-center justify-between">
                    <span>{faq.question}</span>
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
