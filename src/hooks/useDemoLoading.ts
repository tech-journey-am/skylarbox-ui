import { useState, useEffect } from "react";

interface UseDemoLoadingOptions {
  duration?: number;
  delay?: number;
  autoStart?: boolean;
}

export function useDemoLoading({
  duration = 1000,
  delay = 0,
  autoStart = true,
}: UseDemoLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(autoStart);

  useEffect(() => {
    if (!autoStart) return;

    const startTimer = setTimeout(() => {
      setIsLoading(true);
    }, delay);

    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, delay + duration);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [duration, delay, autoStart]);

  const startLoading = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    return () => clearTimeout(timer);
  };

  return {
    isLoading,
    setIsLoading,
    startLoading,
  };
}

// Hook for managing multiple loading states
export function useMultipleDemoLoading(count: number, duration = 1000) {
  const [loadedItems, setLoadedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      const allLoaded = new Set<number>();
      for (let i = 0; i < count; i++) {
        allLoaded.add(i);
      }
      setLoadedItems(allLoaded);
    }, duration);

    return () => clearTimeout(timer);
  }, [count, duration]);

  const isItemLoaded = (index: number) => loadedItems.has(index);

  return {
    loadedItems,
    isItemLoaded,
  };
}
