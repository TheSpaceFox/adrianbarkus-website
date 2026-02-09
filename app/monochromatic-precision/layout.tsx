import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../themes/monochromatic-precision.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Monochromatic Precision Theme | Fractional CTO | Adrian Barkus',
  description:
    'Minimalist & Timeless color scheme - Pure contrast theme for Fractional CTO consulting.'
};

export default function MonochromaticPrecisionLayout({
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
