"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  HeroSection,
  FeaturedBoxesSection,
  IndividualProductsSection,
  SpotifySubscriptionSection,
  BlogCommunitySection,
  PartnerSection,
} from "@/components/section";
import {
  Sparkles,
  Star,
  Heart,
  Music,
  Gift,
  Smile,
  Sun,
  Moon,
  Cloud,
  Leaf,
  Flower2,
  ThumbsUp,
  ThumbsDown,
  Rocket,
  BookOpen,
  Coffee,
  Cake,
  Candy,
  Apple,
  PawPrint,
  SunMedium,
  CloudRain,
  CloudSun,
  CloudMoon,
  Rainbow,
  Ghost,
  Pizza,
  IceCream,
  Camera,
  Palette,
  Wand2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section with icon background */}
      <div className='relative'>
        <HeroSection />
        <Sparkles className='absolute left-[5vw] top-[2vw] w-[5vw] h-[5vw] text-brand-lavender opacity-20 pointer-events-none z-0' />
        <Star className='absolute right-[8vw] top-[6vw] w-[4vw] h-[4vw] text-brand-yellow opacity-20 pointer-events-none z-0' />
        <Sun className='absolute left-[15vw] top-[8vw] w-[3vw] h-[3vw] text-yellow-300 opacity-10 pointer-events-none z-0' />
        <Cloud className='absolute right-[2vw] top-[2vw] w-[5vw] h-[5vw] text-blue-200 opacity-10 pointer-events-none z-0' />
        <Rocket className='absolute left-[40vw] top-[1vw] w-[4vw] h-[4vw] text-brand-rose opacity-10 pointer-events-none z-0' />
        <Wand2 className='absolute right-[20vw] bottom-[2vw] w-[3vw] h-[3vw] text-brand-lavender opacity-10 pointer-events-none z-0' />
      </div>

      {/* Featured Boxes Section with icon background */}
      <div className='relative'>
        <FeaturedBoxesSection />
        <Gift className='absolute left-[10vw] bottom-[3vw] w-[6vw] h-[6vw] text-brand-rose opacity-15 pointer-events-none z-0' />
        <Heart className='absolute right-[12vw] top-[4vw] w-[4vw] h-[4vw] text-brand-lavender opacity-15 pointer-events-none z-0' />
        <Flower2 className='absolute left-[20vw] top-[10vw] w-[3vw] h-[3vw] text-pink-200 opacity-10 pointer-events-none z-0' />
        <Leaf className='absolute right-[5vw] bottom-[8vw] w-[3vw] h-[3vw] text-green-300 opacity-10 pointer-events-none z-0' />
        <Candy className='absolute left-[30vw] bottom-[2vw] w-[2.5vw] h-[2.5vw] text-pink-400 opacity-10 pointer-events-none z-0' />
        <Cake className='absolute right-[25vw] top-[7vw] w-[2.5vw] h-[2.5vw] text-yellow-400 opacity-10 pointer-events-none z-0' />
      </div>

      {/* Individual Products Section with icon background */}
      <div className='relative'>
        <IndividualProductsSection />
        <Smile className='absolute left-[3vw] top-[8vw] w-[5vw] h-[5vw] text-brand-yellow opacity-15 pointer-events-none z-0' />
        <Star className='absolute right-[6vw] bottom-[2vw] w-[4vw] h-[4vw] text-brand-lavender opacity-10 pointer-events-none z-0' />
        <Apple className='absolute left-[18vw] bottom-[6vw] w-[3vw] h-[3vw] text-red-300 opacity-10 pointer-events-none z-0' />
        <PawPrint className='absolute right-[18vw] top-[10vw] w-[3vw] h-[3vw] text-orange-300 opacity-10 pointer-events-none z-0' />
        <Pizza className='absolute left-[40vw] top-[12vw] w-[2.5vw] h-[2.5vw] text-yellow-600 opacity-10 pointer-events-none z-0' />
        <IceCream className='absolute right-[30vw] bottom-[4vw] w-[2.5vw] h-[2.5vw] text-pink-300 opacity-10 pointer-events-none z-0' />
      </div>

      {/* Spotify Subscription Section with icon background */}
      <div className='relative'>
        <SpotifySubscriptionSection />
        <Music className='absolute left-[7vw] top-[5vw] w-[6vw] h-[6vw] text-green-400 opacity-10 pointer-events-none z-0' />
        <Heart className='absolute right-[10vw] bottom-[4vw] w-[5vw] h-[5vw] text-brand-rose opacity-10 pointer-events-none z-0' />
        <CloudRain className='absolute left-[25vw] top-[10vw] w-[3vw] h-[3vw] text-blue-300 opacity-10 pointer-events-none z-0' />
        <CloudSun className='absolute right-[20vw] top-[8vw] w-[3vw] h-[3vw] text-yellow-200 opacity-10 pointer-events-none z-0' />
        <Rainbow className='absolute left-[35vw] bottom-[2vw] w-[3vw] h-[3vw] text-pink-200 opacity-10 pointer-events-none z-0' />
        <Ghost className='absolute right-[35vw] top-[2vw] w-[2.5vw] h-[2.5vw] text-gray-300 opacity-10 pointer-events-none z-0' />
      </div>

      {/* Blog Community Section with icon background */}
      <div className='relative'>
        <BlogCommunitySection />
        <Sparkles className='absolute left-[12vw] top-[3vw] w-[4vw] h-[4vw] text-brand-yellow opacity-10 pointer-events-none z-0' />
        <Smile className='absolute right-[8vw] bottom-[2vw] w-[5vw] h-[5vw] text-brand-lavender opacity-10 pointer-events-none z-0' />
        <BookOpen className='absolute left-[25vw] top-[8vw] w-[3vw] h-[3vw] text-blue-400 opacity-10 pointer-events-none z-0' />
        <ThumbsUp className='absolute right-[20vw] bottom-[6vw] w-[2.5vw] h-[2.5vw] text-green-400 opacity-10 pointer-events-none z-0' />
        <ThumbsDown className='absolute left-[35vw] bottom-[4vw] w-[2.5vw] h-[2.5vw] text-red-400 opacity-10 pointer-events-none z-0' />
        <Camera className='absolute left-[10vw] bottom-[8vw] w-[2.5vw] h-[2.5vw] text-gray-400 opacity-10 pointer-events-none z-0' />
        <Palette className='absolute right-[10vw] top-[10vw] w-[2.5vw] h-[2.5vw] text-brand-lavender opacity-10 pointer-events-none z-0' />
      </div>

      {/* Đối tác */}
      <PartnerSection />

      <Footer />
    </div>
  );
}
