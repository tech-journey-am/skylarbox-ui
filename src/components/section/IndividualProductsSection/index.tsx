"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/components/constants";
import { featuredBoxes } from "@/data";
import { Eye, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function IndividualProductsSection() {
  const addToCart = () => {
    // Add to cart functionality
  };

  return (
    <section className='py-vw-4 bg-cream-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-vw-4'>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className='text-[3vw] uppercase font-serif font-bold text-neutral-700 mb-vw-1'
          >
            Sản phẩm lẻ <span className='text-brand-lavender'>Skylarbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className='text-brand-gray text-[1.2vw] text-center italic'
          >
            Khám phá các sản phẩm chữa lành được chọn lọc kỹ lưỡng
          </motion.p>
        </div>

        {/* Swiper Slider */}
        <div className='relative'>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className='product-swiper'
          >
            {featuredBoxes.map((product, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.15 * index,
                  }}
                  className='h-full'
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className='swiper-pagination !bottom-vw-1 !left-1/2 !transform !-translate-x-1/2 !z-20'></div>
        </div>
      </div>

      <style jsx global>{`
        .product-swiper {
          padding-bottom: 4vw;
          padding-top: 4vw;
          margin-top: -4vw;
        }

        .swiper-pagination-bullet {
          width: 0.8vw !important;
          height: 0.8vw !important;
          background: #c4d4a8 !important;
          opacity: 0.3 !important;
          margin: 0 0.2vw !important;
          transition: all 0.3s ease !important;
          cursor: pointer;
        }

        .swiper-pagination-bullet-active {
          background: #b08bd4 !important;
          opacity: 1 !important;
          box-shadow: 0 0.2vw 0.8vw rgba(176, 139, 212, 0.3) !important;
        }
      `}</style>
    </section>
  );
}

interface ProductCardProps {
  product: any;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const [showProduct, setShowProduct] = useState(false);

  const handleMouseEnter = () => {
    setShowProduct(true);
  };

  const handleMouseLeave = () => {
    setShowProduct(false);
  };

  const addToCart = () => {
    // Add to cart functionality
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='flex-shrink-0 w-vw-20 px-vw-1'
    >
      <motion.div
        className='group relative bg-white rounded-[1vw] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Badge */}
        {product.badge && (
          <div className='absolute top-vw-1 left-vw-1 z-10 bg-white/70 text-neutral-700 px-[0.6vw] py-[0.4vw] rounded-full text-[0.6vw] font-medium'>
            {product.badge}
          </div>
        )}

        {/* Image Container */}
        <div className='relative h-vw-16 overflow-hidden'>
          {/* Product View */}
          <motion.div
            className='absolute inset-0 w-full h-full'
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={product.productImage}
              alt={`${product.name} - Sản phẩm`}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className='p-vw-1'>
          {/* Title */}
          <div>
            <h3 className='font-semibold text-gray-900 text-[1.2vw] mb-vw line-clamp-2 group-hover:text-brand-lavender transition-colors duration-300'>
              {product.name}
            </h3>

            {/* Description */}
            {product.description && (
              <p className='text-gray-600 text-[.8vw] mb-vw line-clamp-2 italic'>
                {product.description}
              </p>
            )}

            <div className='flex items-center justify-between'>
              <span className='text-brand-lavender font-bold text-[1.2vw]'>
                {product.price}
              </span>
              {/* Action Button */}
              <div className='flex justify-end gap-[.4vw]'>
                <motion.button
                  className='bg-brand-lavender text-white p-[0.6vw] rounded-full hover:bg-brand-lavender/90 transition-colors duration-300 shadow-md'
                  title='Xem chi tiết'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className='w-[1vw] h-[1vw]' />
                </motion.button>
                <motion.button
                  className='bg-brand-lavender text-white p-[0.6vw] rounded-full hover:bg-brand-lavender/90 transition-colors duration-300 shadow-md'
                  title='Thêm vào giỏ hàng'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingCart className='w-[1vw] h-[1vw]' />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
