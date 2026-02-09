'use client';

import Header from '@/components/Header';
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
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
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
        <ThemeSwitcher />
      </main>
    </>
  );
}

