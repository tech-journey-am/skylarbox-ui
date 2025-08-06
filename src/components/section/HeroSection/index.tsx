"use client";

import VideoHero from "@/components/ui/VideoHero";
import { heroSlides } from "@/data/heroSlides";

export default function HeroSection() {
  return (
    <VideoHero
      slides={heroSlides}
      autoPlayInterval={5000}
      showNavigation={true}
      showProgress={true}
      showArrows={false}
    />
  );
}
