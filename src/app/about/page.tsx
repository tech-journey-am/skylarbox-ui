"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-cream to-brand-sky/30'>
      <Header />

      {/* Hero Section */}
      <section className='pb-20 pt-32 bg-gradient-to-br from-brand-cream to-brand-sky/20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-4xl mx-auto'
          >
            <h1 className='text-4xl md:text-6xl font-montserrat font-medium text-brand-brown mb-6 leading-tight'>
              Câu chuyện của{" "}
              <span className='text-brand-lavender'>Skylarbox</span>
            </h1>
            <p className='text-xl text-brand-gray mb-8 leading-relaxed'>
              Mỗi người tìm bình yên theo cách riêng
            </p>
            <div className='w-24 h-24 bg-gradient-to-br from-brand-lavender/30 to-brand-yellow/30 rounded-full flex items-center justify-center mx-auto mb-8'>
              <span className='text-4xl'>🌸</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-montserrat font-medium text-brand-brown mb-8 text-center'>
                Câu chuyện ra đời của Skylarbox
              </h2>
              <div className='bg-gradient-to-br from-brand-lavender/10 to-brand-yellow/10 rounded-2xl p-8 mb-8'>
                <blockquote className='text-xl text-brand-brown italic text-center font-medium'>
                  "Leave the world a better place when you leave it."
                </blockquote>
              </div>
              <div className='space-y-6 text-brand-gray leading-relaxed'>
                <p>
                  Có một câu nói đã chạm đến trái tim chúng tôi và trở thành
                  nguồn cảm hứng để Skylarbox ra đời.
                </p>
                <p>
                  Từ câu nói ấy, chúng tôi thấy rõ một chân lý giản dị nhưng sâu
                  sắc: mỗi người chúng ta – dù là ai, dù ở đâu – đều có thể góp
                  phần tạo nên một thế giới tốt đẹp hơn bằng cách riêng của
                  mình. Và con đường để đến được điều đó, chúng tôi tin rằng,
                  bắt đầu từ chính bên trong mỗi người – từ sự chữa lành và bình
                  an nội tại.
                </p>
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <h3 className='text-2xl md:text-3xl font-montserrat font-medium text-brand-brown mb-6'>
                Sứ mệnh mà chúng tôi ôm ấp
              </h3>
              <div className='bg-gradient-to-br from-brand-sage/10 to-brand-cream rounded-2xl p-8 mb-6'>
                <p className='text-lg text-brand-brown font-medium mb-4'>
                  ✨ Một con người bình an sẽ tạo ra một thế giới bình an.
                </p>
                <p className='text-brand-gray leading-relaxed'>
                  Khi một người tìm được sự yên ổn trong tâm hồn, họ sẽ lan tỏa
                  năng lượng tích cực đến những người xung quanh. Và khi nhiều
                  người cùng bình an như vậy, thế giới sẽ tự nhiên trở nên nhiều
                  hòa bình hơn, yêu thương hơn, lành mạnh hơn – từ sâu bên trong
                  lan rộng ra ngoài.
                </p>
              </div>
              <div className='space-y-4 text-brand-gray leading-relaxed'>
                <p>
                  Chữa lành, trong quan niệm của chúng tôi, không nhất thiết
                  phải gắn liền với những điều lớn lao cần chữa lành. Đôi khi,
                  nó nhẹ nhàng như việc bạn chọn buông bỏ những suy nghĩ không
                  tích cực đang làm phiền, hay đơn giản chỉ là làm sạch lại năng
                  lượng của mình sau một ngày đầy bận rộn.
                </p>
                <p>
                  Chữa lành, nhiều lúc, chỉ là giúp bản thân trở nên lành mạnh
                  hơn từng ngày một cách nhẹ nhàng nhất.
                </p>
              </div>
            </motion.div>

            {/* Why We Exist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <h3 className='text-2xl md:text-3xl font-montserrat font-medium text-brand-brown mb-6'>
                Lý do chúng tôi tồn tại
              </h3>
              <div className='bg-gradient-to-br from-brand-yellow/10 to-brand-rose/10 rounded-2xl p-8 mb-6'>
                <p className='text-lg text-brand-brown font-medium mb-4'>
                  "Be the change you wish to see in the world."
                </p>
              </div>
              <div className='space-y-4 text-brand-gray leading-relaxed'>
                <p>
                  Skylarbox được nuôi dưỡng bởi một niềm tin khác, cũng không
                  kém phần ý nghĩa.
                </p>
                <p>
                  Chúng tôi không ôm mộng thay đổi cả thế giới – điều đó quá lớn
                  lao và không thực tế. Thay vào đó, chúng tôi chỉ mong được là
                  một người bạn nhỏ bé, đồng hành cùng bạn trong hành trình học
                  cách dịu dàng hơn với chính mình.
                </p>
                <p>
                  Bởi vì chúng tôi tin rằng, khi bạn bắt đầu yêu thương và chăm
                  sóc bản thân một cách chân thành, từ chính bạn – một thế giới
                  đẹp hơn sẽ âm thầm bắt đầu. Và đó chính là lý do Skylarbox tồn
                  tại: để được là một phần nhỏ trong câu chuyện tuyệt đẹp ấy của
                  bạn.
                </p>
              </div>
              <div className='bg-gradient-to-br from-brand-lavender/10 to-brand-sky/10 rounded-2xl p-6 mt-8'>
                <blockquote className='text-lg text-brand-brown italic text-center'>
                  "Hành trình chữa lành không bao giờ là cuộc đua, mà là một câu
                  chuyện dịu dàng mà bạn kể cho chính mình mỗi ngày" - Skylarbox
                  Founder.
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-20 bg-gradient-to-br from-brand-sage/10 to-brand-cream'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-montserrat font-medium text-brand-brown mb-6'>
                Giá trị cốt lõi của Skylarbox
              </h2>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8'>
              {/* Authenticity */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-brand-lavender/20 to-brand-lavender/40 rounded-full flex items-center justify-center mb-6'>
                  <span className='text-2xl'>💎</span>
                </div>
                <h3 className='text-xl font-montserrat font-medium text-brand-brown mb-4'>
                  Nguyên bản – Authenticity
                </h3>
                <p className='text-brand-gray leading-relaxed'>
                  Chúng tôi tin rằng sự chân thật có một sức mạnh rất riêng –
                  nhẹ nhàng mà sâu sắc. Skylarbox không cố gắng trở nên hoàn hảo
                  hay màu mè. Mỗi hộp quà, mỗi thông điệp đều được tạo ra từ
                  những gì thật nhất.
                </p>
              </motion.div>

              {/* Gentle */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-brand-rose/20 to-brand-rose/40 rounded-full flex items-center justify-center mb-6'>
                  <span className='text-2xl'>🌸</span>
                </div>
                <h3 className='text-xl font-montserrat font-medium text-brand-brown mb-4'>
                  Dịu dàng – Gentle
                </h3>
                <p className='text-brand-gray leading-relaxed'>
                  Skylarbox được sinh ra từ mong muốn: "Giá mà ai đó có thể dịu
                  dàng hơn với mình…" Và rồi, chúng tôi chọn trở thành "ai đó"
                  ấy – trong một chiếc nến ấm áp, một thẻ bài nhỏ xinh, một lá
                  thư tràn đầy yêu thương.
                </p>
              </motion.div>

              {/* Vibrant */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/40 rounded-full flex items-center justify-center mb-6'>
                  <span className='text-2xl'>✨</span>
                </div>
                <h3 className='text-xl font-montserrat font-medium text-brand-brown mb-4'>
                  Sống động – Real & Vibrant
                </h3>
                <p className='text-brand-gray leading-relaxed'>
                  Chữa lành không nhất thiết phải lặng lẽ hay đơn điệu. Với
                  Skylarbox, hành trình tìm về bình an cũng có thể rực rỡ, sáng
                  tạo, đầy màu sắc – như chính cuộc sống đang diễn ra xung quanh
                  chúng ta mỗi ngày.
                </p>
              </motion.div>

              {/* Healing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-brand-sage/20 to-brand-sage/40 rounded-full flex items-center justify-center mb-6'>
                  <span className='text-2xl'>🌿</span>
                </div>
                <h3 className='text-xl font-montserrat font-medium text-brand-brown mb-4'>
                  Lành – Healing
                </h3>
                <p className='text-brand-gray leading-relaxed'>
                  "Lành" không phải là đã hoàn toàn ổn, mà là đang nhẹ lại từng
                  chút một mỗi ngày. Skylarbox ở đây để nhắc bạn một điều quan
                  trọng: bạn không cần phải hoàn hảo mới xứng đáng với bình yên.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-brand-lavender/30 to-brand-yellow/30 rounded-full flex items-center justify-center mx-auto mb-8'>
                <span className='text-3xl'>☁️</span>
              </div>
              <h2 className='text-2xl md:text-3xl font-montserrat font-medium text-brand-brown mb-8'>
                Một lời nhắn nhỏ từ Skylarbox
              </h2>
              <div className='space-y-6 text-brand-gray leading-relaxed text-lg'>
                <p>
                  Mỗi người đều có những cách riêng để tìm về sự bình yên trong
                  lòng.
                </p>
                <p>
                  Skylarbox không mang đến phép màu, cũng không vội vã thay đổi
                  bạn. Chúng tôi chỉ hy vọng, khi bạn mở chiếc hộp này – bạn sẽ
                  thấy dịu lại một chút, thấy dễ thở hơn một chút, và thấy lòng
                  mình đủ ấm để bước tiếp – dù chỉ là một bước nhỏ.
                </p>
                <p>
                  Bởi vì đôi khi, những điều nhỏ nhất lại có sức mạnh lớn nhất.
                </p>
                <p>
                  Một thế giới lành mạnh hơn bắt đầu từ những điều rất nhẹ
                  nhàng. Như cách bạn chọn yêu thương chính mình, ngay từ hôm
                  nay.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-brand-lavender/10 to-brand-rose/10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl md:text-4xl font-montserrat font-medium text-brand-brown mb-6'>
                Bắt đầu hành trình của bạn
              </h2>
              <p className='text-brand-gray mb-8 text-lg'>
                Khám phá các hộp quà chữa lành và tìm thấy bình yên theo cách
                riêng của mình
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
