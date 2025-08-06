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
    <section className="relative h-screen overflow-hidden group">
      {/* Video Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Only show for first slide */}
      {slides[currentSlide].showText && (
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0.3, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.3, y: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl text-white"
              >
                <h1
                  className="hero-title mb-6 leading-tight"
                  style={{
                    fontSize: "4.5vw",
                    lineHeight: "1.1",
                  }}
                >
                  {slides[currentSlide].title}
                </h1>
                <h2
                  className="hero-subtitle mb-4 text-brand-lavender"
                  style={{
                    fontSize: "2vw",
                    lineHeight: "1.3",
                  }}
                >
                  {slides[currentSlide].subtitle}
                </h2>
                <p
                  className="text-gray-200 mb-8 max-w-2xl hero-description"
                  style={{
                    fontSize: "1.2vw",
                    lineHeight: "1.6",
                  }}
                >
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="btn-cta"
                    style={{
                      fontSize: "1vw",
                      padding: "0.8vw 1.5vw",
                      borderRadius: "1.5vw",
                    }}
                  >
                    Khám phá ngay
                  </button>
                  <button
                    className="btn-cta-secondary"
                    style={{
                      fontSize: "1vw",
                      padding: "0.8vw 1.5vw",
                      borderRadius: "1.5vw",
                    }}
                  >
                    Tham gia cộng đồng
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Navigation Buttons - Horizontal Bar Style */}
      {showNavigation && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div
            className="flex gap-3 bg-white/10 backdrop-blur-md rounded-full"
            style={{ padding: "0.6vw 1.2vw" }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                  index === currentSlide
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
                style={{
                  width: "2.5vw",
                  height: "2.5vw",
                  fontSize: "0.8vw",
                  fontWeight: "600",
                }}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Arrow Navigation */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              left: "1.5vw",
              padding: "0.8vw",
              width: "3vw",
              height: "3vw",
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "1.2vw", height: "1.2vw" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              right: "1.5vw",
              padding: "0.8vw",
              width: "3vw",
              height: "3vw",
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "1.2vw", height: "1.2vw" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div
          className="absolute bottom-0 left-0 right-0 bg-white/20"
          style={{ height: "0.3vw" }}
        >
          <motion.div
            className="h-full bg-white"
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

