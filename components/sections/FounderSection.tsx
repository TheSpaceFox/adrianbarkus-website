'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const HEADSHOT_SRC =
  'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus-Headshot-400x400.png';

const credentials = [
  '19 Years Enterprise Architecture',
  'Thomson Reuters · Woolworths',
  'TOGAF 9.1 Certified',
  'Top Secret Cleared (Former)',
];

const bio =
  "I've spent 19 years solving the technology problems that quietly drain companies dry. From cutting $3.5M in SaaS costs in 40 days, to architecting the systems that enabled a $55M acquisition — I've seen what broken tech costs, and exactly how to fix it. Now I do it faster than ever, using AI-accelerated development to turn 6-month builds into 4-week sprints.";

export function FounderSection() {
  return (
    <section className="bg-[#2D2D2D] py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
              className="rounded-lg object-cover w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Content — right on md+, below image on mobile */}
          <div className="flex-1 md:w-[60%]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#C9A962] mb-3">
              The Person Behind The Work
            </p>
            <h2 className="text-4xl font-bold text-[#ECECEC] tracking-tight">
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
              className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#D4B876] transition-colors text-sm mt-6"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
