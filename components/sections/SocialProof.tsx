'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export interface SocialProofProps {
  className?: string;
}

type Review = {
  name: string;
  handleOrRole?: string;
  quote: string;
  avatarUrl?: string;
  verified?: boolean;
};

const allTestimonials: Review[] = [
  { name: 'David Freke', handleOrRole: 'Solution Architect', quote: 'Superb knowledge of Salesforce Architecture—develops strategies all stakeholders understand.', avatarUrl: undefined, verified: false },
  { name: 'Andrew Fragias', handleOrRole: 'Principal Product Manager, Lumary', quote: 'Clear understanding of Salesforce CRM and architecture to implement and enhance business processes.', avatarUrl: undefined, verified: false },
  { name: 'Tony Fitzgibbon', handleOrRole: 'Head of Technology, Woolworths', quote: 'Exemplary platform knowledge with dynamic, thought-provoking approaches. Exactly what large enterprises need early in their Salesforce journey.', avatarUrl: undefined, verified: false },
  { name: 'Jason Keith', handleOrRole: 'Woolworths Head of Technology', quote: 'Highly professional architect—strong in technical and business engagement. Breaks down complexity, builds relationships.', avatarUrl: undefined, verified: false },
  { name: 'Dinny Evans', handleOrRole: 'CFO, New Horizons (recent client)', quote: 'Exceptional professional—expertise in enterprise architecture, Salesforce, PMO leadership. Remarkable ability to simplify complex projects. Transformed our PMO.', avatarUrl: undefined, verified: true },
  { name: 'Tony Harrison', handleOrRole: 'CPTO Digital Transformer (recent client)', quote: 'Calm, structured, highly methodical. Deep technical knowledge and stakeholder collaboration. Bridges gap between business needs and technology solutions.', avatarUrl: undefined, verified: true },
  { name: 'Priyanka Das', handleOrRole: 'Senior Business Analyst (direct report)', quote: 'Standout Enterprise Architect—vision and expertise invaluable for transforming software infrastructure. Meticulous diagrams gave crystal-clear roadmap.', avatarUrl: undefined, verified: false },
  { name: 'Kristoffer Ferrer', handleOrRole: 'Complex Project Management (direct report)', quote: 'Key to our transformation. Architecture diagrams gave clarity and roadmap. Strategic leadership brought executives together around common goal.', avatarUrl: undefined, verified: false },
  { name: 'Mike Dudarenok', handleOrRole: 'Chief Information and Digital Officer', quote: 'Tight-knit team delivered on tight timelines under pressure. Focused on getting right things done right—project shipped, users happy.', avatarUrl: undefined, verified: false },
  { name: 'Walter Nguyen', handleOrRole: 'Integration Solution Engineer (direct report)', quote: 'Incredible leader and mentor—brings positive energy and motivation. Delivered project successfully on time with very positive client feedback.', avatarUrl: undefined, verified: false },
  { name: 'Peter Jeans', handleOrRole: 'Solution Architect', quote: 'In-depth architectural knowledge that bolstered the growing Salesforce practice. Key role developing architecture through the Salesforce guild.', avatarUrl: undefined, verified: false },
  { name: 'Sally Montgomery', handleOrRole: 'Product Manager, Woolworths', quote: 'Instrumental in setup and running the Salesforce CoE during growth stage. People person who built strong relationships.', avatarUrl: undefined, verified: false },
  { name: 'Anil Kumar', handleOrRole: 'CRM, AI, Digital Transformation', quote: 'Instrumental in setting up Salesforce COE at Woolworths. Easy to work with, keeps people informed, great sense of humour.', avatarUrl: undefined, verified: false },
  { name: 'Henri Fanda', handleOrRole: 'Senior Data Analyst (direct report)', quote: 'One of the best project managers—calm, assuring, keeps team on track. Goes extra distance to remove roadblocks.', avatarUrl: undefined, verified: false },
  { name: 'Andrew Zybenko', handleOrRole: 'Fire Safety / Business Operations', quote: 'Determined optimal roadmap for new Salesforce instance in complex corporate IT. Expertise imperative for viable, robust architecture.', avatarUrl: undefined, verified: false },
  { name: 'Yarlini Aravindan', handleOrRole: 'Managing business/applications (direct manager)', quote: 'Exceptional professional—excels at big picture architecture and right tech solutions. Charismatic leadership elevates entire team.', avatarUrl: undefined, verified: false },
  { name: 'Nikesh Lalchandani', handleOrRole: 'Payments / Fintech Author', quote: 'Highly knowledgeable, exceptionally positive. Combines technical depth with collaborative approach—pleasure to work with.', avatarUrl: undefined, verified: false },
  { name: 'Rachel de los Santos', handleOrRole: 'Senior Test Analyst', quote: 'Truly valuable asset—immense energy, positive atmosphere. Vast Salesforce knowledge huge advantage to entire project.', avatarUrl: undefined, verified: false }
];

