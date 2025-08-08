"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-cream to-brand-sky/30'>
      <Header />

      {/* Hero Section - Split Screen */}
      <section className='min-h-screen flex flex-col lg:flex-row'>
        {/* Left Side - Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2 bg-gradient-to-br from-brand-lavender/10 to-brand-rose/10 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden'
        >
          {/* Background Image */}
          <div className='absolute inset-0 opacity-10'>
            <Image
              src='/images/box/box_1.png'
              alt='Skylarbox Background'
              fill
              className='object-cover'
            />
          </div>
          <div className='max-w-lg relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-center lg:text-left'
            >
              <h1 className='text-4xl lg:text-6xl font-serif font-medium text-brand-brown mb-6 leading-tight'>
                Câu chuyện của{" "}
                <span className='text-brand-lavender'>Skylarbox</span>
              </h1>
              <p className='text-xl text-brand-gray mb-8 leading-relaxed italic'>
                Mỗi người tìm bình yên theo cách riêng
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Mission */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='lg:w-1/2 bg-gradient-to-br from-brand-sage/10 to-brand-yellow/10 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden'
        >
          {/* Background Image */}
          <div className='absolute inset-0 opacity-10'>
            <Image
              src='/images/box/box_2.png'
              alt='Skylarbox Background'
              fill
              className='object-cover'
            />
          </div>
          <div className='max-w-lg relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-center lg:text-left'
            >
              <h2 className='text-3xl lg:text-4xl font-serif font-medium text-brand-brown mb-6'>
                Sứ mệnh của chúng tôi
              </h2>
              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-6'>
                <blockquote className='text-xl text-brand-brown italic font-medium mb-4'>
                  "Một con người bình an sẽ tạo ra một thế giới bình an."
                </blockquote>
                <p className='text-brand-gray leading-relaxed'>
                  Khi một người tìm được sự yên ổn trong tâm hồn, họ sẽ lan tỏa
                  năng lượng tích cực đến những người xung quanh.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Story Section - Horizontal Split */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left - Story Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl lg:text-4xl font-serif font-medium text-brand-brown mb-8'>
                Câu chuyện ra đời
              </h2>
              <div className='space-y-6 text-brand-gray leading-relaxed'>
                <p>
                  Có một câu nói đã chạm đến trái tim chúng tôi và trở thành
                  nguồn cảm hứng để Skylarbox ra đời.
                </p>
                <p>
                  Từ câu nói ấy, chúng tôi thấy rõ một chân lý giản dị nhưng sâu
                  sắc: mỗi người chúng ta – dù là ai, dù ở đâu – đều có thể góp
                  phần tạo nên một thế giới tốt đẹp hơn bằng cách riêng của
                  mình.
                </p>
                <div className='bg-gradient-to-br from-brand-lavender/10 to-brand-yellow/10 rounded-2xl p-6'>
                  <blockquote className='text-lg text-brand-brown italic font-medium'>
                    "Leave the world a better place when you leave it."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-gradient-to-br from-brand-rose/20 to-brand-lavender/20 rounded-3xl p-12 text-center relative overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0 opacity-20'>
                  <Image
                    src='/images/box/box_3.png'
                    alt='Skylarbox Box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='relative z-10'>
                  <h3 className='text-2xl font-serif font-medium text-brand-brown mb-4'>
                    Nguyên bản
                  </h3>
                  <p className='text-brand-gray italic'>
                    Mỗi hộp quà, mỗi thông điệp đều được tạo ra từ những gì thật
                    nhất.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Vertical Split */}
      <section className='py-20 bg-gradient-to-br from-brand-sage/10 to-brand-cream'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl lg:text-4xl font-serif font-medium text-brand-brown mb-6'>
              Giá trị cốt lõi
            </h2>
            <p className='text-brand-gray text-lg italic'>
              Những nguyên tắc định hướng mọi hành động của chúng tôi
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Left Column */}
            <div className='space-y-8'>
              {/* Authenticity */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden'
              >
                {/* Background Image */}
                <div className='absolute inset-0 opacity-5'>
                  <Image
                    src='/images/box/box_4.png'
                    alt='Skylarbox Box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex items-start gap-4 relative z-10'>
                  <div className='w-16 h-16 bg-gradient-to-br from-brand-lavender/20 to-brand-lavender/40 rounded-full flex items-center justify-center flex-shrink-0'></div>
                  <div>
                    <h3 className='text-xl font-serif font-medium text-brand-brown mb-3'>
                      Nguyên bản
                    </h3>
                    <p className='text-brand-gray leading-relaxed italic'>
                      Chúng tôi tin rằng sự chân thật có một sức mạnh rất riêng
                      – nhẹ nhàng mà sâu sắc.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Gentle */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden'
              >
                {/* Background Image */}
                <div className='absolute inset-0 opacity-5'>
                  <Image
                    src='/images/box/box_5.png'
                    alt='Skylarbox Box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex items-start gap-4 relative z-10'>
                  <div className='w-16 h-16 bg-gradient-to-br from-brand-rose/20 to-brand-rose/40 rounded-full flex items-center justify-center flex-shrink-0'></div>
                  <div>
                    <h3 className='text-xl font-serif font-medium text-brand-brown mb-3'>
                      Dịu dàng
                    </h3>
                    <p className='text-brand-gray leading-relaxed italic'>
                      Skylarbox được sinh ra từ mong muốn: "Giá mà ai đó có thể
                      dịu dàng hơn với mình…"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className='space-y-8'>
              {/* Vibrant */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden'
              >
                {/* Background Image */}
                <div className='absolute inset-0 opacity-5'>
                  <Image
                    src='/images/box/box_6.png'
                    alt='Skylarbox Box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex items-start gap-4 relative z-10'>
                  <div className='w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/40 rounded-full flex items-center justify-center flex-shrink-0'></div>
                  <div>
                    <h3 className='text-xl font-serif font-medium text-brand-brown mb-3'>
                      Sống động
                    </h3>
                    <p className='text-brand-gray leading-relaxed italic'>
                      Chữa lành không nhất thiết phải lặng lẽ hay đơn điệu. Với
                      Skylarbox, hành trình tìm về bình an cũng có thể rực rỡ.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Healing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden'
              >
                {/* Background Image */}
                <div className='absolute inset-0 opacity-5'>
                  <Image
                    src='/images/box/skylar_oracle_1.png'
                    alt='Skylarbox Box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex items-start gap-4 relative z-10'>
                  <div className='w-16 h-16 bg-gradient-to-br from-brand-sage/20 to-brand-sage/40 rounded-full flex items-center justify-center flex-shrink-0'></div>
                  <div>
                    <h3 className='text-xl font-serif font-medium text-brand-brown mb-3'>
                      Lành
                    </h3>
                    <p className='text-brand-gray leading-relaxed italic'>
                      "Lành" không phải là đã hoàn toàn ổn, mà là đang nhẹ lại
                      từng chút một mỗi ngày.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section - Split Screen */}
      <section className='min-h-screen flex flex-col lg:flex-row'>
        {/* Left Side - Message */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='lg:w-1/2 bg-gradient-to-br from-brand-lavender/10 to-brand-sky/10 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden'
        >
          {/* Background Image */}
          <div className='absolute inset-0 opacity-10'>
            <Image
              src='/images/box/skylar_oracle_2.png'
              alt='Skylarbox Background'
              fill
              className='object-cover'
            />
          </div>
          <div className='max-w-lg relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center lg:text-left'
            >
              <h2 className='text-3xl lg:text-4xl font-serif font-medium text-brand-brown mb-8'>
                Một lời nhắn nhỏ
              </h2>
              <div className='space-y-6 text-brand-gray leading-relaxed text-lg'>
                <p>
                  Mỗi người đều có những cách riêng để tìm về sự bình yên trong
                  lòng.
                </p>
                <p>
                  Skylarbox không mang đến phép màu, cũng không vội vã thay đổi
                  bạn. Chúng tôi chỉ hy vọng, khi bạn mở chiếc hộp này – bạn sẽ
                  thấy dịu lại một chút.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='lg:w-1/2 bg-gradient-to-br from-brand-rose/10 to-brand-yellow/10 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden'
        >
          {/* Background Image */}
          <div className='absolute inset-0 opacity-10'>
            <Image
              src='/images/box/the_cam_xuc.png'
              alt='Skylarbox Background'
              fill
              className='object-cover'
            />
          </div>
          <div className='max-w-lg text-center relative z-10'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-serif font-medium text-brand-brown mb-4'>
                Bình yên
              </h3>
              <p className='text-brand-gray italic text-lg'>
                Bởi vì đôi khi, những điều nhỏ nhất lại có sức mạnh lớn nhất.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - Horizontal Split */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left - CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center lg:text-left'
            >
              <h2 className='text-3xl lg:text-4xl font-serif font-medium text-brand-brown mb-6'>
                Bắt đầu hành trình của bạn
              </h2>
              <p className='text-brand-gray mb-8 text-lg italic'>
                Khám phá các hộp quà chữa lành và tìm thấy bình yên theo cách
                riêng của mình
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Link
                  href='/products'
                  className='bg-brand-rose text-white px-8 py-3 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'
                >
                  Khám phá sản phẩm
                </Link>
                <Link
                  href='/'
                  className='border-2 border-brand-lavender text-brand-lavender px-8 py-3 rounded-full hover:bg-brand-lavender/10 transition-colors font-medium'
                >
                  Về trang chủ
                </Link>
              </div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='bg-gradient-to-br from-brand-lavender/20 to-brand-rose/20 rounded-3xl p-12 relative overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0 opacity-20'>
                  <Image
                    src='/images/box/thiep_1.png'
                    alt='Skylarbox Box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='relative z-10'>
                  <h3 className='text-xl font-serif font-medium text-brand-brown mb-3'>
                    Hành trình bắt đầu
                  </h3>
                  <p className='text-brand-gray italic'>
                    Mỗi bước nhỏ đều có ý nghĩa lớn
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
