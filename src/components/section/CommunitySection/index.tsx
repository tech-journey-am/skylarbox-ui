"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, blogPosts } from "@/data/blog";
import { ChevronRight } from "lucide-react";
import { BLUR_DATA_URL } from "@/components/constants";

export default function CommunitySection() {
  return (
    <section className='relative py-8 md:py-vw-6 bg-testimonial-gradient'>
      {/* Dynamic whitespace accents */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-[10%] left-[5%] w-[12vw] h-[12vw] rounded-full bg-brand-yellow/8 blur-[40px]' />
        <div className='absolute bottom-[15%] right-[8%] w-[15vw] h-[15vw] rounded-[3vw] rotate-12 bg-brand-lavender/6 blur-[35px]' />
        <div className='absolute top-[60%] left-[20%] w-[8vw] h-[8vw] rounded-full bg-brand-rose/5 blur-[30px]' />
      </div>

      <div className='container mx-auto px-4 relative'>
        <div className='text-center mb-8 md:mb-vw-4'>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className='text-2xl md:text-[3vw] uppercase font-serif font-bold text-neutral-700 mb-2 md:mb-vw-1'
          >
            Cộng đồng <span className='text-brand-rose'>Skylarbox</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-vw-2 items-start'>
          {/* Left: Asymmetric destination grid */}
          <div className='lg:col-span-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-vw-1'>
              {/* Card A - Top Left */}
              <DestinationCard
                index={0}
                post={blogPosts[0]}
                badge='Mới'
                className='sm:col-span-1 lg:col-span-3 lg:row-span-2 min-h-[200px] md:min-h-[22vw]'
              />

              {/* Card B - Top Middle */}
              <DestinationCard
                index={1}
                post={blogPosts[1] || blogPosts[0]}
                badge='Đặc biệt'
                className='sm:col-span-1 lg:col-span-3 lg:row-span-2 min-h-[200px] md:min-h-[22vw]'
              />

              {/* Card C - Top Right */}
              <DestinationCard
                index={2}
                post={blogPosts[2] || blogPosts[1] || blogPosts[0]}
                badge='Mới'
                className='sm:col-span-1 lg:col-span-3 lg:row-span-2 min-h-[200px] md:min-h-[22vw]'
              />

              {/* Card D - Bottom Left */}
              <DestinationCard
                index={4}
                post={blogPosts[2] || blogPosts[1] || blogPosts[0]}
                badge='Food & drink'
                className='sm:col-span-1 lg:col-span-3 min-h-[150px] md:min-h-[14vw]'
              />

              {/* Instagram Feed */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className='bg-white rounded-lg md:rounded-[1vw] p-4 md:p-[1vw] shadow-sm sm:col-span-1 lg:col-span-3'
              >
                <div className='flex items-center space-x-2 md:space-x-vw mb-4 md:mb-vw-1'>
                  <svg
                    className='w-5 h-5 md:w-[1.6vw] md:h-[1.6vw] text-pink-500'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                  <h3 className='text-lg md:text-[1.6vw] font-semibold text-neutral-700'>
                    Instagram Feed
                  </h3>
                </div>
                <div className='grid grid-cols-3 gap-2 md:gap-vw-1'>
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
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className='bg-gradient-to-br from-brand-lavender/20 to-brand-yellow/20 rounded-lg h-16 md:h-20 flex items-center justify-center cursor-pointer'
                    >
                      <span className='text-lg md:text-[2vw]'>
                        <svg
                          className='w-4 h-4 md:w-[1.6vw] md:h-[1.6vw] text-pink-500'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                        </svg>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className='mt-6 md:mt-vw-2'>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <Link
                  href='/blog'
                  className='text-brand-lavender hover:text-brand-lavender/80 font-medium text-sm md:text-[1vw] inline-flex items-center gap-2 md:gap-vw'
                >
                  Xem tất cả bài viết{" "}
                  <ChevronRight className='w-4 h-4 md:w-[1vw] md:h-[1vw]' />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({
  post,
  index,
  badge,
  className,
}: {
  post: BlogPost | undefined;
  index: number;
  badge: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <div
        className={`relative bg-white rounded-lg md:rounded-[1vw] p-4 md:p-[1vw] shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col overflow-hidden`}
      >
        <div className='relative min-h-[120px] md:min-h-[12vw] rounded-lg md:rounded-[1vw] flex-1 mb-3 md:mb-vw-1 flex items-end justify-between p-3 md:p-[1vw] overflow-hidden'>
          <motion.div
            className='absolute inset-0 w-full h-full'
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={post?.image || ""}
              alt={`${post?.title} - Hộp quà`}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </motion.div>
        </div>
        <h3 className='text-lg md:text-[1.6vw] font-semibold text-neutral-700 mb-1 md:mb-[.2vw]'>
          {post?.title || "Câu chuyện cộng đồng"}
        </h3>
        <p className='text-brand-gray text-sm md:text-[.8vw] mb-3 md:mb-vw-1 italic line-clamp-2'>
          {post?.excerpt ||
            "Khám phá những khoảnh khắc và bài viết truyền cảm hứng từ Skylarbox."}
        </p>
        <Link
          href={`/blog/${index + 1}`}
          className='text-brand-lavender hover:text-brand-lavender/80 font-medium text-sm md:text-[1vw] flex items-center gap-2 md:gap-vw'
        >
          Đọc thêm <ChevronRight className='w-4 h-4 md:w-[1vw] md:h-[1vw]' />
        </Link>
      </div>
    </motion.div>
  );
}
