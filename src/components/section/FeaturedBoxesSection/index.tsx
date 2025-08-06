"use client";

import { motion } from "framer-motion";
import { BoxCardSkeleton } from "@/components/ui/Skeleton";
import { useMultipleDemoLoading } from "@/hooks/useDemoLoading";
import ProductImageCard from "@/components/ui/ProductImageCard";
import { featuredBoxes } from "@/data/featuredBoxes";

export default function FeaturedBoxesSection() {
  const { isItemLoaded } = useMultipleDemoLoading(featuredBoxes.length, 1000);

  return (
    <section className='py-20 bg-product-gradient'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-montserrat font-bold text-brand-brown mb-4'>
            Các hộp chủ đề Skylarbox
          </h2>
          <p className='text-brand-gray max-w-2xl mx-auto'>
            Mỗi hộp quà được thiết kế với chủ đề riêng biệt, mang đến trải
            nghiệm chữa lành độc đáo
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {featuredBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group cursor-pointer'
            >
              {!isItemLoaded(index) && <BoxCardSkeleton />}
              <div
                className={`rounded-2xl h-96 relative overflow-hidden transition-transform group-hover:scale-105 ${
                  !isItemLoaded(index) ? "hidden" : "block"
                }`}
              >
                <ProductImageCard
                  giftImage={box.giftImage}
                  productImage={box.productImage}
                  giftIcon={box.giftIcon}
                  alt={box.name}
                  className='w-full h-full'
                  showDetails={true}
                  giftTitle={`${box.name} - ${box.price}`}
                  giftSubtitle={box.description}
                  productTitle={`${box.name} - ${box.price}`}
                  productSubtitle={box.description}
                  isHoverToOpen={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className='text-center'>
          <button className='bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'>
            Xem tất cả các hộp chủ đề
          </button>
        </div>
      </div>
    </section>
  );
}
