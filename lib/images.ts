/**
 * Image optimization utilities for Next.js Image component
 * 
 * Usage:
 * import Image from 'next/image';
 * import { getImageProps } from '@/lib/images';
 * 
 * <Image {...getImageProps('/images/hero.jpg', 'Hero image', { width: 1200, height: 600 })} />
 */

export interface ImageOptions {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function getImageProps(
  src: string,
  alt: string,
  options: ImageOptions
): {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
} {
  return {
    src,
    alt,
    width: options.width,
    height: options.height,
    ...(options.priority && { priority: true }),
    ...(options.className && { className: options.className })
  };
}

/**
 * Predefined image sizes for common use cases
 */
export const imageSizes = {
  hero: { width: 1920, height: 1080 },
  card: { width: 800, height: 600 },
  thumbnail: { width: 400, height: 300 },
  avatar: { width: 200, height: 200 },
  logo: { width: 300, height: 100 }
} as const;
