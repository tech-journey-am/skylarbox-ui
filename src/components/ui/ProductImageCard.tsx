"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface ProductImageCardProps {
  src: string;
  alt: string;
  title: string;
  price: string;
  originalPrice?: string;
  category?: string;
  badge?: string;
  className?: string;
}

const ProductImageCard: React.FC<ProductImageCardProps> = ({
  src,
  alt,
  title,
  price,
  originalPrice,
  category,
  badge,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div className="relative">
        <div className="aspect-square relative" style={{ aspectRatio: "1" }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {category && (
            <div
              className="absolute top-2 left-2 bg-brand-lavender text-white px-2 py-1 rounded-full text-xs"
              style={{
                padding: "0.25vw 0.5vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              {category}
            </div>
          )}
          {badge && (
            <div
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium"
              style={{
                padding: "0.25vw 0.5vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              {badge}
            </div>
          )}
        </div>
      </div>

      <div className="p-4" style={{ padding: "1vw" }}>
        <h3
          className="font-semibold mb-2"
          style={{
            fontSize: "clamp(18px, 1.5vw, 2rem)",
            marginBottom: "0.5vw",
          }}
        >
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ gap: "0.5vw" }}>
            <span
              className="font-bold text-brand-lavender"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              {price}
            </span>
            {originalPrice && (
              <span
                className="text-gray-400 line-through"
                style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
              >
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageCard;

