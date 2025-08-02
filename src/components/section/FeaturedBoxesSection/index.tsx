"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/components/constants";
import { BoxCardSkeleton } from "@/components/ui/Skeleton";
import { useMultipleDemoLoading } from "@/hooks/useDemoLoading";

const featuredBoxes = [
  {
    name: "Vết nứt ánh sáng",
    description: "Hộp chủ đề kintsugi - nghệ thuật chữa lành vết nứt bằng vàng",
    price: "599.000đ",
    color: "bg-gradient-to-br from-brand-rose/20 to-brand-rose/40",
    image: "/images/box/box_1.png",
  },
  {
    name: "Ngày dịu dàng",
    description: "Tone màu pastel nhẹ nhàng cho những ngày cần sự dịu dàng",
    price: "549.000đ",
    color: "bg-gradient-to-br from-brand-lavender/20 to-brand-lavender/40",
    image: "/images/box/box_2.png",
  },
  {
    name: "Tìm lại chính mình",
    description: "Thiết kế minimalist giúp bạn kết nối với bản thân",
    price: "649.000đ",
    color: "bg-gradient-to-br from-brand-cream to-brand-cream/80",
    image: "/images/box/box_3.png",
  },
  {
    name: "Hãy tha thứ",
    description: "Lá thư và nến thơm giúp bạn buông bỏ và tha thứ",
    price: "499.000đ",
    color: "bg-gradient-to-br from-brand-sky/20 to-brand-sky/40",
    image: "/images/box/box_4.png",
  },
  {
    name: "Thanh lọc năng lượng",
    description: "Các yếu tố thiên nhiên giúp thanh lọc tâm hồn",
    price: "699.000đ",
    color: "bg-gradient-to-br from-brand-sage/20 to-brand-sage/40",
    image: "/images/box/box_5.png",
  },
  {
    name: "May mắn",
    description: "Thiết kế rực rỡ mang lại may mắn và niềm vui",
    price: "599.000đ",
    color: "bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/40",
    image: "/images/box/box_6.png",
  },
];

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
                className={`${
                  box.color
                } rounded-2xl p-6 h-80 relative overflow-hidden transition-transform group-hover:scale-105 ${
                  !isItemLoaded(index) ? "hidden" : "block"
                }`}
              >
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='relative w-32 h-32 mx-auto mb-4'>
                      <Image
                        src={box.image}
                        alt={box.name}
                        fill
                        className='object-contain rounded-lg'
                        placeholder='blur'
                        blurDataURL={BLUR_DATA_URL}
                      />
                    </div>
                    <h3 className='text-xl font-semibold text-brand-brown mb-2'>
                      {box.name}
                    </h3>
                    <p className='text-brand-gray text-sm mb-4'>
                      {box.description}
                    </p>
                    <p className='text-2xl font-bold text-brand-lavender'>
                      {box.price}
                    </p>
                  </div>
                </div>
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
