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
  { name: 'David Freke', handleOrRole: 'Solution Architect', quote: 'Superb knowledge of Salesforce Architecture—develops strategies all stakeholders understand.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DavidFreke.jpg', verified: false },
  { name: 'Andrew Fragias', handleOrRole: 'Principal Product Manager, Lumary', quote: 'Clear understanding of Salesforce CRM and architecture to implement and enhance business processes.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AndrewFragias.jpg', verified: false },
  { name: 'Tony Fitzgibbon', handleOrRole: 'Head of Technology, Woolworths', quote: 'Exemplary platform knowledge with dynamic, thought-provoking approaches. Exactly what large enterprises need early in their Salesforce journey.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/TonyFitzgibbon.jpg', verified: false },
  { name: 'Jason Keith', handleOrRole: 'Woolworths Head of Technology', quote: 'Highly professional architect—strong in technical and business engagement. Breaks down complexity, builds relationships.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JasonKeith.jpg', verified: false },
  { name: 'Dinny Evans', handleOrRole: 'CFO, New Horizons (recent client)', quote: 'Exceptional professional—expertise in enterprise architecture, Salesforce, PMO leadership. Remarkable ability to simplify complex projects. Transformed our PMO.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DinnyEvans.jpg', verified: true },
  { name: 'Tony Harrison', handleOrRole: 'CPTO Digital Transformer (recent client)', quote: 'Calm, structured, highly methodical. Deep technical knowledge and stakeholder collaboration. Bridges gap between business needs and technology solutions.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/TonyHarrison.jpg', verified: true },
  { name: 'Priyanka Das', handleOrRole: 'Senior Business Analyst (direct report)', quote: 'Standout Enterprise Architect—vision and expertise invaluable for transforming software infrastructure. Meticulous diagrams gave crystal-clear roadmap.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/PriyankaDas.jpg', verified: false },
  { name: 'Kristoffer Ferrer', handleOrRole: 'Complex Project Management (direct report)', quote: 'Key to our transformation. Architecture diagrams gave clarity and roadmap. Strategic leadership brought executives together around common goal.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/KristofferFerrer.jpg', verified: false },
  { name: 'Mike Dudarenok', handleOrRole: 'Chief Information and Digital Officer', quote: 'Tight-knit team delivered on tight timelines under pressure. Focused on getting right things done right—project shipped, users happy.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MikeDudarenok.jpg', verified: false },
  { name: 'Walter Nguyen', handleOrRole: 'Integration Solution Engineer (direct report)', quote: 'Incredible leader and mentor—brings positive energy and motivation. Delivered project successfully on time with very positive client feedback.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/WalterNguyen.jpg', verified: false },
  { name: 'Peter Jeans', handleOrRole: 'Solution Architect', quote: 'In-depth architectural knowledge that bolstered the growing Salesforce practice. Key role developing architecture through the Salesforce guild.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/PeterJeans.jpg', verified: false },
  { name: 'Sally Montgomery', handleOrRole: 'Product Manager, Woolworths', quote: 'Instrumental in setup and running the Salesforce CoE during growth stage. People person who built strong relationships.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/SallyMontgomery.jpg', verified: false },
  { name: 'Anil Kumar', handleOrRole: 'CRM, AI, Digital Transformation', quote: 'Instrumental in setting up Salesforce COE at Woolworths. Easy to work with, keeps people informed, great sense of humour.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AnilKumar.jpg', verified: false },
  { name: 'Henri Fanda', handleOrRole: 'Senior Data Analyst (direct report)', quote: 'One of the best project managers—calm, assuring, keeps team on track. Goes extra distance to remove roadblocks.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/HenriFanda.jpg', verified: false },
  { name: 'Andrew Zybenko', handleOrRole: 'Fire Safety / Business Operations', quote: 'Determined optimal roadmap for new Salesforce instance in complex corporate IT. Expertise imperative for viable, robust architecture.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AndrewZybenko.jpg', verified: false },
  { name: 'Yarlini Aravindan', handleOrRole: 'Managing business/applications (direct manager)', quote: 'Exceptional professional—excels at big picture architecture and right tech solutions. Charismatic leadership elevates entire team.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/Yarlini.jpg', verified: false },
  { name: 'Nikesh Lalchandani', handleOrRole: 'Payments / Fintech Author', quote: 'Highly knowledgeable, exceptionally positive. Combines technical depth with collaborative approach—pleasure to work with.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/NikeshLalchandani.jpg', verified: false },
  { name: 'Rachel de los Santos', handleOrRole: 'Senior Test Analyst', quote: 'Truly valuable asset—immense energy, positive atmosphere. Vast Salesforce knowledge huge advantage to entire project.', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/RacheldelosSantos.jpg', verified: false },
  // Row 4 & 5: Enterprise Architecture, Salesforce, Client Delivery, SaaS, Project Management (58 new)
  { name: 'Misha Petrov', handleOrRole: 'Senior SAP Project Manager, Woolworths', quote: 'Enterprise Architect who sees beyond the horizon, identifies opportunities and anticipates challenges', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MishaPetrov.jpg', verified: false },
  { name: 'Misha Petrov', handleOrRole: 'Senior SAP Project Manager, Woolworths', quote: 'Always comes up with out-of-the-box ideas and knows how to bring them to life', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MishaPetrov.jpg', verified: false },
  { name: 'Misha Petrov', handleOrRole: 'Senior SAP Project Manager, Woolworths', quote: 'Will add significant value to projects of any complexity', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MishaPetrov.jpg', verified: false },
  { name: 'Abe Diamond', handleOrRole: 'Forward Deployed Engineering Leader', quote: 'Experience and technical skills mixed with energetic but relaxed outlook - great senior addition to any project', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AbeDiamond.jpg', verified: false },
  { name: 'Abe Diamond', handleOrRole: 'Forward Deployed Engineering Leader', quote: 'Confidence and communication allows him to be in a room with any C-level to most junior staff', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AbeDiamond.jpg', verified: false },
  { name: 'Abe Diamond', handleOrRole: 'Forward Deployed Engineering Leader', quote: 'Facilitates conversations that tackle project challenges in an effective manner', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AbeDiamond.jpg', verified: false },
  { name: 'Jeroen Brejaart', handleOrRole: 'Senior Technology Leader, Digital Transformation', quote: 'Very structured, disciplined, delivery oriented and dynamic', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JeroneBerajaart.jpg', verified: false },
  { name: 'Jeroen Brejaart', handleOrRole: 'Senior Technology Leader, Digital Transformation', quote: 'Makes understanding complex processes and situations look easy, then puts hard work into getting it done', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JeroneBerajaart.jpg', verified: false },
  { name: 'Damon Hayhow', handleOrRole: 'Recomposer Creator', quote: 'One of the most innovative thinkers - rare ability to communicate technological business solutions in easy-to-understand manner', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DamonHayhow.jpg', verified: false },
  { name: 'Damon Hayhow', handleOrRole: 'Recomposer Creator', quote: 'Makes technology relevant to solving real business problems', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DamonHayhow.jpg', verified: false },
  { name: 'Ian Carpenter', handleOrRole: 'Founder | Startup Investor | Tech Strategy Advisor', quote: 'Implemented SaaS solutions for organisations wishing to commercialise and productise their IP', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/IanCarpenter.jpg', verified: false },
  { name: 'Ian Carpenter', handleOrRole: 'Founder | Startup Investor | Tech Strategy Advisor', quote: 'Practical, direct and very experienced - results speak for themselves', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/IanCarpenter.jpg', verified: false },
  { name: 'Steve Harris', handleOrRole: undefined, quote: 'Cutting edge programmer and innovative thinker with a broad portfolio of solutions covering extremely wide range of business scenarios', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/SteveHarris.jpg', verified: false },
  { name: 'Janina Harper', handleOrRole: 'Partner, Technology Consulting, KPMG Australia', quote: 'Brings great energy, amazing technical leadership and never-say-no attitude working as Salesforce Architect', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JaninaHarper.jpg', verified: false },
  { name: 'Janina Harper', handleOrRole: 'Partner, Technology Consulting, KPMG Australia', quote: 'Provided client with confidence leading them through complex ambitions over 12 months', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JaninaHarper.jpg', verified: false },
  { name: 'Janina Harper', handleOrRole: 'Partner, Technology Consulting, KPMG Australia', quote: 'Helpful, knowledgeable, and always up-to-date on new technologies and trends', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JaninaHarper.jpg', verified: false },
  { name: 'Kapil Shah', handleOrRole: 'Co-Founder @Wizly | Design Leader | UX | Product', quote: 'Immense knowledge in Salesforce architecture - huge asset in UX research process', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/KapilShah.jpg', verified: false },
  { name: 'Kapil Shah', handleOrRole: 'Co-Founder @Wizly | Design Leader | UX | Product', quote: 'Core architectural principles are strong - absolute pleasure to work with', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/KapilShah.jpg', verified: false },
  { name: 'Maelle Polak', handleOrRole: 'Salesforce Solution Architect, 14x Certified', quote: 'Acquired international experience in business analysis and consulting - very valuable problem solver', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MaellePolak.jpg', verified: false },
  { name: 'Maelle Polak', handleOrRole: 'Salesforce Solution Architect, 14x Certified', quote: 'Not afraid to take new challenges - strong soft skills, very professional with clients', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MaellePolak.jpg', verified: false },
  { name: 'Maelle Polak', handleOrRole: 'Salesforce Solution Architect, 14x Certified', quote: 'Never loses positive attitude - keeps team motivated', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MaellePolak.jpg', verified: false },
  { name: 'John Stapleton', handleOrRole: 'Marketing Director, DrivenAction.com (direct report)', quote: 'Runs projects with real focus on ultimate users - exceptional team leadership', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JohnStapelton.jpg', verified: false },
  { name: 'John Stapleton', handleOrRole: 'Marketing Director, DrivenAction.com (direct report)', quote: 'Depth of practical Salesforce.com application knowledge in the real business world', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JohnStapelton.jpg', verified: false },
  { name: 'Damien Ryan', handleOrRole: 'Distinguished Solution Engineer, ANZ Public Sector, Salesforce', quote: 'Approachable personality and thorough knowledge of the Salesforce platform - absolute pleasure to work with', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DamienRyan.jpg', verified: false },
  { name: 'Brandon Bruce', handleOrRole: 'Co-founder Uncat, Co-founder 121 Tech Hub', quote: 'Knows how to get the most out of Salesforce for clients', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/BrandonBruce.jpg', verified: false },
  { name: 'Brandon Bruce', handleOrRole: 'Co-founder Uncat, Co-founder 121 Tech Hub', quote: 'Maximises technology return on investment for the organisations he serves', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/BrandonBruce.jpg', verified: false },
  { name: 'Brett Greathouse', handleOrRole: 'President, Touchpoint Solutions - Healthcare AI/Salesforce', quote: 'Knows Salesforce.com and how to get the most from it', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/BrettGreathouse.jpg', verified: false },
  { name: 'Brett Greathouse', handleOrRole: 'President, Touchpoint Solutions - Healthcare AI/Salesforce', quote: "As a client, he's always acted with integrity", avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/BrettGreathouse.jpg', verified: false },
  { name: 'Matthew Sutton', handleOrRole: 'Founder | Salesforce Partner | AI Enthusiast (client)', quote: 'Thoroughly professional with excellent industry knowledge', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MatthewSutton.jpg', verified: false },
  { name: 'Matthew Sutton', handleOrRole: 'Founder | Salesforce Partner | AI Enthusiast (client)', quote: 'Willingness to help others using personal and professional skills - can be trusted in any circumstance', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/MatthewSutton.jpg', verified: false },
  { name: 'Charmaine van der Merwe', handleOrRole: 'CIO | MBA, Thinktank Commercial Property Finance (direct report)', quote: 'Natural leader and great mentor - simplifies complex problems with analytical and critical thinking', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/Charmain.jpg', verified: false },
  { name: 'Charmaine van der Merwe', handleOrRole: 'CIO | MBA, Thinktank Commercial Property Finance (direct report)', quote: 'Sees and understands the bigger picture and value to the customer', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/Charmain.jpg', verified: false },
  { name: 'Charmaine van der Merwe', handleOrRole: 'CIO | MBA, Thinktank Commercial Property Finance (direct report)', quote: 'Great interpersonal skills - makes a positive impact on people', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/Charmain.jpg', verified: false },
  { name: 'Caroline Birch', handleOrRole: 'Somatic Coach', quote: 'Wealth of knowledge and experience - consistently strives to add value and support project team members', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/CarolineBirch.jpg', verified: false },
  { name: 'Caroline Birch', handleOrRole: 'Somatic Coach', quote: 'Ability to see through complexity and noise, design simple, effective solutions', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/CarolineBirch.jpg', verified: false },
  { name: 'Sally Turpin', handleOrRole: 'Strategic Leader (client)', quote: 'Lead Salesforce implementation - receptive to feedback, did everything to ensure project met all needs', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/SallyTurpin.jpg', verified: false },
  { name: 'Sally Turpin', handleOrRole: 'Strategic Leader (client)', quote: 'Deciphered complex entities and simplified things for maximum leverage converting staff to new system', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/SallyTurpin.jpg', verified: false },
  { name: 'Paul Reid', handleOrRole: 'Change Manager (direct report)', quote: 'Inspires those around him to tackle any challenge head on, break it down, and resolve any issue', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/PaulReid.jpg', verified: false },
  { name: 'Paul Reid', handleOrRole: 'Change Manager (direct report)', quote: 'Brings out the best in others - grants responsibility to get the job done', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/PaulReid.jpg', verified: false },
  { name: 'Paul Reid', handleOrRole: 'Change Manager (direct report)', quote: 'Creates atmosphere of optimism and enthusiasm on every project', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/PaulReid.jpg', verified: false },
  { name: 'Lance Orsmond', handleOrRole: 'Innovation Facilitator & Incubator (client)', quote: 'Passionate exploiter of CRM systems for organisations seeing value in transformational change', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/LanceOsbourne.jpg', verified: false },
  { name: 'Lance Orsmond', handleOrRole: 'Innovation Facilitator & Incubator (client)', quote: 'Fun to work with, professional, knowledgeable and always eager to make a difference', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/LanceOsbourne.jpg', verified: false },
  { name: 'Chris Franklin', handleOrRole: 'Lead Functional Consultant (direct report)', quote: 'Would make an ideal CIO for any organisation looking to advance their CRM implementation', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/ChrisFranklin.jpg', verified: false },
  { name: 'Chris Franklin', handleOrRole: 'Lead Functional Consultant (direct report)', quote: 'Seeks to get the best out of those he works with and help them excel', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/ChrisFranklin.jpg', verified: false },
  { name: 'Yanis Guzel', handleOrRole: 'Program Director, University of Sydney | Business Transformation', quote: 'Salesforce guru bringing tremendous energy and insight into everything he does', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/YanisG.jpg', verified: false },
  { name: 'Yanis Guzel', handleOrRole: 'Program Director, University of Sydney | Business Transformation', quote: 'Responsiveness and attention to detail - willingness to help makes him a valuable contributor', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/YanisG.jpg', verified: false },
  { name: 'Yanis Guzel', handleOrRole: 'Program Director, University of Sydney | Business Transformation', quote: 'Sees the big picture AND breaks it down into manageable tasks', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/YanisG.jpg', verified: false },
  { name: 'Alan Blair', handleOrRole: 'CRO Specialist | Experimentation', quote: 'Knack for distilling complicated ideas into simple, actionable plans to make any business situation better', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AlanBlair.jpg', verified: false },
  { name: 'Alan Blair', handleOrRole: 'CRO Specialist | Experimentation', quote: 'Never failed to give me clarity and confidence about a way forward', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AlanBlair.jpg', verified: false },
  { name: 'Alan Blair', handleOrRole: 'CRO Specialist | Experimentation', quote: 'Sincere, generous person and a lot of fun to hang out with', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/AlanBlair.jpg', verified: false },
  { name: 'Yassine El Jouaidi', handleOrRole: 'SaaS Consulting client', quote: "Through Adrian's SaaS consulting, we now focus on delivery of our services online, generating extended income from clients", avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/YASSINEELJOUAIDI.jpg', verified: false },
  { name: 'Jurie Fourie', handleOrRole: 'Group HR Manager, Inghams Enterprises (client)', quote: 'Knowledgeable and well-connected professional - scoped and addressed Company\'s needs accurately and timeously', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/JurieFourie.jpg', verified: false },
  { name: 'Dylan Byrne', handleOrRole: 'Partner, Business Advisory, BDO Australia', quote: 'Very good at understanding client needs and applying that knowledge to service delivery', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DylanByrne.jpg', verified: false },
  { name: 'Dylan Byrne', handleOrRole: 'Partner, Business Advisory, BDO Australia', quote: 'Excellent research skills finding out about prospective clients and their needs', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DylanByrne.jpg', verified: false },
  { name: 'Dylan Byrne', handleOrRole: 'Partner, Business Advisory, BDO Australia', quote: 'Clear BD approach with years of experience consistently produces better results', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/DylanByrne.jpg', verified: false },
  { name: 'Will Focus', handleOrRole: 'Brand Consultant | Founder', quote: 'Excellent ability to use systems and resources to properly time manage and direct various production steps', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/WillFocus.jpg', verified: false },
  { name: 'Will Focus', handleOrRole: 'Brand Consultant | Founder', quote: 'Made every step in the development process seamless and efficient', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/WillFocus.jpg', verified: false },
  { name: 'Nicole Watson', handleOrRole: 'Process Technician, Rio Tinto', quote: 'Absolute pleasure to work with - courteous, professional, will always go above and beyond', avatarUrl: 'https://xpqqcxtpnbhggukhbysr.supabase.co/storage/v1/object/public/TestimonialImages/NicoleWatson.jpg', verified: false }
];

// Priority order for established-company ICP: CFO, Group HR, Heads of Technology first
const PRIORITY_NAMES = ['Dinny Evans', 'Jurie Fourie', 'Tony Fitzgibbon', 'Jason Keith', 'Mike Dudarenok'];
const priorityTestimonials = PRIORITY_NAMES.map((name) => allTestimonials.find((t) => t.name === name)).filter(Boolean) as Review[];
const restTestimonials = allTestimonials.filter((t) => !PRIORITY_NAMES.includes(t.name));
const reorderedTestimonials = [...priorityTestimonials, ...restTestimonials];

export const HERO_REVIEW_AVATARS = reorderedTestimonials.filter((r) => r.avatarUrl).slice(0, 5);
export const REVIEW_RATING = 5.0;
export const REVIEW_COUNT = 117;

// Interleave by person so the same person never appears twice on screen (round-robin by name)
function interleaveByPerson(reviews: Review[]): Review[] {
  const byName = new Map<string, Review[]>();
  const nameOrder: string[] = [];
  for (const r of reviews) {
    if (!byName.has(r.name)) {
      byName.set(r.name, []);
      nameOrder.push(r.name);
    }
    byName.get(r.name)!.push(r);
  }
  const result: Review[] = [];
  let round = 0;
  let hasMore = true;
  while (hasMore) {
    hasMore = false;
    for (const name of nameOrder) {
      const list = byName.get(name)!;
      if (round < list.length) {
        result.push(list[round]);
        hasMore = true;
      }
    }
    round++;
  }
  return result;
}

// Rows 1–3: reordered so priority testimonials first, then 6 per row. Rows 4–5: interleaved so one per person on screen
const row1Reviews = reorderedTestimonials.slice(0, 6);
const row2Reviews = reorderedTestimonials.slice(6, 12);
const row3Reviews = reorderedTestimonials.slice(12, 18);
const row4Reviews = interleaveByPerson(reorderedTestimonials.slice(18, 47));
const row5Reviews = interleaveByPerson(reorderedTestimonials.slice(47, 76));

const CARD_WIDTH = 320;
const ROW_DURATION = 45; // base duration for 6-card row; longer rows scale so card speed matches

function ReviewCard({
  name,
  handleOrRole,
  quote,
  avatarUrl,
  width
}: {
  name: string;
  handleOrRole?: string;
  quote: string;
  avatarUrl?: string;
  width?: number;
}) {
  const initial = name.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2).toUpperCase();
  const isFullWidth = width == null;

  return (
    <div
      className={`rounded-xl border border-border bg-surface-elevated p-5 md:p-6 hover:shadow-lg transition-all duration-300 flex flex-col ${isFullWidth ? 'w-full min-w-0' : 'flex-shrink-0'}`}
      style={isFullWidth ? undefined : { width: width ?? CARD_WIDTH }}
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
  direction,
  duration
}: {
  reviews: Review[];
  direction: 'ltr' | 'rtl';
  duration?: number;
}) {
  const duplicated = [...reviews, ...reviews];
  // Scale duration so all rows scroll at same card speed as 6-card rows (ROW_DURATION)
  const scrollDuration = duration ?? ROW_DURATION * (reviews.length / 6);

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
            duration: scrollDuration,
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
            width={CARD_WIDTH}
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
      className={`min-h-screen-dynamic snap-start flex flex-col justify-center bg-background relative overflow-hidden overflow-x-hidden ${className ?? ''}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201, 169, 98, 0.04), transparent 70%)'
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-6xl 2xl:max-w-none mx-auto min-w-0 px-4 sm:px-6 md:px-12 py-14 sm:py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8 md:space-y-16"
        >
          <div className="text-center min-w-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground tracking-tight break-words">
              What leaders say about working with me
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
            <p className="text-sm text-foreground-tertiary">117 reviews</p>
          </div>

          {/* Mobile: 3 rows (one 3-row column), one card per row in view, manual flick per row */}
          <div className="md:hidden space-y-6">
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex w-[600%]">
                {row1Reviews.map((t) => (
                  <div key={t.name} className="flex-shrink-0 w-1/6 snap-center px-3">
                    <ReviewCard
                      name={t.name}
                      handleOrRole={t.handleOrRole}
                      quote={t.quote}
                      avatarUrl={t.avatarUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex w-[600%]">
                {row2Reviews.map((t) => (
                  <div key={t.name} className="flex-shrink-0 w-1/6 snap-center px-3">
                    <ReviewCard
                      name={t.name}
                      handleOrRole={t.handleOrRole}
                      quote={t.quote}
                      avatarUrl={t.avatarUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex w-[600%]">
                {row3Reviews.map((t) => (
                  <div key={t.name} className="flex-shrink-0 w-1/6 snap-center px-3">
                    <ReviewCard
                      name={t.name}
                      handleOrRole={t.handleOrRole}
                      quote={t.quote}
                      avatarUrl={t.avatarUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex" style={{ width: `${row4Reviews.length * 100}%` }}>
                {row4Reviews.map((t, index) => (
                  <div key={`row4-${index}`} className="flex-shrink-0 snap-center px-3" style={{ width: `${100 / row4Reviews.length}%` }}>
                    <ReviewCard
                      name={t.name}
                      handleOrRole={t.handleOrRole}
                      quote={t.quote}
                      avatarUrl={t.avatarUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex" style={{ width: `${row5Reviews.length * 100}%` }}>
                {row5Reviews.map((t, index) => (
                  <div key={`row5-${index}`} className="flex-shrink-0 snap-center px-3" style={{ width: `${100 / row5Reviews.length}%` }}>
                    <ReviewCard
                      name={t.name}
                      handleOrRole={t.handleOrRole}
                      quote={t.quote}
                      avatarUrl={t.avatarUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: 5 rows; rows 1–3 have 6 each, rows 4–5 have 29 each */}
          <div className="hidden md:block space-y-6 md:space-y-8">
            <CarouselRow reviews={row1Reviews} direction="ltr" />
            <CarouselRow reviews={row2Reviews} direction="rtl" />
            <CarouselRow reviews={row3Reviews} direction="ltr" />
            <CarouselRow reviews={row4Reviews} direction="rtl" />
            <CarouselRow reviews={row5Reviews} direction="ltr" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
