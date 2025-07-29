"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 cách đơn giản để bắt đầu hành trình self-care",
      excerpt:
        "Khám phá những bước đầu tiên nhỏ nhưng có sức mạnh biến đổi lớn trong việc chăm sóc bản thân một cách dịu dàng và bền vững.",
      author: "Skylarbox Team",
      date: "15 Tháng 12, 2024",
      readTime: "5 phút đọc",
      category: "Self-Care",
      image: "/placeholder-image.jpg",
      color: "from-pastel-rose to-butterlight-yellow",
    },
    {
      id: 2,
      title: "Mindfulness trong cuộc sống hiện đại",
      excerpt:
        "Làm thế nào để duy trì sự tỉnh thức và bình an giữa nhịp sống bận rộn? Cùng tìm hiểu những phương pháp thực tế và dễ áp dụng.",
      author: "Dr. Minh Anh",
      date: "12 Tháng 12, 2024",
      readTime: "7 phút đọc",
      category: "Mindfulness",
      image: "/placeholder-image.jpg",
      color: "from-sage-green to-sky-soft-blue",
    },
    {
      id: 3,
      title: "Chữa lành bằng nghệ thuật: Kintsugi và triết lý sống",
      excerpt:
        "Khám phá nghệ thuật Kintsugi Nhật Bản và cách áp dụng triết lý 'vẻ đẹp trong khuyết tật' để chữa lành những tổn thương trong tâm hồn.",
      author: "Thanh Hương",
      date: "10 Tháng 12, 2024",
      readTime: "6 phút đọc",
      category: "Chữa lành",
      image: "/placeholder-image.jpg",
      color: "from-butterlight-yellow to-lavender-pastel",
    },
  ];

  const categories = [
    { name: "Self-Care", count: 12, color: "bg-pastel-rose" },
    { name: "Mindfulness", count: 8, color: "bg-sage-green" },
    { name: "Chữa lành", count: 15, color: "bg-lavender-pastel" },
    { name: "Phát triển bản thân", count: 10, color: "bg-butterlight-yellow" },
  ];

  return (
    <section className='py-20 bg-cream-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-display font-bold text-warm-brown mb-4'>
            Blog & Cảm hứng
          </h2>
          <p className='text-lg text-tea-gray max-w-2xl mx-auto'>
            Khám phá những bài viết về self-care, mindfulness và chữa lành. Mỗi
            câu chuyện là một hành trình, mỗi bài viết là một món quà cho tâm
            hồn.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
          {/* Main Blog Posts */}
          <div className='lg:col-span-3'>
            <div className='space-y-8'>
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group bg-white rounded-3xl overflow-hidden skylarbox-shadow skylarbox-hover'
                >
                  <div className='md:flex'>
                    {/* Featured Image */}
                    <div
                      className={`md:w-1/3 h-64 md:h-auto bg-gradient-to-br ${post.color} relative overflow-hidden`}
                    >
                      <div className='absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                        <div className='text-center text-white'>
                          <div className='w-16 h-16 bg-white/30 rounded-2xl mx-auto mb-3 flex items-center justify-center'>
                            <span className='font-display font-bold text-lg'>
                              {post.category.charAt(0)}
                            </span>
                          </div>
                          <div className='text-sm font-medium'>
                            {post.category}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='md:w-2/3 p-8'>
                      <div className='flex items-center gap-4 text-tea-gray text-sm mb-4'>
                        <div className='flex items-center'>
                          <User className='w-4 h-4 mr-1' />
                          {post.author}
                        </div>
                        <div className='flex items-center'>
                          <Calendar className='w-4 h-4 mr-1' />
                          {post.date}
                        </div>
                        <div className='flex items-center'>
                          <Clock className='w-4 h-4 mr-1' />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className='text-2xl font-display font-bold text-warm-brown mb-3 group-hover:text-lavender-pastel transition-colors line-clamp-2'>
                        {post.title}
                      </h3>

                      <p className='text-tea-gray leading-relaxed mb-6 line-clamp-3'>
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.id}`}
                        className='inline-flex items-center text-lavender-pastel font-semibold hover:text-lavender-pastel/80 transition-colors group'
                      >
                        Đọc thêm
                        <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mt-12'
            >
              <Link
                href='/blog'
                className='inline-flex items-center px-8 py-4 bg-lavender-pastel text-white rounded-full font-semibold hover:bg-lavender-pastel/90 transition-colors group'
              >
                Xem tất cả bài viết
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='space-y-8'>
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-6 skylarbox-shadow'
              >
                <h3 className='font-display font-bold text-warm-brown mb-6'>
                  Chủ đề
                </h3>
                <div className='space-y-3'>
                  {categories.map((category, index) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase()}`}
                      className='flex items-center justify-between p-3 rounded-xl hover:bg-sage-green/10 transition-colors group'
                    >
                      <div className='flex items-center'>
                        <div
                          className={`w-3 h-3 ${category.color} rounded-full mr-3`}
                        ></div>
                        <span className='text-warm-brown group-hover:text-lavender-pastel transition-colors'>
                          {category.name}
                        </span>
                      </div>
                      <span className='text-tea-gray text-sm'>
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-lavender-pastel/20 to-sage-green/20 rounded-2xl p-6'
              >
                <h3 className='font-display font-bold text-warm-brown mb-3'>
                  Đăng ký nhận bài viết mới
                </h3>
                <p className='text-tea-gray text-sm mb-4'>
                  Nhận những bài viết mới nhất về chữa lành và phát triển bản
                  thân.
                </p>
                <div className='space-y-3'>
                  <input
                    type='email'
                    placeholder='Email của bạn'
                    className='w-full px-4 py-2 bg-white border border-sage-green/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender-pastel/50 focus:border-lavender-pastel text-sm'
                  />
                  <button className='w-full bg-lavender-pastel text-white py-2 rounded-xl font-semibold hover:bg-lavender-pastel/90 transition-colors text-sm'>
                    Đăng ký
                  </button>
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='bg-white rounded-2xl p-6 skylarbox-shadow'
              >
                <h3 className='font-display font-bold text-warm-brown mb-6'>
                  Tags phổ biến
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {[
                    "meditation",
                    "yoga",
                    "tự yêu thương",
                    "cân bằng",
                    "healing",
                    "mindfulness",
                    "wellness",
                    "peace",
                  ].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className='px-3 py-1 bg-sage-green/10 text-warm-brown text-sm rounded-full hover:bg-sage-green/20 transition-colors'
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
