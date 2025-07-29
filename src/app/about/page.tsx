"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Star,
  Lightbulb,
  Users,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Nguyên bản",
      subtitle: "Authenticity",
      description:
        "Chúng tôi tin rằng sự chân thật có một sức mạnh rất riêng – nhẹ nhàng mà sâu sắc. Skylarbox không cố gắng trở nên hoàn hảo hay màu mè. Mỗi hộp quà, mỗi thông điệp đều được tạo ra từ những gì thật nhất.",
      icon: Heart,
      color: "bg-lavender-pastel",
    },
    {
      title: "Dịu dàng",
      subtitle: "Gentle",
      description:
        "Skylarbox được sinh ra từ mong muốn: 'Giá mà ai đó có thể dịu dàng hơn với mình...' Chúng tôi chọn trở thành 'ai đó' ấy – trong một chiếc nến ấm áp, một thẻ bài nhỏ xinh, một lá thư tràn đầy yêu thương.",
      icon: Sparkles,
      color: "bg-sage-green",
    },
    {
      title: "Sống động",
      subtitle: "Real & Vibrant",
      description:
        "Chữa lành không nhất thiết phải lặng lẽ hay đơn điệu. Với Skylarbox, hành trình tìm về bình an cũng có thể rực rỡ, sáng tạo, đầy màu sắc – như chính cuộc sống đang diễn ra xung quanh chúng ta mỗi ngày.",
      icon: Star,
      color: "bg-butterlight-yellow",
    },
    {
      title: "Lành",
      subtitle: "Healing",
      description:
        "'Lành' không phải là đã hoàn toàn ổn, mà là đang nhẹ lại từng chút một mỗi ngày. Skylarbox ở đây để nhắc bạn một điều quan trọng: bạn không cần phải hoàn hảo mới xứng đáng với bình yên.",
      icon: Lightbulb,
      color: "bg-pastel-rose",
    },
  ];

  return (
    <div className='min-h-screen bg-cream-white'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-sage-green/20 to-lavender-pastel/20 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-lavender-pastel/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-4xl mx-auto'
          >
            <h1 className='text-5xl md:text-6xl font-display font-bold text-warm-brown mb-6'>
              Câu chuyện của{" "}
              <span className='skylarbox-text-gradient'>Skylarbox</span>
            </h1>
            <p className='text-xl md:text-2xl text-tea-gray leading-relaxed'>
              "Leave the world a better place when you leave it."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-8'>
                Câu chuyện ra đời của Skylarbox
              </h2>
              <div className='space-y-6 text-tea-gray leading-relaxed'>
                <p>
                  Có một câu nói đã chạm đến trái tim chúng tôi và trở thành
                  nguồn cảm hứng để Skylarbox ra đời:
                </p>
                <blockquote className='text-2xl font-display text-lavender-pastel italic border-l-4 border-lavender-pastel pl-6 my-8'>
                  &ldquo;Leave the world a better place when you leave
                  it.&rdquo;
                </blockquote>
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-gradient-to-br from-lavender-pastel/20 to-sage-green/20 rounded-3xl p-8 skylarbox-shadow'>
                <div className='text-center'>
                  <div className='w-24 h-24 bg-gradient-to-br from-lavender-pastel to-sage-green rounded-full mx-auto mb-6 flex items-center justify-center'>
                    <Heart className='w-12 h-12 text-white' />
                  </div>
                  <h3 className='text-2xl font-display font-bold text-warm-brown mb-4'>
                    Sứ mệnh của chúng tôi
                  </h3>
                  <p className='text-tea-gray leading-relaxed'>
                    ✨ Một con người bình an sẽ tạo ra một thế giới bình an. Khi
                    một người tìm được sự yên ổn trong tâm hồn, họ sẽ lan tỏa
                    năng lượng tích cực đến những người xung quanh.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className='py-20 bg-gradient-to-br from-butterlight-yellow/10 to-pastel-rose/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center max-w-4xl mx-auto'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-8'>
              Lý do chúng tôi tồn tại
            </h2>

            <blockquote className='text-3xl font-display text-sage-green italic mb-8'>
              &ldquo;Be the change you wish to see in the world.&rdquo;
            </blockquote>

            <div className='space-y-6 text-lg text-tea-gray leading-relaxed'>
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

              <blockquote className='text-xl font-display text-lavender-pastel italic border-l-4 border-lavender-pastel pl-6 my-8'>
                "Hành trình chữa lành không bao giờ là cuộc đua, mà là một câu
                chuyện dịu dàng mà bạn kể cho chính mình mỗi ngày"
                <br />- Skylarbox Founder
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4'>
              Giá trị cốt lõi của Skylarbox
            </h2>
            <p className='text-lg text-tea-gray max-w-2xl mx-auto'>
              Bốn giá trị này định hình mọi điều chúng tôi làm, từ cách tạo ra
              sản phẩm đến cách chăm sóc cộng đồng.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-cream-white to-sage-green/5 rounded-3xl p-8 skylarbox-shadow skylarbox-hover'
              >
                <div
                  className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <value.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-2xl font-display font-bold text-warm-brown mb-2'>
                  {value.title}
                </h3>
                <p className='text-tea-gray italic mb-4'>{value.subtitle}</p>
                <p className='text-tea-gray leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className='py-20 bg-gradient-to-br from-lavender-pastel/10 to-sage-green/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center max-w-4xl mx-auto'
          >
            <div className='mb-8'>
              <span className='text-6xl'>☁️</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-8'>
              Một lời nhắn nhỏ từ Skylarbox
            </h2>

            <div className='space-y-6 text-lg text-tea-gray leading-relaxed'>
              <p>
                Mỗi người đều có những cách riêng để tìm về sự bình yên trong
                lòng.
              </p>
              <p>
                Skylarbox không mang đến phép màu, cũng không vội vã thay đổi
                bạn.
              </p>
              <p>
                Chúng tôi chỉ hy vọng, khi bạn mở chiếc hộp này – bạn sẽ thấy
                dịu lại một chút, thấy dễ thở hơn một chút, và thấy lòng mình đủ
                ấm để bước tiếp – dù chỉ là một bước nhỏ.
              </p>
              <p className='text-xl font-display text-lavender-pastel'>
                Bởi vì đôi khi, những điều nhỏ nhất lại có sức mạnh lớn nhất.
              </p>
              <p className='text-xl font-display text-sage-green'>
                Một thế giới lành mạnh hơn bắt đầu từ những điều rất nhẹ nhàng.
              </p>
              <p className='text-2xl font-display font-bold text-warm-brown'>
                Như cách bạn chọn yêu thương chính mình, ngay từ hôm nay.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4'>
              Liên hệ với chúng tôi
            </h2>
            <p className='text-lg text-tea-gray max-w-2xl mx-auto'>
              Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trong hành
              trình chữa lành.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center bg-gradient-to-br from-cream-white to-sage-green/5 rounded-2xl p-6 skylarbox-shadow'
            >
              <div className='w-12 h-12 bg-lavender-pastel rounded-full flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-6 h-6 text-white' />
              </div>
              <h3 className='font-display font-semibold text-warm-brown mb-2'>
                Email
              </h3>
              <p className='text-tea-gray text-sm'>TBC</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-center bg-gradient-to-br from-cream-white to-sage-green/5 rounded-2xl p-6 skylarbox-shadow'
            >
              <div className='w-12 h-12 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-6 h-6 text-white' />
              </div>
              <h3 className='font-display font-semibold text-warm-brown mb-2'>
                Điện thoại
              </h3>
              <p className='text-tea-gray text-sm'>TBC</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center bg-gradient-to-br from-cream-white to-sage-green/5 rounded-2xl p-6 skylarbox-shadow md:col-span-2 lg:col-span-1'
            >
              <div className='w-12 h-12 bg-butterlight-yellow rounded-full flex items-center justify-center mx-auto mb-4'>
                <MapPin className='w-6 h-6 text-warm-brown' />
              </div>
              <h3 className='font-display font-semibold text-warm-brown mb-2'>
                Địa chỉ
              </h3>
              <p className='text-tea-gray text-sm leading-relaxed'>
                Tầng 8, tòa nhà Bạch Đằng Complex
                <br />
                50 Bạch Đằng, Phường Hải Châu
                <br />
                Thành phố Đà Nẵng
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-center mt-12 p-6 bg-lavender-pastel/10 rounded-2xl'
          >
            <h3 className='font-display font-semibold text-warm-brown mb-2'>
              Thông tin doanh nghiệp
            </h3>
            <p className='text-tea-gray'>
              <strong>Công ty TNHH MTV SKYLARBOX</strong>
              <br />
              Mã số thuế: 0402286006
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
