"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F6F3] via-[#F5F1E8] to-[#F0E6D6]'>
      {/* Background Decorations */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4B996]/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C4A77D]/8 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E8DCC0]/15 rounded-full blur-2xl'></div>
      </div>

      <div className='relative z-10 px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center lg:text-left'
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center px-4 py-2 bg-[#A67C5A]/10 border border-[#A67C5A]/20 rounded-full text-[#A67C5A] text-sm font-medium mb-6'
              >
                <span className='w-2 h-2 bg-[#A67C5A] rounded-full mr-2'></span>
                Mới ra mắt - Hộp quà chữa lành
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#6B5B4F] leading-tight mb-6'
              >
                Chữa lành
                <span className='block text-[#A67C5A]'>từng bước nhỏ</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-lg sm:text-xl text-[#8B7355] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0'
              >
                Mỗi người tìm bình yên theo cách riêng. Chúng tôi ở đây để đồng
                hành cùng bạn trong hành trình chữa lành và yêu thương bản thân.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
              >
                <Link
                  href='/products'
                  className='inline-flex items-center justify-center px-8 py-4 bg-[#A67C5A] text-white rounded-full font-semibold hover:bg-[#8B7355] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                >
                  Khám phá ngay
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
                <Link
                  href='/subscription'
                  className='inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-[#A67C5A] rounded-full font-semibold border-2 border-[#D4B996]/50 hover:bg-[#F8F6F0] hover:border-[#A67C5A] transform hover:scale-105 transition-all duration-300'
                >
                  Đăng ký subscription
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex justify-center lg:justify-start gap-8 mt-12'
              >
                <div className='text-center'>
                  <div className='text-2xl sm:text-3xl font-display font-bold text-[#6B5B4F]'>
                    2,500+
                  </div>
                  <div className='text-sm text-[#8B7355]'>
                    Khách hàng hài lòng
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl sm:text-3xl font-display font-bold text-[#6B5B4F]'>
                    15+
                  </div>
                  <div className='text-sm text-[#8B7355]'>
                    Sản phẩm chữa lành
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl sm:text-3xl font-display font-bold text-[#6B5B4F]'>
                    4.9★
                  </div>
                  <div className='text-sm text-[#8B7355]'>
                    Đánh giá trung bình
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='relative'
            >
              {/* Main Product Image */}
              <div className='relative'>
                <div className='relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl'>
                  <Image
                    src='/placeholder-image.jpg'
                    alt='Skylarbox Products'
                    width={400}
                    height={300}
                    className='rounded-2xl shadow-2xl'
                  />
                  {/* Overlay with brand elements */}
                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg'>
                    <div className='text-center'>
                      <div className='text-2xl font-display font-bold text-[#6B5B4F]'>
                        SKYLAR
                      </div>
                      <div className='text-xs text-[#8B7355] font-medium'>
                        BOX
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className='absolute -top-4 -left-4 bg-gradient-to-br from-[#A67C5A] to-[#D4B996] rounded-2xl p-4 shadow-xl'>
                    <div className='text-white text-center'>
                      <div className='text-2xl'>✨</div>
                      <div className='text-xs font-medium'>Chữa lành</div>
                    </div>
                  </div>

                  <div className='absolute -bottom-4 -right-4 bg-gradient-to-br from-[#A8B39A] to-[#E8C4A0] rounded-2xl p-4 shadow-xl'>
                    <div className='text-white text-center'>
                      <div className='text-2xl'>💝</div>
                      <div className='text-xs font-medium'>Yêu thương</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className='absolute -top-8 -right-8 w-16 h-16 bg-[#D4B996]/20 rounded-full blur-xl'></div>
                <div className='absolute -bottom-8 -left-8 w-20 h-20 bg-[#A67C5A]/20 rounded-full blur-xl'></div>
              </div>

              {/* Product Cards */}
              <div className='absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#A67C5A] to-[#D4B996] rounded-xl flex items-center justify-center'>
                    <span className='text-white text-lg'>🌿</span>
                  </div>
                  <div>
                    <div className='font-semibold text-[#6B5B4F] text-sm'>
                      Vết nứt ánh sáng
                    </div>
                    <div className='text-[#8B7355] text-xs'>450.000đ</div>
                  </div>
                </div>
              </div>

              <div className='absolute -top-8 -right-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#A8B39A] to-[#E8C4A0] rounded-xl flex items-center justify-center'>
                    <span className='text-white text-lg'>✨</span>
                  </div>
                  <div>
                    <div className='font-semibold text-[#6B5B4F] text-sm'>
                      Oracle Cards
                    </div>
                    <div className='text-[#8B7355] text-xs'>280.000đ</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='flex flex-col items-center text-[#8B7355]'>
          <span className='text-sm mb-2'>Khám phá thêm</span>
          <div className='w-6 h-10 border-2 border-[#A67C5A] rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-[#A67C5A] rounded-full mt-2 animate-bounce'></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
