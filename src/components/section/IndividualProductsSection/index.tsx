"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";
import { useMultipleDemoLoading } from "@/hooks/useDemoLoading";
import ProductImageCard from "@/components/ui/ProductImageCard";
import { BLUR_DATA_URL } from "@/components/constants";
import { individualProducts } from "@/data/products";

export default function IndividualProductsSection() {
  const { isItemLoaded } = useMultipleDemoLoading(
    individualProducts.length,
    1000
  );

  const addToCart = () => {
    // Add to cart functionality
  };

  return (
    <section className='py-20 bg-cream-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-montserrat font-bold text-brand-brown mb-4'>
            Sản phẩm lẻ
          </h2>
          <p className='text-brand-gray max-w-2xl mx-auto'>
            Khám phá các sản phẩm chữa lành được chọn lọc kỹ lưỡng
          </p>
        </div>

        <div className='flex overflow-x-auto space-x-6 pb-6 max-md:scrollbar-hide'>
          {individualProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='flex-shrink-0 w-72'
            >
              {!isItemLoaded(index) && <ProductCardSkeleton />}
              <div
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-shadow ${
                  !isItemLoaded(index) ? "hidden" : "block"
                }`}
              >
                <div className='h-48 mb-4 relative overflow-hidden rounded-xl'>
                  <div className='relative w-full h-full overflow-hidden rounded-xl'>
                    <Image
                      src={product.productImage}
                      alt={product.name}
                      fill
                      className='object-cover'
                      placeholder='blur'
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </div>
                  <div className='absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded-full z-10'>
                    <p className='text-xs text-brand-gray font-medium'>
                      {product.category}
                    </p>
                  </div>
                </div>
                <h3 className='text-lg font-semibold text-brand-brown mb-2'>
                  {product.name}
                </h3>
                <p className='text-2xl font-bold text-brand-lavender mb-4'>
                  {product.price}
                </p>
                <button
                  onClick={addToCart}
                  className='w-full bg-brand-rose text-white py-2 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
