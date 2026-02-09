'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#2D2D2D]/95 backdrop-blur-md border-b border-[#404040]'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Name */}
          <div className="text-lg font-semibold text-foreground">
            Adrian Barkus
          </div>

          {/* Right: CTA Button */}
          <Button
            onClick={() =>
              window.open(
                'https://calendar.app.google/koCBUPrhiwLc4zFv7',
                '_blank'
              )
            }
            className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 px-6 py-2 text-sm font-medium rounded-full transition-all hover:scale-105"
          >
            Book Free Audit
          </Button>
        </div>
      </div>
    </header>
  );
}
