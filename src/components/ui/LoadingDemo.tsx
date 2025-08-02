"use client";

import { useState, useEffect } from "react";
import { LoadingSpinner, LoadingDots } from "./LoadingSpinner";
import { Skeleton } from "./Skeleton";

interface LoadingDemoProps {
  duration?: number;
  children: React.ReactNode;
  showSpinner?: boolean;
  showDots?: boolean;
  showSkeleton?: boolean;
}

export function LoadingDemo({
  duration = 1000,
  children,
  showSpinner = false,
  showDots = false,
  showSkeleton = false,
}: LoadingDemoProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-8'>
        {showSpinner && <LoadingSpinner size='lg' />}
        {showDots && <LoadingDots />}
        {showSkeleton && <Skeleton className='w-full h-32' />}
        {!showSpinner && !showDots && !showSkeleton && (
          <div className='text-center'>
            <LoadingSpinner size='md' className='mx-auto mb-4' />
            <p className='text-brand-gray'>Đang tải...</p>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
}

// Demo component for testing different loading states
export function LoadingDemoSection() {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    { name: "Spinner", component: <LoadingSpinner size='lg' /> },
    { name: "Dots", component: <LoadingDots /> },
    { name: "Skeleton", component: <Skeleton className='w-64 h-32' /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-8 text-center'>
      <h3 className='text-lg font-semibold text-brand-brown mb-4'>
        Loading Demo: {demos[currentDemo].name}
      </h3>
      <div className='flex justify-center'>{demos[currentDemo].component}</div>
    </div>
  );
}
