'use client';

import Header from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { ProblemAgitation } from '@/components/sections/ProblemAgitation';
import { WhyNow } from '@/components/sections/WhyNow';
import { Transformation } from '@/components/sections/Transformation';
import { Credibility } from '@/components/sections/Credibility';
import { Offers } from '@/components/sections/Offers';
import { SocialProof } from '@/components/sections/SocialProof';
import { FounderSection } from '@/components/sections/FounderSection';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen-dynamic overflow-y-scroll overflow-x-hidden snap-y snap-proximity bg-background">
        <Hero />
        <ProblemAgitation />
        <WhyNow />
        <Transformation />
        <Credibility />
        <Offers />
        <SocialProof />
        <FounderSection />
        <FAQ />
        <FinalCTA />
        {/* Footer as its own snapping section */}
        <section className="min-h-screen-dynamic snap-start flex flex-col justify-end bg-surface">
          <Footer />
        </section>
        <ThemeSwitcher />
      </main>
    </>
  );
}

