"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Button from "@/components/ui/button";
import { VideoSlide } from "@/data/heroSlides";

interface VideoHeroProps {
  slides: VideoSlide[];
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showProgress?: boolean;
  showArrows?: boolean;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  slides,
  autoPlayInterval = 5000,
  showNavigation = true,
  showProgress = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div
        className="container mx-auto relative z-10 h-full flex items-center"
        style={{ padding: "0 2vw" }}
      >
        <div
          className="max-w-4xl hero-container"
          style={{
            maxWidth: "1200px",
            minWidth: "300px",
            margin: "0 auto",
          }}
        >
          {currentSlide.showText && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white font-bold mb-6 hero-title"
                style={{
                  lineHeight: "1.1",
                  marginBottom: "2rem",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  letterSpacing: "0.02em",
                }}
              >
                {currentSlide.title}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white/90 mb-4 font-medium hero-subtitle"
                style={{
                  lineHeight: "1.2",
                  marginBottom: "1.5rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  letterSpacing: "0.01em",
                }}
              >
                {currentSlide.subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/90 mb-8 leading-relaxed hero-desc"
                style={{
                  lineHeight: "1.5",
                  marginBottom: "2.5rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  letterSpacing: "0.005em",
                }}
              >
                {currentSlide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 flex-wrap hero-btns"
                style={{ gap: "2rem" }}
              >
                <Button className="bg-brand-lavender hover:bg-brand-lavender/90 hero-btn">
                  Khám phá ngay
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hero-btn"
                >
                  Tìm hiểu thêm
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={currentSlide.video}
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Buttons */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            style={{
              padding: "min(1.5vw, 0.75rem)",
              minWidth: "min(4vw, 3rem)",
              minHeight: "min(4vw, 3rem)",
            }}
          >
            <ChevronLeft
              className="w-6 h-6 text-white"
              style={{
                width: "min(2vw, 1.5rem)",
                height: "min(2vw, 1.5rem)",
              }}
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            style={{
              padding: "min(1.5vw, 0.75rem)",
              minWidth: "min(4vw, 3rem)",
              minHeight: "min(4vw, 3rem)",
            }}
          >
            <ChevronRight
              className="w-6 h-6 text-white"
              style={{
                width: "min(2vw, 1.5rem)",
                height: "min(2vw, 1.5rem)",
              }}
            />
          </button>
        </>
      )}

      {/* Play/Pause Button */}
      {showNavigation && (
        <button
          onClick={togglePlay}
          className="absolute bottom-8 left-8 z-20 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          style={{
            padding: "min(1.5vw, 0.75rem)",
            minWidth: "min(4vw, 3rem)",
            minHeight: "min(4vw, 3rem)",
          }}
        >
          {isPlaying ? (
            <Pause
              className="w-6 h-6 text-white"
              style={{
                width: "min(2vw, 1.5rem)",
                height: "min(2vw, 1.5rem)",
              }}
            />
          ) : (
            <Play
              className="w-6 h-6 text-white"
              style={{
                width: "min(2vw, 1.5rem)",
                height: "min(2vw, 1.5rem)",
              }}
            />
          )}
        </button>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div
            className="h-1 bg-white/20"
            style={{ height: "min(0.5vw, 4px)" }}
          >
            <div
              className="h-full bg-brand-lavender transition-all duration-300"
              style={{
                width: `${progress}%`,
                height: "min(0.5vw, 4px)",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoHero;

