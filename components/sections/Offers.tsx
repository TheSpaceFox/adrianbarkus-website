'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export interface OffersProps {
  className?: string;
}

const saasDetoxChecklist = [
  'Week 1: Complete SaaS audit',
  'Week 2: Build custom replacement',
  'Week 3: Team training + migration',
  'Week 4: Go-live + documentation'
];

const saasDetoxDeliverables = [
  'Custom system (Next.js, TypeScript, PostgreSQL)',
  '10-page ROI analysis',
  'Migration roadmap',
  'Technical documentation',
  '30-day post-launch support'
];

const fractionalCTOItems = [
  '8 hours/week strategic sessions',
  '32-40 hours/month building',
  'Weekly roadmap & priorities',
  'Direct Slack/email access',
  'Tech stack modernization',
  'Team mentoring & code reviews'
];

const fractionalCTOIdealFor = [
  'Series A-B startups without CTO',
  '£5M-£50M companies (high SaaS costs)',
  'Acquisition prep (tech cleanup)',
  'Companies needing speed'
];

export function Offers({ className }: OffersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="offers"
      className={`py-12 sm:py-16 lg:py-20 bg-background ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Headline */}
          <h2 className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl">
            Two Ways I Can Help You This Month
          </h2>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 - SaaS Detox Sprint (Primary with brass border) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <Card className="h-full border-2 border-primary bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    SaaS Detox Sprint
                  </CardTitle>
                  <CardDescription className="text-base text-foreground-secondary">
                    Replace your most expensive SaaS platform with custom solution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* What You Get Checklist */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground-tertiary">
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {saasDetoxChecklist.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-base text-foreground-secondary" style={{ lineHeight: '1.6' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground-tertiary">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {saasDetoxDeliverables.map((item, index) => (
                        <li key={index} className="text-base text-foreground-secondary" style={{ lineHeight: '1.6' }}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment & Timeline */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-tertiary">Investment:</span>
                      <span className="text-base font-semibold text-foreground">£18k-£45k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-tertiary">Timeline:</span>
                      <span className="text-base font-semibold text-foreground">2-4 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-tertiary">Pricing:</span>
                      <span className="text-base font-semibold text-foreground">10% of your 3-year savings</span>
                    </div>
                  </div>

                  {/* ROI Guarantee Alert */}
                  <Alert className="bg-primary/10 border-primary/30">
                    <AlertDescription className="text-sm text-foreground">
                      <strong className="text-primary">ROI Guarantee:</strong> If I can't identify £100k+ in 3-year savings, you don't pay.
                    </AlertDescription>
                  </Alert>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    onClick={() => window.open('https://calendar.app.google/koCBUPrhiwLc4zFv7', '_blank')}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all hover:-translate-y-[2px] hover:scale-105"
                  >
                    Book SaaS Audit Call
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
              <Card className="h-full border-border bg-surface hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Fractional CTO + Rapid Build
                  </CardTitle>
                  <CardDescription className="text-base text-foreground-secondary">
                    Strategic tech leadership + hands-on execution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* What You Get */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground-tertiary">
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {fractionalCTOItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-foreground-tertiary mt-0.5 flex-shrink-0" />
                          <span className="text-base text-foreground-secondary" style={{ lineHeight: '1.6' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground-tertiary">
                      Ideal For
                    </h4>
                    <ul className="space-y-2">
                      {fractionalCTOIdealFor.map((item, index) => (
                        <li key={index} className="text-base text-foreground-secondary" style={{ lineHeight: '1.6' }}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment & Terms */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-tertiary">Investment:</span>
                      <span className="text-base font-semibold text-foreground">£17k-£28k/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-tertiary">Minimum:</span>
                      <span className="text-base font-semibold text-foreground">3 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground-tertiary">Cancel:</span>
                      <span className="text-base font-semibold text-foreground">Anytime after 3 months</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('https://calendar.app.google/koCBUPrhiwLc4zFv7', '_blank')}
                    className="w-full border-border bg-surface-elevated hover:bg-surface text-foreground hover:scale-105 transition-transform duration-200"
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
