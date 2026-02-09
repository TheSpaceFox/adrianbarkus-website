import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../themes/tech-electric.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Tech Electric Theme | Fractional CTO | Adrian Barkus',
  description:
    'Professional & Modern color scheme - Electric Blue theme for Fractional CTO consulting.'
};

export default function TechElectricLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
