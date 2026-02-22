'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export interface CaseStudyGalleryProps {
  images: string[];
}

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground-tertiary mb-4">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
            className="relative aspect-video overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
