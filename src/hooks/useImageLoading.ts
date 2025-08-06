import { useState, useCallback } from "react";

export function useImageLoading() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((imageKey: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageKey));
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(imageKey);
      return newSet;
    });
  }, []);

  const handleImageError = useCallback((imageKey: string) => {
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(imageKey);
      return newSet;
    });
  }, []);

  const startImageLoading = useCallback((imageKey: string) => {
    setLoadingImages((prev) => new Set(prev).add(imageKey));
  }, []);

  const isImageLoaded = useCallback(
    (imageKey: string) => {
      return loadedImages.has(imageKey);
    },
    [loadedImages]
  );

  const isImageLoading = useCallback(
    (imageKey: string) => {
      return loadingImages.has(imageKey);
    },
    [loadingImages]
  );

  return {
    loadedImages,
    loadingImages,
    handleImageLoad,
    handleImageError,
    startImageLoading,
    isImageLoaded,
    isImageLoading,
  };
}
