import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height,
  className = '',
  priority = false,
  quality = 75,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Calculate height if not provided to maintain aspect ratio
  const imageHeight = height || width;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={imageHeight}
        quality={quality}
        priority={priority}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 