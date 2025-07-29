"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Star,
  Users,
  Camera,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const CommunitySection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Minh Thu",
      age: 28,
      avatar: "/placeholder-image.jpg",
      role: "Marketing Manager",
      text: "Tôi đã tìm thấy sự bình an trong những chiếc hộp Skylarbox. Mỗi món quà đều như một lời nhắc nhở dịu dàng rằng mình cần dừng lại và chăm sóc bản thân.",
      rating: 5,
      product: "Hộp 'Ngày dịu dàng'",
      joinedDate: "Thành viên từ 2023",
    },
    {
      id: 2,
      name: "Lan Anh",
      age: 24,
      avatar: "/placeholder-image.jpg",
      role: "Graphic Designer",
      text: "Cộng đồng Skylarbox thật sự đặc biệt. Ở đây tôi không chỉ nhận được những món quà ý nghĩa mà còn được chia sẻ hành trình chữa lành cùng những người bạn đồng điệu.",
      rating: 5,
      product: "Gói subscription 6 tháng",
      joinedDate: "Thành viên từ 2024",
    },
    {
      id: 3,
      name: "Quỳnh Như",
      age: 31,
      avatar: "/placeholder-image.jpg",
      role: "Teacher",
      text: "Những buổi workshop của Skylarbox đã giúp tôi hiểu rõ hơn về bản thân. Tôi học được cách yêu thương và tha thứ cho chính mình một cách chân thành.",
      rating: 5,
      product: "Workshop 'Tự yêu thương'",
      joinedDate: "Thành viên từ 2023",
    },
  ];

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Forum cộng đồng",
      description:
        "Chia sẻ câu chuyện, kết nối và hỗ trợ lẫn nhau trong hành trình chữa lành",
      color: "bg-lavender-pastel",
    },
    {
      icon: Camera,
      title: "Chia sẻ hình ảnh",
      description: "Khoe những khoảnh khắc đẹp với hashtag #SkylarboxJourney",
      color: "bg-sage-green",
    },
    {
      icon: Users,
      title: "Workshop định kỳ",
      description:
        "Tham gia các buổi học online về mindfulness, self-care và chữa lành",
      color: "bg-butterlight-yellow",
    },
    {
      icon: Heart,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ chăm sóc khách hàng luôn sẵn sàng lắng nghe và hỗ trợ bạn",
      color: "bg-pastel-rose",
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder-image.jpg",
      likes: 234,
      caption: "Mở hộp 'Vết nứt ánh sáng' và cảm nhận được sự ấm áp...",
      author: "@minhthu_healing",
    },
    {
      id: 2,
      image: "/placeholder-image.jpg",
      likes: 189,
      caption: "Buổi sáng bình yên với nến thơm Skylarbox",
      author: "@lananh_selfcare",
    },
    {
      id: 3,
      image: "/placeholder-image.jpg",
      likes: 156,
      caption: "Skylar Oracle cards - thông điệp dành cho hôm nay",
      author: "@quynh_mindful",
    },
    {
      id: 4,
      image: "/placeholder-image.jpg",
      likes: 298,
      caption: "Không gian chữa lành của tôi với Skylarbox",
      author: "@healingspace_vn",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-pastel-rose/10 to-lavender-pastel/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4'>
            Cộng đồng & Testimonials
          </h2>
          <p className='text-lg text-tea-gray max-w-2xl mx-auto'>
            Hãy lắng nghe những câu chuyện chân thật từ cộng đồng Skylarbox -
            nơi mỗi người đều tìm thấy sự bình yên theo cách riêng của mình.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-3xl p-8 skylarbox-shadow skylarbox-hover'
            >
              {/* Rating Stars */}
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 text-butterlight-yellow fill-current'
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className='text-tea-gray leading-relaxed mb-6 italic'>
                "{testimonial.text}"
              </blockquote>

              {/* User Info */}
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-lavender-pastel to-sage-green rounded-full flex items-center justify-center mr-4'>
                  <span className='text-white font-display font-bold'>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className='font-display font-semibold text-warm-brown'>
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className='text-tea-gray text-sm'>
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className='border-t border-sage-green/20 pt-4 space-y-2'>
                <div className='text-sm text-lavender-pastel font-medium'>
                  {testimonial.product}
                </div>
                <div className='text-xs text-tea-gray'>
                  {testimonial.joinedDate}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h3 className='text-3xl md:text-4xl font-display font-bold text-warm-brown mb-4'>
            Kết nối và phát triển cùng nhau
          </h3>
          <p className='text-lg text-tea-gray max-w-2xl mx-auto mb-12'>
            Tham gia cộng đồng Skylarbox để trải nghiệm những hoạt động ý nghĩa
            và kết nối với những người cùng chung hành trình.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center group cursor-pointer'
              >
                <div
                  className={`w-20 h-20 ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className='w-10 h-10 text-white' />
                </div>
                <h4 className='font-display font-semibold text-warm-brown mb-2'>
                  {feature.title}
                </h4>
                <p className='text-tea-gray text-sm'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h3 className='text-3xl md:text-4xl font-display font-bold text-warm-brown mb-4'>
            #SkylarboxJourney
          </h3>
          <p className='text-lg text-tea-gray max-w-2xl mx-auto mb-12'>
            Cùng chia sẻ những khoảnh khắc đẹp trong hành trình chữa lành của
            bạn. Sử dụng hashtag #SkylarboxJourney để kết nối với cộng đồng.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative aspect-square bg-gradient-to-br from-lavender-pastel/20 to-sage-green/20 rounded-2xl overflow-hidden skylarbox-hover cursor-pointer'
              >
                {/* Instagram Post Mockup */}
                <div className='absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                  <div className='text-center text-warm-brown'>
                    <Camera className='w-8 h-8 mx-auto mb-2' />
                    <div className='text-xs opacity-75'>❤️ {post.likes}</div>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                  <div className='text-white text-center p-4'>
                    <div className='text-xs mb-2 line-clamp-2'>
                      {post.caption}
                    </div>
                    <div className='text-xs opacity-75'>{post.author}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href='/community'
            className='inline-flex items-center px-8 py-4 bg-lavender-pastel text-white rounded-full font-semibold hover:bg-lavender-pastel/90 transition-colors group'
          >
            Tham gia cộng đồng ngay
            <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-white rounded-3xl p-12 text-center skylarbox-shadow'
        >
          <h3 className='text-3xl md:text-4xl font-display font-bold text-warm-brown mb-4'>
            Sẵn sàng bắt đầu hành trình của bạn?
          </h3>
          <p className='text-lg text-tea-gray max-w-2xl mx-auto mb-8'>
            Hãy để Skylarbox đồng hành cùng bạn trong hành trình tìm về sự bình
            yên và yêu thương bản thân. Mỗi bước đi đều có ý nghĩa, mỗi khoảnh
            khắc đều đáng được trân trọng.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/products'
              className='inline-flex items-center px-8 py-4 bg-lavender-pastel text-white rounded-full font-semibold hover:bg-lavender-pastel/90 transition-colors group'
            >
              Khám phá sản phẩm
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>

            <Link
              href='/subscription'
              className='inline-flex items-center px-8 py-4 bg-white text-warm-brown rounded-full font-semibold border-2 border-sage-green/30 hover:bg-sage-green/10 hover:border-sage-green transition-all duration-300'
            >
              Đăng ký subscription
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
