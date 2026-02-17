'use client';

import Header from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { ProblemAgitation } from '@/components/sections/ProblemAgitation';
import { Transformation } from '@/components/sections/Transformation';
import { Credibility } from '@/components/sections/Credibility';
import { Offers } from '@/components/sections/Offers';
import { Urgency } from '@/components/sections/Urgency';
import { SocialProof } from '@/components/sections/SocialProof';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen-dynamic overflow-y-scroll snap-y snap-proximity bg-background">
        <Hero />
        <ProblemAgitation />
        <Transformation />
        <Credibility />
        <Offers />
        <Urgency />
        <SocialProof />
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

