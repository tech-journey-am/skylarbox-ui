"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<"boxes" | "individual">("boxes");

  const themeBoxes = [
    {
      id: 1,
      name: "Vết nứt ánh sáng",
      description: "Kintsugi - Vẻ đẹp từ những vết nứt được hàn gắn bằng vàng",
      price: "599.000đ",
      image: "/placeholder-image.jpg",
      color: "from-butterlight-yellow to-sage-green",
      theme: "Chữa lành và tái sinh",
    },
    {
      id: 2,
      name: "Ngày dịu dàng",
      description: "Những khoảnh khắc nhẹ nhàng cho tâm hồn cần được an ủi",
      price: "549.000đ",
      image: "/placeholder-image.jpg",
      color: "from-pastel-rose to-lavender-pastel",
      theme: "Dịu dàng và bình yên",
    },
    {
      id: 3,
      name: "Tìm lại chính mình",
      description: "Hành trình về với bản thân qua những trải nghiệm sâu sắc",
      price: "649.000đ",
      image: "/placeholder-image.jpg",
      color: "from-sage-green to-sky-soft-blue",
      theme: "Khám phá bản thân",
    },
    {
      id: 4,
      name: "Hãy tha thứ",
      description: "Buông bỏ để nhẹ lòng, tha thứ để được tự do",
      price: "579.000đ",
      image: "/placeholder-image.jpg",
      color: "from-lavender-pastel to-butterlight-yellow",
      theme: "Buông bỏ và tha thứ",
    },
    {
      id: 5,
      name: "Thanh lọc năng lượng",
      description: "Làm sạch không gian và tâm trí với sức mạnh thiên nhiên",
      price: "529.000đ",
      image: "/placeholder-image.jpg",
      color: "from-sage-green to-cream-white",
      theme: "Thanh lọc và tái tạo",
    },
    {
      id: 6,
      name: "May mắn",
      description: "Thu hút năng lượng tích cực và những điều tốt đẹp",
      price: "599.000đ",
      image: "/placeholder-image.jpg",
      color: "from-butterlight-yellow to-pastel-rose",
      theme: "Tích cực và thịnh vượng",
    },
  ];

  const individualProducts = [
    {
      id: 1,
      name: "Bộ bài Skylar Oracle",
      description: "44 lá bài với thông điệp chữa lành độc quyền",
      price: "299.000đ",
      image: "/placeholder-image.jpg",
    },
    {
      id: 2,
      name: "Nến thơm chữa lành",
      description: "Nến sáp đậu nành với tinh dầu tự nhiên",
      price: "199.000đ",
      image: "/placeholder-image.jpg",
    },
    {
      id: 3,
      name: "Sổ tay Skylarbox",
      description: "Sổ tay cao cấp với design độc quyền",
      price: "149.000đ",
      image: "/placeholder-image.jpg",
    },
    {
      id: 4,
      name: "Thiệp chữa lành",
      description: "Bộ 12 thiệp với thông điệp ý nghĩa",
      price: "89.000đ",
      image: "/placeholder-image.jpg",
    },
    {
      id: 5,
      name: "Thư viết tay",
      description: "Dịch vụ viết thư cá nhân hóa",
      price: "199.000đ",
      image: "/placeholder-image.jpg",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-[#F8F6F3] to-[#F2F0ED]'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-[#6B5B4F] mb-4'>
              Sản phẩm chữa lành
            </h2>
            <p className='text-lg text-[#8B7355] max-w-2xl mx-auto'>
              Mỗi sản phẩm được thiết kế với tình yêu thương, giúp bạn tìm thấy
              sự bình yên và chữa lành trong cuộc sống hàng ngày.
            </p>
          </motion.div>

          {/* Featured Products */}
          <div className='mb-20'>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-2xl md:text-3xl font-display font-bold text-[#6B5B4F] mb-8 text-center'
            >
              Hộp quà chữa lành
            </motion.h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {themeBoxes.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group bg-white/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  {/* Product Image */}
                  <div className='relative h-64 bg-gradient-to-br from-[#D4B996] to-[#A67C5A] overflow-hidden'>
                    <div className='absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                      <div className='text-center text-white'>
                        <div className='w-16 h-16 bg-white/30 rounded-2xl mx-auto mb-3 flex items-center justify-center'>
                          <span className='font-display font-bold text-lg'>
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <div className='text-sm font-medium'>
                          {product.theme}
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    {/* The original code had isNew and isPopular, but they are not defined in the new_code.
                        Assuming they are meant to be part of the product object or removed if not used.
                        For now, removing them as they are not in the new_code's products array. */}
                  </div>

                  {/* Product Info */}
                  <div className='p-6'>
                    <h3 className='text-xl font-display font-bold text-[#6B5B4F] mb-2 group-hover:text-[#A67C5A] transition-colors'>
                      {product.name}
                    </h3>
                    <p className='text-[#8B7355] text-sm mb-4 leading-relaxed'>
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className='flex items-center mb-4'>
                      <div className='flex items-center mr-2'>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(5) // Assuming a default rating for placeholder
                                ? "text-[#E8C4A0] fill-current"
                                : "text-gray-300"
                            }`}
                            viewBox='0 0 20 20'
                          >
                            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                          </svg>
                        ))}
                      </div>
                      <span className='text-sm text-[#8B7355]'>
                        {5} ({0}) đánh giá
                      </span>
                    </div>

                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-2'>
                        <span className='text-2xl font-display font-bold text-[#A67C5A]'>
                          {product.price}
                        </span>
                        {/* The original code had originalPrice, but it's not in the new_code's products array.
                            Assuming it's meant to be part of the product object or removed if not used.
                            For now, removing it as it's not in the new_code's products array. */}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className='w-full bg-[#A67C5A] text-white py-3 rounded-xl font-semibold hover:bg-[#8B7355] transition-colors duration-300'>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-2xl md:text-3xl font-display font-bold text-[#6B5B4F] mb-8 text-center'
            >
              Phụ kiện chữa lành
            </motion.h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {individualProducts.map((accessory, index) => (
                <motion.div
                  key={accessory.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group bg-white/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  {/* Accessory Image */}
                  <div className='relative h-48 bg-gradient-to-br from-[#A8B39A] to-[#E8C4A0] overflow-hidden'>
                    <div className='absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                      <div className='text-center text-white'>
                        <div className='w-12 h-12 bg-white/30 rounded-xl mx-auto mb-2 flex items-center justify-center'>
                          <span className='font-display font-bold text-sm'>
                            {accessory.name.charAt(0)}
                          </span>
                        </div>
                        <div className='text-xs font-medium'>
                          {accessory.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accessory Info */}
                  <div className='p-4'>
                    <h4 className='font-display font-bold text-[#6B5B4F] mb-2 group-hover:text-[#A67C5A] transition-colors'>
                      {accessory.name}
                    </h4>
                    <p className='text-[#8B7355] text-xs mb-3 leading-relaxed'>
                      {accessory.description}
                    </p>

                    {/* Rating */}
                    <div className='flex items-center mb-3'>
                      <div className='flex items-center mr-2'>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(5) // Assuming a default rating for placeholder
                                ? "text-[#E8C4A0] fill-current"
                                : "text-gray-300"
                            }`}
                            viewBox='0 0 20 20'
                          >
                            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                          </svg>
                        ))}
                      </div>
                      <span className='text-xs text-[#8B7355]'>
                        {5} ({0})
                      </span>
                    </div>

                    {/* Price */}
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-2'>
                        <span className='text-lg font-display font-bold text-[#A67C5A]'>
                          {accessory.price}
                        </span>
                        {/* The original code had originalPrice, but it's not in the new_code's accessories array.
                            Assuming it's meant to be part of the accessory object or removed if not used.
                            For now, removing it as it's not in the new_code's accessories array. */}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className='w-full bg-[#A67C5A] text-white py-2 rounded-lg font-semibold hover:bg-[#8B7355] transition-colors duration-300 text-sm'>
                      Thêm vào giỏ
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
