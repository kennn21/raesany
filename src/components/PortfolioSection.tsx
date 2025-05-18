'use client';

import { Gallery } from '@/components/shared/Gallery';
import { useGallery } from '@/hooks/useGallery';

export const PortfolioSection = () => {
  const { shotsImages } = useGallery();

  return (
    <section id="portfolio" className="py-16 bg-gray-50 text-black w-full">
      <div className="w-full">
        <h2 className="text-5xl mb-16 text-center">
          <strong>PORT</strong>
          <span className="font-light">FOLIO</span>
        </h2>
        <Gallery images={shotsImages} />
        {/* <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-6 py-2">View More</button>
        </div> */}
      </div>
    </section>
  );
};
