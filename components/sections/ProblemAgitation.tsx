'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  sectionRef: React.RefObject<HTMLElement>;
}

function AnimatedCard({ icon: Icon, headline, copy, index, sectionRef }: AnimatedCardProps) {
  const cardRef = useRef(null);
  
  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Alternating directions: even indices from left (-100%), odd from right (100%)
  const xOffset = index % 2 === 0 ? -100 : 100;
  
  // Map scroll progress to horizontal position
  const x = useTransform(scrollYProgress, [0, 1], [`${xOffset}%`, '0%']);
  
  // Opacity: fade in as cards approach center
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 1, 1]);
  
  // Scale: start smaller, reach full size when centered
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity, scale }}
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
                    sectionRef={sectionRef}
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
