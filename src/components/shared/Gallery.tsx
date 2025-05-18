'use client';

import { ListBlobResultBlob } from '@vercel/blob';
import Image from 'next/image';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

type GalleryProps = {
  images: ListBlobResultBlob[];
};

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  // Auto-scroll slowly to the right
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.3; // pixels per frame
    const scroll = () => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0; // Reset to start
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images]);

  return (
    <section className="py-8 w-[100dvw] overflow-x-auto">
      <div
        className="flex flex-nowrap gap-4 w-fit"
        ref={scrollContainerRef} // << this is where the scroll actually happens
      >
        {images.map((img, index) => (
          <div
            key={img.pathname}
            className="w-[400px] h-[400px] object-cover hover:scale-105 transition-transform duration-300 relative aspect-square cursor-pointer overflow-hidden shadow-md"
            onClick={() => openImageViewer(index)}
          >
            <Image
              src={img.url}
              alt={`Gallery image - ${img.pathname}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images.map((img) => img.url)}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          closeOnClickOutside={true}
        />
      )}
    </section>
  );
};
