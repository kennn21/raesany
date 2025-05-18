'use client';

import { getGalleryImages } from '@/actions/getGalleryImages';
import { ListBlobResultBlob } from '@vercel/blob';
import { useEffect, useState } from 'react';

export const useGallery = () => {
  const [images, setImages] = useState<ListBlobResultBlob[]>([]);
  const [shotsImages, setShotsImages] = useState<ListBlobResultBlob[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const fetchedImages = await getGalleryImages();
        setImages(fetchedImages);
      } catch (err) {
        console.error(err);
        setError('Failed to load images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const fetchedShotsImages = images.filter((image) =>
      image.pathname.startsWith('raesany/gallery/')
    );
    setShotsImages(fetchedShotsImages);
  }, [images]);

  return { images, loading, error, shotsImages };
};
