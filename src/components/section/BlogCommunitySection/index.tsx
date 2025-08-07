"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts, testimonials } from "@/data/blog";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function BlogCommunitySection() {
  return (
    <section className='py-vw-6 bg-testimonial-gradient'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-vw-2'>
          {/* Blog */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className='text-[3vw] uppercase font-serif font-bold text-neutral-700 mb-vw-1'
            >
              Blog
            </motion.h2>
            <div className='space-y-vw-2'>
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * index,
                  }}
                  className='bg-white rounded-[1vw] p-[1vw] shadow-sm hover:shadow-md transition-shadow cursor-pointer'
                >
                  <div className='bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-[1vw] h-[10vw] mb-vw-1 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-[4vw] h-[4vw] bg-white/80 rounded-full flex items-center justify-center mx-auto mb-vw-1'>
                        <span className='text-[2vw]'>📝</span>
                      </div>
                      <p className='text-[1vw] text-brand-gray'>{post.date}</p>
                    </div>
                  </div>
                  <h3 className='text-[1.6vw] font-semibold text-neutral-700 mb-[.2vw]'>
                    {post.title}
                  </h3>
                  <p className='text-brand-gray text-[.8vw] mb-vw-1 italic'>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${index + 1}`}
                    className='text-brand-lavender hover:text-brand-lavender/80 font-medium text-[1vw] flex items-center gap-vw'
                  >
                    Đọc thêm <ChevronRight className='w-[1vw] h-[1vw]' />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className='mt-vw-2'>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <Link
                  href='/blog'
                  className='text-brand-lavender hover:text-brand-lavender/80 font-medium text-[1vw] flex items-center gap-vw'
                >
                  Xem tất cả bài viết{" "}
                  <ChevronRight className='w-[1vw] h-[1vw]' />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Community */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className='text-[3vw] uppercase font-serif font-bold text-neutral-700 mb-vw-1'
            >
              Cộng đồng
            </motion.h2>

            {/* Testimonials */}
            <div className='space-y-vw-2 mb-vw-2'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * index,
                  }}
                  className='bg-white rounded-[1vw] p-[1vw] shadow-sm'
                >
                  <div className='flex items-center space-x-vw mb-vw-1'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className='w-[1.6vw] h-[1.6vw] text-yellow-400 fill-current'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-brand-gray mb-vw-1 text-[1.2vw] italic'>
                    "{testimonial.content}"
                  </p>
                  <p className='text-[1vw] font-medium text-brand-brown'>
                    - {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Share Experience */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className='bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-[1vw] p-[1vw] mb-vw-2'
            >
              <h3 className='text-[1.6vw] font-semibold text-neutral-700 mb-vw-1'>
                Chia sẻ trải nghiệm của bạn
              </h3>
              <p className='text-brand-gray mb-vw-1 text-[1.2vw] italic'>
                Chia sẻ hành trình chữa lành của bạn với cộng đồng Skylarbox
              </p>
              <div className='flex items-center space-x-vw-1'>
                <span className='text-brand-lavender font-medium text-[1vw]'>
                  #SkylarboxJourney
                </span>
                <svg
                  className='w-[1.6vw] h-[1.6vw] text-brand-lavender'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                </svg>
              </div>
            </motion.div>

            {/* Instagram Feed */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className='bg-white rounded-[1vw] p-[1vw] shadow-sm'
            >
              <div className='flex items-center space-x-vw mb-vw-1'>
                <svg
                  className='w-[1.6vw] h-[1.6vw] text-pink-500'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
                <h3 className='text-[1.6vw] font-semibold text-neutral-700'>
                  Instagram Feed
                </h3>
              </div>
              <div className='grid grid-cols-3 gap-vw-1'>
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: 0.1 * index,
                    }}
                    className='bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-lg h-20 flex items-center justify-center'
                  >
                    <span className='text-[2vw]'>📸</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
