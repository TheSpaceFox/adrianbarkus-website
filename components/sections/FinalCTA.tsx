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
      className={`rounded-2xl border border-sky-500/40 bg-gradient-to-br from-slate-950 via-slate-950 to-sky-900/40 px-6 py-10 sm:px-10 lg:px-12 ${className ?? ''}`}
    >
      {!showForm ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="mb-2 text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
              Ready to shape the next phase of your product?
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              Let&apos;s discuss how strategic technical leadership can accelerate your
              roadmap and de-risk critical decisions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-blue-500/35 transition hover:-translate-y-[1px] hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Request a strategy call
            </Button>
            <p className="text-xs text-slate-300">
              No obligation. We&apos;ll simply assess fit and outline options.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Get in touch
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowForm(false)}
              className="text-slate-400 hover:text-slate-50"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ContactForm defaultEngagementType="strategy_call" />
        </motion.div>
      )}
    </section>
  );
}

