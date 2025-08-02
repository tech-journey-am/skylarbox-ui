"use client";

import { motion } from "framer-motion";
import { HeroImageSkeleton } from "@/components/ui/Skeleton";
import { useDemoLoading } from "@/hooks/useDemoLoading";
import ProductImageCard from "@/components/ui/ProductImageCard";

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
              className={`relative w-full h-96 transition-transform hover:scale-105 lg:h-[500px] ${
                imageLoading ? "hidden" : "block"
              }`}
            >
              <ProductImageCard
                giftImage='/images/box/demo.png'
                productImage='/images/box/box_1.png'
                giftIcon='🌸'
                alt='Skylarbox'
                className='w-full h-full'
                isHoverToOpen={false}
                onImageChange={(isProduct) => {
                  console.log(
                    "Image changed to:",
                    isProduct ? "product" : "gift"
                  );
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
