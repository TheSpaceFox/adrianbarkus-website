'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          {/* Logo + Name */}
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
          <Link
            href="/ask"
            className="text-sm font-medium text-foreground-secondary hover:text-primary border border-border hover:border-primary/50 rounded-full px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
          >
            Ask AI
          </Link>
        </div>
      </div>
    </header>
  );
}
