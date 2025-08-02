"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/components/constants";
import { HeroImageSkeleton } from "@/components/ui/Skeleton";
import { useDemoLoading } from "@/hooks/useDemoLoading";

export default function HeroSection() {
  const { isLoading: imageLoading } = useDemoLoading({ duration: 1000 });

  return (
    <section className='sm:pt-20 pt-32 relative min-h-screen flex items-center'>
      <div className='absolute inset-0 bg-hero-gradient'></div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left'
          >
            <h1 className='text-4xl md:text-6xl font-montserrat font-bold text-brand-brown mb-6 leading-tight'>
              Mỗi người tìm{" "}
              <span className='text-brand-lavender'>bình yên</span> theo cách
              riêng
            </h1>
            <p className='text-lg text-brand-gray mb-8 leading-relaxed'>
              Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu
              dàng, sống động và lành. Khám phá hành trình chữa lành của riêng
              bạn.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <button className='bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'>
                Khám phá ngay
              </button>
              <button className='border-2 border-brand-lavender text-brand-lavender px-8 py-3 rounded-full hover:bg-brand-lavender/10 transition-colors font-medium'>
                Tham gia cộng đồng
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            {imageLoading && <HeroImageSkeleton />}
            <div
              className={`relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-brand-lavender/30 to-brand-yellow/30 rounded-2xl overflow-hidden ${
                imageLoading ? "hidden" : "block"
              }`}
            >
              <Image
                src='/images/box/demo.png'
                alt='Skylarbox Demo'
                fill
                className='object-cover'
                placeholder='blur'
                blurDataURL={BLUR_DATA_URL}
              />
              <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <div className='w-32 h-32 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-4xl'>🌸</span>
                  </div>
                  <p className='text-lg font-medium'>Hộp quà Skylarbox</p>
                  <p className='text-sm'>Mở ra để khám phá</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
