interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-brand-lavender ${sizeClasses[size]} ${className}`}
    />
  );
}

export function LoadingDots() {
  return (
    <div className='flex space-x-1'>
      <div
        className='w-2 h-2 bg-brand-lavender rounded-full animate-bounce'
        style={{ animationDelay: "0ms" }}
      />
      <div
        className='w-2 h-2 bg-brand-lavender rounded-full animate-bounce'
        style={{ animationDelay: "150ms" }}
      />
      <div
        className='w-2 h-2 bg-brand-lavender rounded-full animate-bounce'
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}
