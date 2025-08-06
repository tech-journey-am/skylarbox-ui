"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  HeroSection,
  FeaturedBoxesSection,
  IndividualProductsSection,
  SpotifySubscriptionSection,
  BlogCommunitySection,
} from "@/components/section";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <FeaturedBoxesSection />
      <IndividualProductsSection />
      <SpotifySubscriptionSection />
      <BlogCommunitySection />
      <Footer />
    </div>
  );
}
