'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ScrollingLogos } from '@/components/ScrollingLogos';
import { backgroundLogos } from '@/components/sections/Credibility';

const HEADSHOT_SRC =
  'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus-Headshot-400x400.png';

const credentials = [
  '19 Years Enterprise Architecture',
  'Thomson Reuters · Woolworths',
  'TOGAF 9.1 Certified',
  'Top Secret Cleared (Former)',
];

const bio =
  "I've spent 19 years solving the technology problems that quietly drain companies dry. From cutting $3.5M in SaaS costs in 40 days, to architecting the systems that enabled a $155M acquisition — I've seen what broken tech costs, and exactly how to fix it. Now I do it faster than ever, using AI-accelerated development to turn 6-month builds into 4-week sprints.";

export function FounderSection() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? (resolvedTheme === 'dark') : true;
  const stripBg = isDark ? '#373737' : '#FFFFFF';

  return (
    <section className="min-h-screen-dynamic snap-start flex flex-col justify-center bg-[#2D2D2D] overflow-x-hidden">
      <div className="max-w-5xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 py-20 md:py-32">
        <motion.div
          className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Image — left on md+, top on mobile */}
          <div className="flex-shrink-0 w-full md:w-[40%] overflow-hidden rounded-lg">
            <Image
              src={HEADSHOT_SRC}
              width={400}
              height={400}
              alt="Adrian Barkus — Fractional CTO"
              className="rounded-lg object-cover w-full transition-all duration-500"
            />
          </div>

          {/* Content — right on md+, below image on mobile */}
          <div className="flex-1 md:w-[60%]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#C9A962] mb-3">
              A bit about me
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight line-clamp-2 pb-6 leading-normal">
              Adrian Barkus
            </h2>
            <p className="text-lg text-[#A0A0A0] mt-1 mb-6">
              Fractional CTO · Enterprise Architect
            </p>
            <div className="flex flex-wrap gap-2">
              {credentials.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[#C9A962]/30 text-[#C9A962] bg-[#C9A962]/5 text-xs px-3 py-1"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[#A0A0A0] leading-relaxed">{bio}</p>
            <a
              href="https://linkedin.com/in/adrianbarkus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#C9A962] hover:text-[#D4B876] transition-colors text-base font-semibold mt-8 py-2"
            >
              <Linkedin size={22} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full-width Background logo strip — edge-to-edge, background matches logo tiles (#373737 / #FFFFFF) */}
      <div
        className="w-screen relative left-1/2 -translate-x-1/2 py-4"
        style={{ backgroundColor: stripBg }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A962] mb-3 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
          Background
        </p>
        <div className="w-full">
          <ScrollingLogos logos={backgroundLogos} speed={10} direction="left" />
        </div>
      </div>
    </section>
  );
}
