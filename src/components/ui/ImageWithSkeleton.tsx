"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "./Skeleton";
import { BLUR_DATA_URL } from "@/components/constants";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  skeletonClassName?: string;
  skeletonWidth?: string | number;
  skeletonHeight?: string | number;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  skeletonClassName = "",
  skeletonWidth,
  skeletonHeight,
  priority = false,
  sizes,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <span className='text-gray-500 text-sm'>Failed to load image</span>
      </div>
    );
  }

  return (
    <div className='relative'>
      {isLoading && (
        <Skeleton
          className={skeletonClassName}
          width={skeletonWidth}
          height={skeletonHeight}
        />
      )}
      <div className={isLoading ? "hidden" : "block"}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={className}
          placeholder='blur'
          blurDataURL={BLUR_DATA_URL}
          priority={priority}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}
