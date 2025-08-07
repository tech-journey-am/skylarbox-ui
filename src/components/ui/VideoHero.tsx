"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoSlide {
  id: number;
  video: string;
  title: string;
  subtitle: string;
  description: string;
  showText?: boolean;
}

interface VideoHeroProps {
  slides: VideoSlide[];
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showProgress?: boolean;
  showArrows?: boolean;
}

export default function VideoHero({
  slides,
  autoPlayInterval = 6000,
  showNavigation = true,
  showProgress = true,
  showArrows = true,
}: VideoHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className='relative h-screen overflow-hidden group'>
      {/* Video Background */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className='absolute inset-0'
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-full object-cover'
          >
            <source src={slides[currentSlide].video} type='video/mp4' />
          </video>

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>
      </AnimatePresence>

      {/* Content - Only show for first slide */}
      {slides[currentSlide].showText && (
        <div className='relative z-10 h-full flex items-center'>
          <div className='container mx-auto px-4'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0.3, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.3, y: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='max-w-[60vw] text-white'
              >
                <h1 className='hero-title mb-6 leading-tight text-[4vw]'>
                  {slides[currentSlide].title}
                </h1>
                <h2 className='hero-subtitle mb-4 text-brand-lavender text-[2vw]'>
                  {slides[currentSlide].subtitle}
                </h2>
                <p className='text-gray-200 mb-8 max-w-[50vw] hero-description text-[1.2vw]'>
                  {slides[currentSlide].description}
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button className='bg-brand-lavender hover:bg-brand-lavender/90 text-white font-semibold text-[1vw] px-[1.6vw] py-[1vw] rounded-[1.5vw] transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md border-2 border-brand-lavender/20 backdrop-blur-sm'>
                    Khám phá ngay
                  </button>
                  <button className='bg-transparent hover:bg-white/10 text-white font-semibold text-[1vw] px-[1.6vw] py-[1vw] rounded-[1.5vw] transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm'>
                    Tham gia cộng đồng
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Navigation Buttons - Dynamic Container */}
      {showNavigation && (
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group/navigation'>
          <div className='flex gap-3 bg-white/10 backdrop-blur-md rounded-full p-[0.6vw] transition-all duration-500 overflow-hidden group-hover/navigation:px-[1.2vw]'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 flex items-center  justify-center w-[2.5vw] h-[2.5vw] text-[0.8vw] font-bold ${
                  index === currentSlide
                    ? "bg-brand-lavender text-white shadow-lg border-2 border-brand-lavender/30"
                    : "bg-brand-sage/30 text-brand-brown hover:bg-brand-sage/50 border-2 border-brand-sage/20  scale-75 group-hover/navigation:opacity-100 group-hover/navigation:scale-100 group-hover/navigation:w-[2.5vw] hover:!scale-110"
                }`}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className='absolute bottom-0 left-0 right-0 bg-white/20 h-[0.3vw]'>
          <motion.div
            className='h-full bg-white'
            initial={{ width: 0 }}
            animate={{ width: isAutoPlaying ? "100%" : "0%" }}
            transition={{
              duration: isAutoPlaying ? autoPlayInterval / 1000 : 0,
            }}
          />
        </div>
      )}
    </section>
  );
}
