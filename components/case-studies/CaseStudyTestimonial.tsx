'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Testimonial as TestimonialType } from '@/lib/case-studies/types';

export interface CaseStudyTestimonialProps {
  testimonial: TestimonialType;
  compact?: boolean;
}

export function CaseStudyTestimonial({ testimonial, compact = false }: CaseStudyTestimonialProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`rounded-2xl border border-border bg-surface p-6 ${compact ? '' : 'my-12'}`}
    >
      <p className="text-2xl font-serif text-primary leading-relaxed" aria-hidden>
        &ldquo;
      </p>
      <p className={compact ? 'text-base text-foreground leading-relaxed' : 'text-xl text-foreground leading-relaxed mt-2'}>
        {testimonial.quote}
      </p>
      <footer className="mt-4 flex items-center gap-3">
        {testimonial.avatar ? (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-border">
            <Image
              src={testimonial.avatar}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-lg font-semibold">
            {testimonial.author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-primary">{testimonial.author}</p>
          <p className="text-sm text-foreground-secondary">
            {testimonial.role}
            {testimonial.company && ` · ${testimonial.company}`}
          </p>
        </div>
      </footer>
    </motion.blockquote>
  );
}
