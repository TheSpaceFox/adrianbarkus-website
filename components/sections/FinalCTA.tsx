'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { BOOK_AUDIT_URL } from '@/lib/constants';

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
      className={`relative min-h-screen-dynamic snap-start flex flex-col justify-center bg-background overflow-hidden ${className ?? ''}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/Cursor-Screenshot.jpeg')`
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 py-20 md:py-32">
        {!showForm ? (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-[#404040] bg-surface/80 backdrop-blur-sm p-12 md:p-16"
          >
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground tracking-tight break-words">
                  The Market Has Moved. Don&apos;t Wait for Your Next Renewal.
                </h2>
                <p className="text-xl md:text-2xl font-normal text-[#A0A0A0] leading-relaxed">
                  Every week you delay is another week of exposure. A free Discovery Call takes 45
                  minutes. The findings could change what you spend on software for the next decade.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6">
                <Button
                  onClick={() => window.open(BOOK_AUDIT_URL, '_blank')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 px-8 py-4 text-base font-medium rounded-full transition-all hover:scale-105 my-8"
                >
                  Book Your Free Software Review
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
                Book a call with me
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
