'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, AlertTriangle, Lock, Receipt, GitMerge, LucideIcon } from 'lucide-react';

export interface ProblemAgitationProps {
  className?: string;
}

const painPoints = [
  {
    icon: TrendingDown,
    headline: 'Rent Forever',
    copy: "Salesforce. HubSpot. Dynamics. You've paid £180k over 3 years. You own nothing. Cancel tomorrow — it's all gone."
  },
  {
    icon: AlertTriangle,
    headline: 'Dead Architecture',
    copy: "ChatGPT can query your entire database in plain English. You're still paying £2k/month for a dashboard to do what a prompt does in seconds."
  },
  {
    icon: Lock,
    headline: 'Locked In',
    copy: "Your data is in their schema, their format, their servers. They know you can't leave. So the price goes up — every single year."
  },
  {
    icon: Receipt,
    headline: 'The Hidden Tax',
    copy: "10 tools at £300/month each. That's £36k/year — buried across 6 departments, 12 credit cards, and nobody's budget."
  },
  {
    icon: GitMerge,
    headline: 'Franken-Stack',
    copy: "Zapier connects HubSpot to Slack to Notion to Airtable. One API change and the whole thing collapses. You're not running a business — you're babysitting integrations."
  }
];

interface AnimatedCardProps {
  icon: LucideIcon;
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
          <Icon className="h-5 w-5 text-foreground-secondary" aria-hidden />
        </div>
        <h3 className="font-semibold text-foreground mt-4 text-lg">
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
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight max-w-3xl mx-auto text-center mt-6 mb-12"
          >
            You're renting software you can't afford to lose and can't afford to keep.
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <AnimatedCard
                  icon={point.icon}
                  headline={point.headline}
                  copy={point.copy}
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
