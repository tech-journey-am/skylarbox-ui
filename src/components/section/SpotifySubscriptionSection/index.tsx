"use client";

import { motion } from "framer-motion";
import { playlists, subscriptionPlans } from "@/data/spotify";
import { Play, Star, X } from "lucide-react";
import Image from "next/image";

export default function SpotifySubscriptionSection() {
  return (
    <section className='py-vw-6 bg-soft-gradient'>
      <div className='container mx-auto px-4'>
        {/* Spotify Section */}
        <div className='mb-vw-6'>
          <div className='grid lg:grid-cols-2 gap-vw-2 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className='text-[2vw] uppercase font-serif font-bold text-neutral-700 mb-vw-1'
              >
                Playlist{" "}
                <span className='text-brand-rose'>chữa lành độc quyền</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className='text-brand-gray text-[1vw] mb-vw-2 leading-relaxed italic'
              >
                Khám phá những playlist được chọn lọc đặc biệt cho thành viên
                Skylarbox. Âm nhạc có khả năng chữa lành tâm hồn và mang lại
                bình yên.
              </motion.p>
              <div className='grid grid-cols-2 gap-vw-1 mb-vw-1'>
                {playlists.map((playlist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 * index,
                    }}
                  >
                    <motion.div
                      className='flex items-center space-x-vw-1 bg-gradient-to-r cursor-pointer from-brand-rose/20 to-brand-yellow/20 rounded-lg p-vw-1'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.button
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                        className='w-[2vw] h-[2vw] bg-brand-rose rounded-full flex items-center justify-center'
                      >
                        <Play className='w-[1vw] h-[1vw] text-white' />
                      </motion.button>
                      <div>
                        <p className='font-medium text-[1vw] text-neutral-700'>
                          {playlist}
                        </p>
                        <p className='text-[.8vw] text-brand-gray'>Skylarbox</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className='bg-brand-rose text-white px-[1.2vw] py-[0.6vw] rounded-full text-[1vw] font-semibold hover:bg-brand-rose/90 transition-colors duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                Trở thành thành viên để nghe
              </motion.button>
            </motion.div>
            {/* CTA Spotify Premium */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <div className='rounded-2xl p-[2vw] h-[28vw] flex items-center justify-center relative overflow-hidden'>
                <Image
                  src='/images/spotify-bg.png'
                  alt='Spotify Premium'
                  fill
                  className='object-cover'
                />
                <div className='text-center z-[1]'>
                  <motion.button
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className='w-[6vw] h-[6vw] bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4'
                  >
                    <svg
                      className='w-[4vw] h-[4vw] text-green-500'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div>
          <div className='text-center mb-vw-3'>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className='text-[3vw] uppercase font-serif font-bold text-neutral-700 mb-vw-1'
            >
              Các gói <span className='text-brand-lavender'>Subscription</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className='text-brand-gray text-[1.2vw] text-center italic'
            >
              Chọn gói phù hợp với nhu cầu chữa lành của bạn
            </motion.p>
          </div>

          <div className='grid md:grid-cols-3 gap-vw-2'>
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                }}
                className={`relative bg-white rounded-[1vw] p-[2vw] shadow-sm hover:shadow-md transition-shadow ${
                  plan.popular ? "ring-2 ring-brand-lavender" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <div className='absolute -top-[3vw] left-1/2 transform -translate-x-1/2'>
                      <span className='bg-brand-lavender text-white px-[1vw] py-[.5vw] rounded-full text-[1vw] font-medium'>
                        {plan.savings}
                      </span>
                    </div>
                  </motion.div>
                )}

                <div className='text-center mb-vw-1'>
                  <h3 className='text-[1.5vw] font-semibold text-neutral-700 mb-[.2vw]'>
                    {plan.name}
                  </h3>
                  <div className='mb-vw-1'>
                    <span className='text-[2vw] font-bold text-brand-lavender'>
                      {plan.price}
                    </span>
                    <span className='text-brand-gray text-[.8vw]'>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className='space-y-vw-1 mb-vw-2'>
                  {plan.features.map((feature, featureIndex) => {
                    return (
                      <li
                        key={featureIndex}
                        className='flex items-start space-x-vw-1'
                      >
                        {feature.included ? (
                          <Star className='w-[1vw] h-[1vw] text-brand-lavender mt-[.5vw] flex-shrink-0' />
                        ) : (
                          <X className='w-[1vw] h-[1vw] text-red-400 mt-[.5vw] flex-shrink-0' />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-brand-gray text-[1vw]"
                              : "text-brand-gray text-[1vw] line-through opacity-60"
                          }
                        >
                          {feature.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <motion.button
                  className='bg-brand-lavender text-white px-[1.2vw] w-full py-[0.6vw] rounded-full text-[1vw] font-semibold hover:bg-brand-lavender/90 transition-colors duration-300'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Đăng ký ngay
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
