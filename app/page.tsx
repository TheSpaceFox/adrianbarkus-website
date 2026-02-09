'use client';

import { Hero } from '@/components/sections/Hero';
import { ProblemAgitation } from '@/components/sections/ProblemAgitation';
import { Transformation } from '@/components/sections/Transformation';
import { Credibility } from '@/components/sections/Credibility';
import { Offers } from '@/components/sections/Offers';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProblemAgitation />
      <Transformation />
      <Credibility />
      <Offers />
      <ThemeSwitcher />
    </main>
  );
}

