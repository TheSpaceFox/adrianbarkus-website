'use client';

import { motion } from 'framer-motion';

interface ScrollingLogosProps {
  items: string[];
  speed?: number;
}

export function ScrollingLogos({ items, speed = 50 }: ScrollingLogosProps) {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-6 md:gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 rounded-lg border border-[#404040] bg-surface-elevated text-base font-medium text-foreground whitespace-nowrap hover:border-primary/50 transition-colors"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
