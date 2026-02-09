'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export interface CredibilityProps {
  className?: string;
}

const background = [
  'Thomson Reuters - Global enterprise architecture',
  'Woolworths - Supply chain optimization',
  'Soudal - Multi-market ERP strategy',
  'Top Secret Security Clearance (expired)',
  'Salesforce (19 years) | MS Dynamics 365 | SAP | Oracle'
];

const modernStack = [
  'Next.js, TypeScript, PostgreSQL',
  'Supabase, Azure, Vercel',
  'Cursor AI + Claude (10x acceleration)',
  'Built IndiFind.com solo'
];

const trustBadges = [
  '19 Years',
  'Top Secret',
  'AI-Accelerated',
  'Fortune 500'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export function Credibility({ className }: CredibilityProps) {
  return (
    <section
      id="credibility"
      className={`py-12 sm:py-16 lg:py-20 bg-surface ${className ?? ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Section Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-foreground text-center sm:text-4xl lg:text-5xl"
          >
            19 Years Turning Enterprise Chaos Into Profit
          </motion.h2>

          {/* Two-Column Tabs Layout */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="background" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-surface-elevated border-border">
                <TabsTrigger value="background" className="data-[state=active]:bg-surface data-[state=active]:text-foreground">
                  Background
                </TabsTrigger>
                <TabsTrigger value="modern" className="data-[state=active]:bg-surface data-[state=active]:text-foreground">
                  Modern Stack
                </TabsTrigger>
              </TabsList>

              <TabsContent value="background" className="mt-6 space-y-3">
                {background.map((item, index) => (
                  <div key={index} className="text-base text-foreground-secondary" style={{ lineHeight: '1.6' }}>
                    {item}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="modern" className="mt-6 space-y-3">
                {modernStack.map((item, index) => (
                  <div key={index} className="text-base text-foreground-secondary" style={{ lineHeight: '1.6' }}>
                    {item}
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            {trustBadges.map((badge, index) => (
              <Badge
                key={index}
                className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm font-medium"
              >
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
