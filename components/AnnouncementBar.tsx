'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnnouncementBarProps {
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
}

export function AnnouncementBar({ scrollContainerRef }: AnnouncementBarProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const el = scrollContainerRef?.current ?? (typeof window !== 'undefined' ? window : null);
    if (!el) return;

    const handleScroll = () => {
      const scrollTop =
        el instanceof Window ? el.scrollY : (el as HTMLElement).scrollTop ?? 0;
      const next = Math.max(0, 1 - scrollTop / 200);
      setOpacity(next);
    };

    handleScroll();

    const target: any = el;
    target.addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
      className="fixed top-0 left-0 right-0 z-[60] bg-[#373737] border-b border-[#404040]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 text-center text-white text-sm sm:text-base font-medium">
        The average established business wastes £80k–£150k a year on software nobody questioned. I help you find it, cut it, and replace it. In weeks.
      </div>
    </motion.div>
  );
}

