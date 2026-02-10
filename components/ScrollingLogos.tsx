'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ScrollingLogosProps {
  items?: string[];
  logos?: {
    dark: string;
    light: string;
    alt: string;
  }[];
  speed?: number;
}

export function ScrollingLogos({ items, logos, speed = 50 }: ScrollingLogosProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? (currentTheme === 'dark') : true; // Default to dark during SSR

  // If logos are provided, use them; otherwise use text items
  if (logos && logos.length > 0) {
    const duplicatedLogos = [...logos, ...logos];

    return (
      <div className="relative overflow-hidden w-full py-4">
        <motion.div
          className="flex gap-6 md:gap-8 items-center"
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
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={isDark ? logo.dark : logo.light}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Fallback to text items
  if (!items || items.length === 0) return null;

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
