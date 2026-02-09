'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="cta"
      className={`py-12 sm:py-16 lg:py-20 bg-background ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  Ready to Cut Your SaaS Bill by 70%?
                </h2>
                <p className="text-lg text-foreground-secondary sm:text-xl" style={{ lineHeight: '1.6' }}>
                  Book a free 30-minute SaaS audit. I&apos;ll identify £100k+ in savings opportunities. If I can&apos;t, you don&apos;t pay. Zero risk.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={() => setShowForm(true)}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 px-8 py-6 text-base font-medium rounded-full transition-all hover:-translate-y-[2px]"
                >
                  Book Free SaaS Audit
                </Button>
                <p className="text-sm text-foreground-tertiary text-center sm:text-left">
                  No obligation. 30 minutes. £100k+ savings identified.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-surface p-8 sm:p-12 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Book Your Free SaaS Audit
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowForm(false)}
                className="text-foreground-tertiary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <ContactForm defaultEngagementType="strategy_call" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
