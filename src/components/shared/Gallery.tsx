'use client';

import { ListBlobResultBlob } from '@vercel/blob';
import Image from 'next/image';
import { FC, useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

type GalleryProps = {
  images: ListBlobResultBlob[];
};

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <section className=" py-8 w-[100dvw] overflow-x-auto">
      <div className="flex flex-nowrap gap-4 w-fit  ">
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
