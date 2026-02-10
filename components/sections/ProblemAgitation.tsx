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
    headline: 'Wasted Spend',
    copy: 'You pay for 100% of features. Use 20%.'
  },
  {
    icon: Clock,
    headline: 'Slow Delivery',
    copy: 'Agencies want 6 months. Needs change faster.'
  },
  {
    icon: AlertTriangle,
    headline: 'Hiring Delay',
    copy: 'CTO search takes 4-6 months. Opportunities slip away.'
  }
];

interface AnimatedCardProps {
  icon: LucideIcon;
  headline: string;
  copy: string;
  index: number;
}

function AnimatedCard({ icon: Icon, headline, copy, index }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: false, margin: '-100px' });

  // Clock positions: 2:00 (bottom-right), 10:00 (top-left), 6:00 (bottom)
  const getInitialPosition = (idx: number) => {
    switch (idx) {
      case 0: // 2:00 - bottom-right
        return { x: 100, y: 100 };
      case 1: // 10:00 - top-left
        return { x: -100, y: -100 };
      case 2: // 6:00 - bottom
        return { x: 0, y: 100 };
      default:
        return { x: 0, y: 100 };
    }
  };

  const initialPos = getInitialPosition(index);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: initialPos.x, y: initialPos.y, scale: 0.9 }}
      animate={isCardInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: initialPos.x, y: initialPos.y, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth swoop
      }}
      className="flex-shrink-0 w-[85vw] md:w-auto snap-center"
    >
      <Card className="h-full border border-[#404040] bg-surface-elevated hover:shadow-lg hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-10 md:p-12 space-y-6">
          {/* Icon */}
          <div className="p-3 rounded-lg bg-foreground/5 border border-[#404040] w-fit">
            <Icon className="h-6 w-6 text-foreground-secondary" />
          </div>

          {/* Headline */}
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            {headline}
          </h3>

          {/* Copy */}
          <p className="text-base text-[#A0A0A0] leading-relaxed">
            {copy}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProblemAgitation({ className }: ProblemAgitationProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="problems"
      className={`py-20 md:py-32 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight"
          >
            The Real Cost
          </motion.h2>

          {/* Horizontal Scrolling Cards Container */}
          <div className="relative">
            {/* Scrollable Container */}
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-8 md:-mx-12 px-8 md:px-12">
              <div className="flex gap-8 md:gap-12 min-w-max md:min-w-0 md:grid md:grid-cols-3">
                {painPoints.map((point, index) => (
                  <AnimatedCard
                    key={index}
                    icon={point.icon}
                    headline={point.headline}
                    copy={point.copy}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Scroll Indicator (Mobile only) */}
            <div className="md:hidden flex justify-center gap-2 mt-6">
              {painPoints.map((_, index) => (
                <div
                  key={index}
                  className="h-1 w-8 rounded-full bg-[#404040]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
