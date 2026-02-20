'use client';

import { useRef } from 'react';
import Header from '@/components/Header';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Hero } from '@/components/sections/Hero';
import { ProblemAgitation } from '@/components/sections/ProblemAgitation';
import { WhoThisIsFor } from '@/components/sections/WhoThisIsFor';
import { WhyNow } from '@/components/sections/WhyNow';
import { Transformation } from '@/components/sections/Transformation';
import { Credibility } from '@/components/sections/Credibility';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Offers } from '@/components/sections/Offers';
import { WhoThisIsNotFor } from '@/components/sections/WhoThisIsNotFor';
import { SocialProof } from '@/components/sections/SocialProof';
import { FounderSection } from '@/components/sections/FounderSection';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <AnnouncementBar scrollContainerRef={mainRef} />
      <Header />
      <main
        ref={mainRef}
        className="h-screen-dynamic overflow-y-scroll overflow-x-hidden snap-y snap-proximity bg-background"
      >
        <Hero />
        <ProblemAgitation />
        <WhoThisIsFor />
        <WhyNow />
        <Transformation />
        <Credibility />
        <CaseStudies />
        <Offers />
        <WhoThisIsNotFor />
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

