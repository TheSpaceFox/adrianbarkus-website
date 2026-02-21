'use client';

import { motion, useInView } from 'framer-motion';
import type { ComponentType } from 'react';
import { useRef } from 'react';
import { Network } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';
import { TrendingDownIcon } from '@/components/ui/trending-down';
import { BadgeAlertIcon } from '@/components/ui/badge-alert';
import { LockIcon } from '@/components/ui/lock';
import { DollarSignIcon } from '@/components/ui/dollar-sign';
import { WrenchIcon } from '@/components/ui/wrench';

export interface ProblemAgitationProps {
  className?: string;
}

const painPoints = [
  {
    icon: TrendingDownIcon,
    headline: 'Rent Forever',
    copy:
      "Every month you pay. Every year they raise the price. You can't leave because your entire operation is built around their system — and they know it. That's not software. That's a landlord who owns your data."
  },
  {
    icon: BadgeAlertIcon,
    headline: 'Dead Architecture',
    copy:
      "The platforms your team uses every day were built for a world before AI existed. Your team has built workarounds for the workarounds. You're paying enterprise prices to run a business that has outgrown the tool that was supposed to help it grow."
  },
  {
    icon: LockIcon,
    headline: 'Locked In',
    copy:
      "Your data lives in their system, in their format, on their terms. They know switching feels impossible. That's exactly how they want it."
  },
  {
    icon: DollarSignIcon,
    headline: 'The Hidden Tax',
    copy:
      "Your SaaS spend is spread across 12 department budgets, 6 annual renewals, and a handful of expense reports nobody questions. Most businesses have no idea what their total number is until someone finally adds it up. When they do, it's rarely under {currency}80k. Often it's over {currency}150k. For software that covers maybe 20% of what you actually need."
  },
  {
    icon: WrenchIcon,
    headline: 'Franken-Stack',
    copy:
      "One tool feeds into another, into another. Nobody fully understands how it all connects — because it was never designed. It just grew. Your sales team enters data in three places. Finance exports reports manually. IT spends half their time keeping duct tape in place. You're not behind on technology. You're behind on decisions."
  },
  {
    icon: Network,
    headline: 'No One Owns It',
    copy:
      "You have an IT Manager who keeps the lights on. You have department heads who bought their own tools. But nobody is sitting at the table making strategic technology decisions for the business. Every year, the problem gets a little more expensive and a little harder to fix. Until someone finally does something about it."
  }
];

interface AnimatedCardProps {
  icon: ComponentType<{ className?: string; size?: number; 'aria-hidden'?: boolean }>;
  headline: string;
  copy: string;
  index: number;
  isSectionInView: boolean;
}

function AnimatedCard({ icon: Icon, headline, copy, index, isSectionInView }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, margin: '-50px' });

  // Mobile: fade-up only. Desktop: subtle fade-up with slight stagger (no flying from corners on mobile).
  const initialPos = { x: 0, y: 24 };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: initialPos.x, y: initialPos.y, scale: 0.98 }}
      animate={
        isCardInView && isSectionInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x: initialPos.x, y: initialPos.y, scale: 0.98 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full"
    >
      <div className="h-full rounded-2xl bg-surface border border-border p-6 sm:p-8">
        <div className="rounded-lg bg-surface-elevated p-2 w-fit">
          <Icon className="h-5 w-5 text-foreground-secondary" size={20} aria-hidden />
        </div>
        <h3 className="font-semibold text-foreground mt-4 text-lg line-clamp-2 pb-0.5">
          {headline}
        </h3>
        <p className="text-foreground-secondary text-sm mt-2 leading-relaxed">
          {copy}
        </p>
      </div>
    </motion.div>
  );
}

export function ProblemAgitation({ className }: ProblemAgitationProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { currency } = useCurrency();

  return (
    <section
      ref={sectionRef}
      id="problems"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-surface overflow-x-hidden ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-14 sm:py-16 md:py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight max-w-3xl mx-auto text-center break-words line-clamp-2 pb-6 leading-normal"
          >
            The Addiction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="text-lg md:text-xl text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-center mt-6 mb-12"
          >
            Most businesses don&apos;t have a software strategy. They have a software history. A decade of reactive purchases, auto-renewed contracts, and tools approved by whoever needed them at the time.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-sm text-foreground-tertiary text-center max-w-2xl mx-auto mb-8"
          >
            I&apos;ve seen this pattern in every established business I&apos;ve worked with.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <div key={index} className="min-w-0">
                <AnimatedCard
                  icon={point.icon}
                  headline={point.headline}
                  copy={point.copy.replace(/{currency}/g, currency)}
                  index={index}
                  isSectionInView={isSectionInView}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