// Each row gets 6 unique reviews; no overlap so users never see the same review twice
const row1Reviews = allTestimonials.slice(0, 6);   // David Freke → Tony Harrison
const row2Reviews = allTestimonials.slice(6, 12); // Priyanka Das → Andrew Zybenko
const row3Reviews = allTestimonials.slice(12, 18); // Yarlini Aravindan → Rachel de los Santos

const CARD_WIDTH = 320;
const MOBILE_CARD_WIDTH = 280;
const ROW_DURATION = 45;

function ReviewCard({
  name,
  handleOrRole,
  quote,
  avatarUrl,
  width = CARD_WIDTH
}: {
  name: string;
  handleOrRole?: string;
  quote: string;
  avatarUrl?: string;
  width?: number;
}) {
  const initial = name.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2).toUpperCase();

  return (
    <div
      className="flex-shrink-0 rounded-xl border border-border bg-surface-elevated p-5 md:p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
      style={{ width }}
    >
      <div className="mb-3">
        <div className="flex items-center gap-3 mb-2">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={name}
              width={40}
              height={40}
              className="rounded-full shrink-0 object-cover"
            />
          ) : (
            <div
              className="h-10 w-10 shrink-0 rounded-full bg-foreground-tertiary flex items-center justify-center text-surface text-xs font-semibold"
              aria-hidden
            >
              {initial}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-foreground truncate">{name}</p>
            {handleOrRole && (
              <p className="text-xs text-foreground-tertiary truncate">{handleOrRole}</p>
            )}
          </div>
        </div>
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-foreground-tertiary text-foreground-tertiary" />
          ))}
        </div>
      </div>
      <p className="text-sm text-foreground-secondary leading-relaxed flex-1">{quote}</p>
    </div>
  );
}

function CarouselRow({
  reviews,
  direction
}: {
  reviews: Review[];
  direction: 'ltr' | 'rtl';
}) {
  const duplicated = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === 'ltr' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: ROW_DURATION,
            ease: 'linear'
          }
        }}
      >
        {duplicated.map((t, index) => (
          <ReviewCard
            key={`${t.name}-${index}`}
            name={t.name}
            handleOrRole={t.handleOrRole}
            quote={t.quote}
            avatarUrl={t.avatarUrl}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProof({ className }: SocialProofProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="social-proof"
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-background relative overflow-hidden ${className ?? ''}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201, 169, 98, 0.04), transparent 70%)'
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-6xl 2xl:max-w-none mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8 md:space-y-16"
        >
          <div className="text-center min-w-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground tracking-tight break-words">
              Loved by leaders
            </h2>
          </div>

          {/* Rating summary - review style */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">5.0</span>
              <div className="flex gap-0.5" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-foreground-tertiary text-foreground-tertiary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground-tertiary">57 reviews</p>
          </div>

          {/* Mobile: single horizontal scroll row with snap */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 w-max pb-2">
              {row1Reviews.map((t) => (
                <div key={t.name} className="snap-center">
                  <ReviewCard
                    name={t.name}
                    handleOrRole={t.handleOrRole}
                    quote={t.quote}
                    avatarUrl={t.avatarUrl}
                    width={MOBILE_CARD_WIDTH}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 3 rows, each row has 6 unique reviews, no overlap */}
          <div className="hidden md:block space-y-6 md:space-y-8">
            <CarouselRow reviews={row1Reviews} direction="ltr" />
            <CarouselRow reviews={row2Reviews} direction="rtl" />
            <CarouselRow reviews={row3Reviews} direction="ltr" />
          </div>

          <p className="text-center">
            <a
              href="#social-proof"
              className="text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
            >
              Read more from clients
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
