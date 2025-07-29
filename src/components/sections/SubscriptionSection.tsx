"use client";

import { motion } from "framer-motion";
import { ArrowRight, Music, Check, Crown, Gift, Star } from "lucide-react";
import Link from "next/link";

const SubscriptionSection = () => {
  const subscriptionPlans = [
    {
      name: "Gói Tháng",
      price: "299.000đ",
      period: "/tháng",
      originalPrice: null,
      description: "Hoàn hảo để khám phá",
      features: [
        "1 hộp quà chủ đề mỗi tháng",
        "Truy cập Spotify playlist độc quyền",
        "Ưu đãi 5% cho sản phẩm lẻ",
        "Tham gia cộng đồng Skylarbox",
      ],
      buttonText: "Đăng ký ngay",
      buttonClass: "bg-lavender-pastel text-white hover:bg-lavender-pastel/90",
      popular: false,
      icon: Gift,
    },
    {
      name: "Gói Mùa",
      price: "799.000đ",
      period: "/3 tháng",
      originalPrice: "897.000đ",
      description: "Lựa chọn phổ biến nhất",
      features: [
        "3 hộp quà chủ đề (mỗi tháng 1 hộp)",
        "Truy cập Spotify playlist độc quyền",
        "Ưu đãi 10% cho sản phẩm lẻ",
        "Tham gia workshop online",
        "Nhận quà tặng đặc biệt theo mùa",
      ],
      buttonText: "Chọn gói này",
      buttonClass: "bg-sage-green text-white hover:bg-sage-green/90",
      popular: true,
      icon: Star,
    },
    {
      name: "Gói Năm",
      price: "2.899.000đ",
      period: "/năm",
      originalPrice: "3.588.000đ",
      description: "Tiết kiệm 20% + nhiều ưu đãi",
      features: [
        "12 hộp quà chủ đề (mỗi tháng 1 hộp)",
        "Truy cập Spotify playlist độc quyền",
        "Ưu đãi 15% cho tất cả sản phẩm lẻ",
        "Tham gia tất cả workshop",
        "Nhận 2 hộp giới hạn đặc biệt",
        "Hỗ trợ cá nhân hóa từ team Skylarbox",
      ],
      buttonText: "Tiết kiệm nhất",
      buttonClass:
        "bg-butterlight-yellow text-warm-brown hover:bg-butterlight-yellow/90",
      popular: false,
      icon: Crown,
    },
  ];

  const playlists = [
    {
      title: "Morning Healing",
      description: "Bắt đầu ngày mới với năng lượng tích cực",
      tracks: "24 tracks",
      duration: "1h 32m",
      color: "from-butterlight-yellow to-sage-green",
    },
    {
      title: "Evening Reflection",
      description: "Thư giãn và suy ngẫm cuối ngày",
      tracks: "18 tracks",
      duration: "1h 05m",
      color: "from-lavender-pastel to-pastel-rose",
    },
    {
      title: "Deep Focus",
      description: "Tập trung sâu với âm thanh thiên nhiên",
      tracks: "30 tracks",
      duration: "2h 15m",
      color: "from-sage-green to-sky-soft-blue",
    },
    {
      title: "Self-Love Journey",
      description: "Hành trình yêu thương bản thân",
      tracks: "21 tracks",
      duration: "1h 28m",
      color: "from-pastel-rose to-butterlight-yellow",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-r from-[#A67C5A] to-[#A8B39A]'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center lg:text-left'
            >
              <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-6'>
                Subscription chữa lành
              </h2>
              <p className='text-xl text-white/90 leading-relaxed mb-8'>
                Nhận những món quà chữa lành định kỳ, được chọn lọc cẩn thận để
                đồng hành cùng bạn trong hành trình yêu thương bản thân.
              </p>

              {/* Features */}
              <div className='space-y-4 mb-8'>
                {[
                  "🎁 Hộp quà chữa lành hàng tháng",
                  "📖 Sách và tài liệu hướng dẫn",
                  "🕯️ Nến thơm và tinh dầu tự nhiên",
                  "💝 Quà tặng độc quyền từ Skylarbox",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-center text-white/90'
                  >
                    <span className='mr-3 text-2xl'>
                      {feature.split(" ")[0]}
                    </span>
                    <span className='text-lg'>
                      {feature.split(" ").slice(1).join(" ")}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href='/subscription'
                  className='inline-flex items-center px-8 py-4 bg-white text-[#A67C5A] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  Bắt đầu subscription
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Subscription Plans */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              {subscriptionPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 ${
                    plan.popular ? "ring-2 ring-white/50" : ""
                  }`}
                >
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-display font-bold text-white'>
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className='bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                        Phổ biến
                      </span>
                    )}
                  </div>

                  <div className='mb-4'>
                    <span className='text-3xl font-display font-bold text-white'>
                      {plan.price}
                    </span>
                    <span className='text-white/70'>/tháng</span>
                  </div>

                  <ul className='space-y-2 mb-6'>
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center text-white/90'
                      >
                        <Check className='w-4 h-4 mr-2 text-white' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className='w-full bg-white text-[#A67C5A] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300'>
                    Chọn gói này
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
