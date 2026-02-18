'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Clock, AlertTriangle, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface ProblemAgitationProps {
  className?: string;
}

const painPoints = [
  {
    icon: TrendingDown,
    headline: 'Rent Forever',
    copy: 'You pay monthly. They own your data.'
  },
  {
    icon: AlertTriangle,
    headline: 'Dead Architecture',
    copy: 'AI killed dashboards. You still pay for them.'
  },
  {
    icon: Clock,
    headline: 'Locked In',
    copy: 'Migrations are impossible. Renewals are mandatory.'
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
      <Card className="h-full border border-border bg-surface-elevated hover:shadow-lg hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-5 md:space-y-6">
          <div className="p-2.5 sm:p-3 rounded-lg bg-foreground/5 border border-border w-fit">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground-secondary" />
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
            {headline}
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
            {copy}
          </p>
        </CardContent>
      </Card>
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
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center tracking-tight"
          >
            The Addiction
          </motion.h2>

          {/* Mobile: vertical stack. Desktop: 3-column grid. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {painPoints.map((point, index) => (
              <AnimatedCard
                key={index}
                icon={point.icon}
                headline={point.headline}
                copy={point.copy}
                index={index}
                isSectionInView={isSectionInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
