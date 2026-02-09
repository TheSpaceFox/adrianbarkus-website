'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { ProblemAgitation } from '@/components/sections/ProblemAgitation';
import { Transformation } from '@/components/sections/Transformation';
import { Credibility } from '@/components/sections/Credibility';
import { Offers } from '@/components/sections/Offers';
import { Urgency } from '@/components/sections/Urgency';
import { RiskReversal } from '@/components/sections/RiskReversal';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { ThemeSelector } from '@/components/ThemeSelector';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export default function MonochromaticPrecisionPage() {
  return (
    <motion.main
      className="container space-y-24 pb-24 pt-12 sm:space-y-28 sm:pt-16 lg:space-y-32 lg:pt-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <Hero />
      <ProblemAgitation />
      <Transformation />
      <Credibility />
      <Offers />
      <Urgency />
      <RiskReversal />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ThemeSelector />
    </motion.main>
  );
}
