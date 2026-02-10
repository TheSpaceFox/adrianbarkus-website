'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface OffersProps {
  className?: string;
}

const saasDetoxItems = [
  'Complete SaaS audit',
  'Build custom replacement',
  'Team training + migration',
  'Go-live + documentation'
];

const fractionalCTOItems = [
  '8 hours/week strategy',
  '32-40 hours/month building',
  'Weekly roadmap',
  'Direct access'
];

export function Offers({ className }: OffersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="offers"
      className={`py-20 md:py-32 bg-background ${className ?? ''}`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight">
            Two Options
          </h2>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1 - SaaS Detox Sprint (Primary with brass border) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <Card className="h-full border-2 border-primary bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    SaaS Detox Sprint
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 p-10 md:p-12">
                  {/* Checklist */}
                  <ul className="space-y-4">
                    {saasDetoxItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base text-[#A0A0A0] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Investment & Timeline */}
                  <div className="space-y-3 pt-6 border-t border-[#404040]">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#A0A0A0]">Investment:</span>
                      <span className="text-base font-semibold text-foreground">£18k-£45k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#A0A0A0]">Timeline:</span>
                      <span className="text-base font-semibold text-foreground">2-4 weeks</span>
                    </div>
                  </div>

                  {/* ROI Guarantee */}
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong className="text-primary">ROI Guarantee:</strong> If I can't identify £100k+ in savings, you don't pay.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    onClick={() => window.open('https://calendar.app.google/koCBUPrhiwLc4zFv7', '_blank')}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all hover:scale-105 px-8 py-4"
                  >
                    Book Audit Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 - Fractional CTO + Rapid Build */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <Card className="h-full border border-[#404040] bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Fractional CTO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 p-10 md:p-12">
                  {/* Checklist */}
                  <ul className="space-y-4">
                    {fractionalCTOItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#A0A0A0] mt-0.5 flex-shrink-0" />
                        <span className="text-base text-[#A0A0A0] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Investment & Terms */}
                  <div className="space-y-3 pt-6 border-t border-[#404040]">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#A0A0A0]">Investment:</span>
                      <span className="text-base font-semibold text-foreground">£17k-£28k/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#A0A0A0]">Minimum:</span>
                      <span className="text-base font-semibold text-foreground">3 months</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('https://calendar.app.google/koCBUPrhiwLc4zFv7', '_blank')}
                    className="w-full border border-[#404040] bg-surface-elevated hover:bg-surface text-foreground hover:scale-105 transition-transform duration-200 px-8 py-4"
                  >
                    Book Strategy Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
