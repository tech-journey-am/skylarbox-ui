"use client";

import { motion } from "framer-motion";
import { playlists, subscriptionPlans } from "@/data/spotify";

export default function SpotifySubscriptionSection() {
  return (
    <section className='py-20 bg-soft-gradient'>
      <div className='container mx-auto px-4'>
        {/* Spotify Section */}
        <div className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl md:text-4xl font-montserrat font-bold text-brand-brown mb-6'>
                Playlist chữa lành độc quyền
              </h2>
              <p className='text-brand-gray mb-8 leading-relaxed'>
                Khám phá những playlist được chọn lọc đặc biệt cho thành viên
                Skylarbox. Âm nhạc có khả năng chữa lành tâm hồn và mang lại
                bình yên.
              </p>
              <div className='grid grid-cols-2 gap-4 mb-8'>
                {playlists.map((playlist, index) => (
                  <div
                    key={index}
                    className='bg-gradient-to-r from-brand-lavender/20 to-brand-yellow/20 rounded-lg p-4'
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='w-10 h-10 bg-brand-lavender rounded-full flex items-center justify-center'>
                        <svg
                          className='w-5 h-5 text-white'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8 5v14l11-7z' />
                        </svg>
                      </div>
                      <div>
                        <p className='font-medium text-brand-brown'>
                          {playlist}
                        </p>
                        <p className='text-sm text-brand-gray'>Skylarbox</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className='bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'>
                Trở thành thành viên để nghe
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <div className='bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-2xl p-8 h-96 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='w-24 h-24 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-12 h-12 text-green-500'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
                    </svg>
                  </div>
                  <p className='text-lg font-medium text-brand-brown mb-2'>
                    Spotify Premium
                  </p>
                  <p className='text-brand-gray'>
                    Dành cho thành viên Skylarbox
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-montserrat font-bold text-brand-brown mb-4'>
              Các gói Subscription
            </h2>
            <p className='text-brand-gray max-w-2xl mx-auto'>
              Chọn gói phù hợp với nhu cầu chữa lành của bạn
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                  plan.popular ? "ring-2 ring-brand-lavender" : ""
                }`}
              >
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-brand-rose text-white px-4 py-1 rounded-full text-sm font-medium'>
                      {plan.savings}
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-semibold text-brand-brown mb-2'>
                    {plan.name}
                  </h3>
                  <div className='mb-4'>
                    <span className='text-4xl font-bold text-brand-lavender'>
                      {plan.price}
                    </span>
                    <span className='text-brand-gray'>/{plan.period}</span>
                  </div>
                </div>

                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-start space-x-3'
                    >
                      <svg
                        className='w-5 h-5 text-brand-lavender mt-0.5 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                      </svg>
                      <span className='text-brand-gray'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className='w-full bg-brand-rose text-white py-3 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'>
                  Đăng ký ngay
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
