"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/components/constants";
import React from "react"; // Added missing import

interface ProductImageCardProps {
  giftImage: string;
  productImage: string;
  giftIcon?: string;
  alt: string;
  className?: string;
  onImageChange?: (isProduct: boolean) => void;
  autoPlay?: boolean;
  autoPlayDuration?: number;
  showIndicator?: boolean;
  giftTitle?: string;
  productTitle?: string;
  giftSubtitle?: string;
  productSubtitle?: string;
  showDetails?: boolean;
  isHoverToOpen?: boolean;
  overlayText?: {
    title?: string;
    description?: string;
    price?: string;
  };
}

export default function ProductImageCard({
  giftImage,
  productImage,
  giftIcon = "🎁",
  alt,
  className = "",
  onImageChange,
  autoPlay = false,
  autoPlayDuration = 3000,
  showIndicator = true,
  giftTitle,
  productTitle,
  giftSubtitle,
  productSubtitle,
  showDetails = true,
  isHoverToOpen = true,
  overlayText,
}: ProductImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowProduct(!showProduct);
    onImageChange?.(!showProduct);
    // Toggle hover state for visual feedback
    setIsHovered(!showProduct);
  };

  // Auto play functionality
  React.useEffect(() => {
    if (autoPlay && !isClicked) {
      const interval = setInterval(() => {
        setShowProduct((prev) => !prev);
        onImageChange?.(!showProduct);
      }, autoPlayDuration);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayDuration, isClicked, showProduct, onImageChange]);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer touch-manipulation ${className}`}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {!showProduct ? (
          // Gift Box View
          <motion.div
            key={`gift-${alt}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-lavender/30 to-brand-yellow/30"
          >
            <Image
              src={giftImage}
              alt={`${alt} - Hộp quà`}
              fill
              className="object-cover "
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            {showDetails ? (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{
                      rotate: isHovered ? 90 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <span className="text-2xl">{giftIcon}</span>
                  </motion.div>
                  <motion.p
                    className="text-lg font-semibold px-2 sm:px-4"
                    animate={{ y: isHovered ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {giftTitle || `Hộp quà ${alt}`}
                  </motion.p>
                  <motion.p
                    className="text-sm opacity-80 px-2 sm:px-4"
                    animate={{ opacity: isHovered ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {giftSubtitle || (isClicked ? "Đã mở" : "Click để mở")}
                  </motion.p>
                </div>
              </div>
            ) : null}
          </motion.div>
        ) : (
          // Product View
          <motion.div
            key={`product-${alt}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-rose/20 to-brand-lavender/20"
          >
            <Image
              src={productImage}
              alt={`${alt} - Sản phẩm`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            {showDetails ? (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  {/* <motion.div
                    className='w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4'
                    animate={{
                      rotate: isHovered ? 0 : -90,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className='text-2xl'>{giftIcon}</span>
                  </motion.div> */}
                  {/* <motion.p
                    className="text-lg font-medium px-2 sm:px-4"
                    animate={{ y: isHovered ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {productTitle || alt}
                  </motion.p> */}
                  {/* <motion.p
                    className="text-sm opacity-80 px-2 sm:px-4"
                    animate={{ opacity: isHovered ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {productSubtitle || "Click để đóng"}
                  </motion.p> */}
                </div>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto play indicator */}
      {autoPlay && (
        <motion.div
          className="absolute bottom-4 left-4 bg-black/50 text-white rounded-full px-2 py-1 text-xs"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          🔄 Auto
        </motion.div>
      )}

      {/* Click indicator for mobile */}
      <motion.div
        className="absolute top-2 left-2 bg-white/90 rounded-full size-8 flex items-center justify-center shadow-lg md:hidden"
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm">👆</span>
      </motion.div>
    </motion.div>
  );
}

