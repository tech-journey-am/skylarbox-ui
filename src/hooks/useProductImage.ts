import { useState, useCallback } from "react";

interface UseProductImageOptions {
  autoPlay?: boolean;
  autoPlayDuration?: number;
  onImageChange?: (isProduct: boolean) => void;
}

export function useProductImage(options: UseProductImageOptions = {}) {
  const { autoPlay = false, autoPlayDuration = 3000, onImageChange } = options;

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (!isClicked) {
      setShowProduct(true);
      onImageChange?.(true);
    }
  }, [isClicked, onImageChange]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (!isClicked) {
      setShowProduct(false);
      onImageChange?.(false);
    }
  }, [isClicked, onImageChange]);

  const handleClick = useCallback(() => {
    setIsClicked(!isClicked);
    setShowProduct(!showProduct);
    onImageChange?.(!showProduct);
  }, [isClicked, showProduct, onImageChange]);

  const reset = useCallback(() => {
    setIsHovered(false);
    setIsClicked(false);
    setShowProduct(false);
  }, []);

  const forceShowProduct = useCallback(
    (show: boolean) => {
      setShowProduct(show);
      onImageChange?.(show);
    },
    [onImageChange]
  );

  return {
    isHovered,
    isClicked,
    showProduct,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    reset,
    forceShowProduct,
  };
}
