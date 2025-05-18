'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HeroSocialMedia } from './HeroSocialMedia';

export const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const scrollTop = window.scrollY;
      const speed = 0.5; // Adjust for stronger or lighter parallax

      const offset = (scrollTop - imageRef.current.offsetTop) * speed;
      setOffsetY(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[100dvh] overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      >
        <Image
          width={1200}
          height={800}
          src="https://k3gea9bzgia7xqlt.public.blob.vercel-storage.com/raesany/hero_upscaled-ZpRh2Y4io7HxrG7j08Dgm17sZcLBKr.PNG"
          alt="Hero image"
          className="w-full h-full object-cover object-[center_20%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            RAE SANY
          </h1>
          <p className="text-lg md:text-xl text-white">
            Model, Influencer, UGC Creator
          </p>
        </div>
        <HeroSocialMedia />
      </div>
    </div>
  );
};
