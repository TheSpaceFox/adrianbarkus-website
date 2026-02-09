'use client';

import { motion } from 'framer-motion';

export interface FAQProps {
  className?: string;
}

const faqs = [
  {
    question: 'How do I know if I&apos;m wasting money on SaaS?',
    answer: 'If you&apos;re paying for Salesforce, HubSpot, or Dynamics and using less than 30% of features, you&apos;re likely wasting £50k-£100k per year. The free 30-minute audit will identify exact savings opportunities.'
  },
  {
    question: 'Can you really build a custom system in 4 weeks?',
    answer: 'Yes. Using AI-accelerated development (Cursor AI + Claude), I build full-stack systems solo in 2-4 weeks. No contractors. No delays. No overhead. I&apos;ve done it for multiple clients—see the £420k save case study.'
  },
  {
    question: 'What if the custom system doesn&apos;t work?',
    answer: 'ROI Guarantee: If I can&apos;t identify £100k+ in 3-year savings during the audit, you don&apos;t pay. Plus, you get 30 days of post-launch support included. I&apos;m not going anywhere.'
  },
  {
    question: 'How is this different from hiring an agency?',
    answer: 'Agencies charge £60k+ and take 6 months. I charge £18k-£45k and deliver in 2-4 weeks. Solo execution means no project managers, no overhead, no delays. Just speed and results.'
  },
  {
    question: 'What if I need ongoing support after the build?',
    answer: 'That&apos;s what the Fractional CTO + Rapid Build offer is for. You get 8 hours/week strategy + 32-40 hours/month building. Perfect for companies that need ongoing tech leadership without the full-time CTO cost.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export function FAQ({ className }: FAQProps) {
  return (
    <section
      id="faq"
      className={`py-12 sm:py-16 lg:py-20 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Section Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl"
          >
            Questions About SaaS Replacement
          </motion.h2>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                variants={itemVariants}
                className="group rounded-lg border border-border bg-surface-elevated p-5 hover:bg-surface transition-colors"
              >
                <summary className="cursor-pointer text-base font-semibold text-foreground hover:text-primary transition-colors list-none">
                  <span className="flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="text-foreground-tertiary group-open:hidden">+</span>
                    <span className="text-foreground-tertiary hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-foreground-secondary" style={{ lineHeight: '1.6' }}>
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
