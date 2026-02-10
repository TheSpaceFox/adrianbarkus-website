'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps) {
  const [showForm, setShowForm] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="cta"
      className={`py-20 md:py-32 bg-background ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {!showForm ? (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-[#404040] bg-surface p-12 md:p-16"
          >
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  Ready to Start?
                </h2>
                <p className="text-xl md:text-2xl font-normal text-[#A0A0A0] leading-relaxed">
                  Book a free audit. Identify £100k+ in savings.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6">
                <Button
                  onClick={() => window.open('https://calendar.app.google/koCBUPrhiwLc4zFv7', '_blank')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 px-8 py-4 text-base font-medium rounded-full transition-all hover:scale-105 my-8"
                >
                  Book Free Audit
                </Button>
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
