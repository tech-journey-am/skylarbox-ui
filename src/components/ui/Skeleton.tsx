import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className, width, height }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      style={{
        width: width,
        height: height,
      }}
    />
  );
}

// Predefined skeleton components
export function ProductCardSkeleton() {
  return (
    <div className='bg-white rounded-2xl p-6 shadow-sm'>
      <Skeleton className='w-full h-48 mb-4' />
      <Skeleton className='w-3/4 h-6 mb-2' />
      <Skeleton className='w-1/2 h-4 mb-4' />
      <Skeleton className='w-full h-10' />
    </div>
  );
}

export function BoxCardSkeleton() {
  return (
    <div className='bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-2xl p-6 h-80 relative overflow-hidden'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <Skeleton className='w-32 h-32 mx-auto mb-4 rounded-lg' />
          <Skeleton className='w-48 h-6 mb-2' />
          <Skeleton className='w-64 h-4 mb-4' />
          <Skeleton className='w-32 h-8' />
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className='bg-white rounded-2xl p-6 shadow-sm'>
      <Skeleton className='w-full h-32 mb-4' />
      <Skeleton className='w-3/4 h-6 mb-2' />
      <Skeleton className='w-full h-4 mb-2' />
      <Skeleton className='w-1/2 h-4 mb-4' />
      <Skeleton className='w-24 h-4' />
    </div>
  );
}

export function HeroImageSkeleton() {
  return (
    <div className='relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-brand-lavender/30 to-brand-yellow/30 rounded-2xl overflow-hidden'>
      <Skeleton className='w-full h-full' />
      <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
        <div className='text-center text-white'>
          <Skeleton className='w-32 h-32 mx-auto mb-4 rounded-full bg-white/90' />
          <Skeleton className='w-48 h-6 mb-2 bg-white/90' />
          <Skeleton className='w-32 h-4 bg-white/90' />
        </div>
      </div>
    </div>
  );
}
