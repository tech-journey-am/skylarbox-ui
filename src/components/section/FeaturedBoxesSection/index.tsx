"use client";

import { motion } from "framer-motion";
import ProductImageCard from "@/components/ui/ProductImageCard";
import { featuredBoxes } from "@/data/featuredBoxes";

export default function FeaturedBoxesSection() {
  return (
    <section className='py-8 md:py-vw-4 bg-product-gradient'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 md:mb-vw-4'>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className='text-2xl md:text-[3vw] uppercase font-serif font-bold text-neutral-700 mb-2 md:mb-vw-1'
          >
            Các hộp chủ đề <span className='text-brand-rose'>Skylarbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className='text-brand-gray text-sm md:text-[1.2vw] text-center italic'
          >
            Mỗi hộp quà được thiết kế với chủ đề riêng biệt, mang đến trải
            nghiệm chữa lành độc đáo
          </motion.p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-vw-2 mb-8 md:mb-vw-4'>
          {featuredBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
              className='group cursor-pointer'
            >
              <ProductImageCard
                giftImage={box.giftImage}
                productImage={box.productImage}
                alt={box.name}
                className='w-full h-full '
                title={box.name}
                description={box.description}
                price={box.price}
                badge={box.badge}
                onCardClick={() => {
                  // Handle card click - could navigate to product detail page
                  console.log(`Clicked on ${box.name}`);
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className='text-center'>
          <motion.button
            className='bg-brand-rose text-white px-6 py-3 md:px-[1.2vw] md:py-[0.6vw] rounded-full text-sm md:text-[1.2vw] font-semibold hover:bg-brand-rose/90 transition-colors duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Xem tất cả các hộp chủ đề
          </motion.button>
        </div>
      </div>
    </section>
  );
}
