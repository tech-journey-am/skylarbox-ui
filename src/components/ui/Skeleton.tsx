import React from "react";
import { cn } from "@/utils/cn";

export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  lines?: number;
  size?: "sm" | "md" | "lg";
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  width,
  height,
  style = {},
}) => {
  return (
    <div
      className={cn("animate-pulse rounded bg-gray-200", className)}
      style={{
        width: width || "100%",
        height: height || "1rem",
        fontSize: "clamp(16px, 1vw, 1.25rem)",
        ...style,
      }}
    />
  );
};

export const SkeletonText: React.FC<SkeletonProps> = ({
  className = "",
  lines = 3,
  ...props
}) => {
  return (
    <div className="space-y-2" style={{ gap: "0.5vw" }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={className}
          height="1rem"
          style={{
            fontSize: "clamp(16px, 1vw, 1.25rem)",
            minHeight: "16px",
          }}
          {...props}
        />
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC<SkeletonProps> = ({
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-4" style={{ gap: "1vw" }}>
      <Skeleton
        className={cn("rounded-lg", className)}
        height="200px"
        style={{
          fontSize: "clamp(16px, 1vw, 1.25rem)",
          minHeight: "200px",
        }}
        {...props}
      />
      <div className="space-y-2" style={{ gap: "0.5vw" }}>
        <Skeleton
          height="1.5rem"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", minHeight: "24px" }}
        />
        <Skeleton
          height="1rem"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", minHeight: "16px" }}
        />
        <Skeleton
          height="1rem"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", minHeight: "16px" }}
        />
      </div>
    </div>
  );
};

export const SkeletonAvatar: React.FC<SkeletonProps> = ({
  className = "",
  size = "md",
  ...props
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          width: "2vw",
          height: "2vw",
          minWidth: "32px",
          minHeight: "32px",
        };
      case "lg":
        return {
          width: "4vw",
          height: "4vw",
          minWidth: "64px",
          minHeight: "64px",
        };
      default:
        return {
          width: "3vw",
          height: "3vw",
          minWidth: "48px",
          minHeight: "48px",
        };
    }
  };

  return (
    <Skeleton
      className={cn("rounded-full", className)}
      style={{
        ...getSizeStyles(),
        fontSize: "clamp(16px, 1vw, 1.25rem)",
      }}
      {...props}
    />
  );
};

export { Skeleton };

// Predefined skeleton components
export function ProductCardSkeleton() {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm"
      style={{ padding: "1.5vw" }}
    >
      <Skeleton
        className="w-full mb-4"
        style={{ height: "12vw", minHeight: "180px" }}
      />
      <Skeleton
        className="w-3/4 mb-2"
        style={{ height: "1.5vw", minHeight: "24px" }}
      />
      <Skeleton
        className="w-1/2 mb-4"
        style={{ height: "1vw", minHeight: "16px" }}
      />
      <Skeleton
        className="w-full"
        style={{ height: "2.5vw", minHeight: "40px" }}
      />
    </div>
  );
}

export function BoxCardSkeleton() {
  return (
    <div
      className="bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-2xl relative overflow-hidden"
      style={{ padding: "1.5vw", height: "20vw", minHeight: "320px" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <Skeleton
            className="mx-auto mb-4 rounded-lg"
            style={{
              width: "8vw",
              height: "8vw",
              minWidth: "128px",
              minHeight: "128px",
            }}
          />
          <Skeleton
            className="mb-2"
            style={{
              width: "12vw",
              height: "1.5vw",
              minWidth: "192px",
              minHeight: "24px",
            }}
          />
          <Skeleton
            className="mb-4"
            style={{
              width: "16vw",
              height: "1vw",
              minWidth: "256px",
              minHeight: "16px",
            }}
          />
          <Skeleton
            style={{
              width: "8vw",
              height: "2vw",
              minWidth: "128px",
              minHeight: "32px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div
      className="bg-white rounded-2xl shadow-sm"
      style={{ padding: "1.5vw" }}
    >
      <Skeleton
        className="w-full mb-4"
        style={{ height: "8vw", minHeight: "128px" }}
      />
      <Skeleton
        className="w-3/4 mb-2"
        style={{ height: "1.5vw", minHeight: "24px" }}
      />
      <Skeleton
        className="w-full mb-2"
        style={{ height: "1vw", minHeight: "16px" }}
      />
      <Skeleton
        className="w-1/2 mb-4"
        style={{ height: "1vw", minHeight: "16px" }}
      />
      <Skeleton
        style={{
          width: "6vw",
          height: "1vw",
          minWidth: "96px",
          minHeight: "16px",
        }}
      />
    </div>
  );
}

export function HeroImageSkeleton() {
  return (
    <div
      className="relative w-full bg-gradient-to-br from-brand-lavender/30 to-brand-yellow/30 rounded-2xl overflow-hidden"
      style={{ height: "24vw", minHeight: "400px" }}
    >
      <Skeleton className="w-full h-full" />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-center text-white">
          <Skeleton
            className="mx-auto mb-4 rounded-full bg-white/90"
            style={{
              width: "8vw",
              height: "8vw",
              minWidth: "128px",
              minHeight: "128px",
            }}
          />
          <Skeleton
            className="mb-2 bg-white/90"
            style={{
              width: "12vw",
              height: "1.5vw",
              minWidth: "192px",
              minHeight: "24px",
            }}
          />
          <Skeleton
            className="bg-white/90"
            style={{
              width: "8vw",
              height: "1vw",
              minWidth: "128px",
              minHeight: "16px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

