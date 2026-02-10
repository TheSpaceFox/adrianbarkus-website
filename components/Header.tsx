'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/SiteImages/AdrianBarkus%20LOGO.png"
              alt="Adrian Barkus"
              width={32}
              height={32}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              unoptimized
            />
            <div className="text-lg font-semibold text-foreground">
              Adrian Barkus
            </div>
          </div>

          {/* Right: CTA Button */}
          <Button
            onClick={() =>
              window.open(
                'https://calendar.app.google/qDskb7kUFgsNWwLh6',
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
