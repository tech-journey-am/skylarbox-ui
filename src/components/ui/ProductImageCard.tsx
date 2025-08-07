"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/components/constants";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductImageCardProps {
  giftImage: string;
  productImage: string;
  alt: string;
  className?: string;
  title?: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  badge?: string;
  onCardClick?: () => void;
}

export default function ProductImageCard({
  giftImage,
  productImage,
  alt,
  className = "",
  title,
  description,
  price,
  originalPrice,
  badge,
  onCardClick,
}: ProductImageCardProps) {
  const [showProduct, setShowProduct] = useState(false);

  const handleMouseEnter = () => {
    setShowProduct(true);
  };

  const handleMouseLeave = () => {
    setShowProduct(false);
  };

  const handleClick = () => {
    onCardClick?.();
  };

  return (
    <motion.div
      className={`group relative bg-white rounded-[1vw] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Badge - Outside Image Container */}
      {badge && (
        <div className='absolute top-vw-1 left-vw-1 z-10 bg-black/70 text-white px-[0.6vw] py-[0.4vw] rounded-full text-[0.6vw] font-medium'>
          {badge}
        </div>
      )}

      {/* Image Container */}
      <div className='relative min-h-[20vw] overflow-hidden'>
        {/* Gift Box View - Always present but opacity controlled */}
        <motion.div
          className='absolute inset-0 w-full h-full'
          animate={{
            opacity: showProduct ? 0 : 1,
            scale: showProduct ? 0.95 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={giftImage}
            alt={`${alt} - Hộp quà`}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
          />
        </motion.div>

        {/* Product View - Always present but opacity controlled */}
        <motion.div
          className='absolute inset-0 w-full h-full'
          animate={{
            opacity: showProduct ? 1 : 0,
            scale: showProduct ? 1.05 : 1.1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={productImage}
            alt={`${alt} - Sản phẩm`}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
          />
        </motion.div>
      </div>

      {/* Details Section */}
      <div className='p-vw-1'>
        {/* Title */}
        <h3 className='font-semibold text-gray-900 text-[1.2vw] mb-vw line-clamp-2 group-hover:text-brand-rose transition-colors duration-300'>
          {title || alt}
        </h3>

        {/* Description */}
        {description && (
          <p className='text-gray-600 text-[.8vw] mb-vw line-clamp-2 italic'>
            {description}
          </p>
        )}

        {/* Price Section */}
        <div className='flex items-center justify-between mt-auto'>
          <div className='flex items-center gap-2'>
            {originalPrice && (
              <span className='text-gray-400 text-[.8vw] line-through'>
                {originalPrice}
              </span>
            )}
            <span className='text-brand-rose font-bold text-[1.2vw]'>
              {price}
            </span>
          </div>

          {/* Action Button */}
          <div className='flex justify-end gap-[.4vw]'>
            <motion.button
              className='bg-brand-rose text-white p-[0.6vw] rounded-full hover:bg-brand-rose/90 transition-colors duration-300 shadow-md'
              title='Xem chi tiết'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className='w-[1vw] h-[1vw]' />
            </motion.button>
            <motion.button
              className='bg-brand-rose text-white p-[0.6vw] rounded-full hover:bg-brand-rose/90 transition-colors duration-300 shadow-md'
              title='Thêm vào giỏ hàng'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className='w-[1vw] h-[1vw]' />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
