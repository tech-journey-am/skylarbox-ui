"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogCommunitySection = () => {
  return (
    <section className="bg-white" style={{ padding: "5vw 0" }}>
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        <div className="grid md:grid-cols-2" style={{ gap: "4vw" }}>
          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-bold mb-8"
              style={{
                fontSize: "clamp(22px, 2vw, 2.5rem)",
                marginBottom: "2vw",
              }}
            >
              Blog & Cộng đồng
            </h2>
            <div style={{ gap: "2vw" }}>
              {blogPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  style={{ padding: "1.5vw", marginBottom: "2vw" }}
                >
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0"
                      style={{
                        width: "8vw",
                        height: "8vw",
                        minWidth: "128px",
                        minHeight: "128px",
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-12 h-12 bg-brand-lavender/20 rounded-full flex items-center justify-center"
                          style={{
                            width: "3vw",
                            height: "3vw",
                            minWidth: "48px",
                            minHeight: "48px",
                          }}
                        >
                          <span
                            className="text-brand-lavender"
                            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                          >
                            📝
                          </span>
                        </div>
                        <span
                          className="text-sm text-brand-gray"
                          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                        >
                          {post.date}
                        </span>
                      </div>
                      <h3
                        className="font-bold mb-2"
                        style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-brand-gray mb-4"
                        style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                      >
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-brand-lavender font-medium hover:underline"
                        style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                      >
                        Đọc thêm →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div style={{ marginTop: "2vw" }}>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Xem tất cả bài viết →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="font-bold mb-8"
              style={{
                fontSize: "clamp(22px, 2vw, 2.5rem)",
                marginBottom: "2vw",
              }}
            >
              Cộng đồng Skylarbox
            </h2>

            {/* Testimonials */}
            <div style={{ gap: "1.5vw", marginBottom: "2vw" }}>
              {[
                {
                  name: "Nguyễn Thị Anh",
                  content:
                    "Skylarbox đã giúp tôi tìm lại sự bình yên trong cuộc sống bận rộn. Mỗi hộp quà đều mang đến những trải nghiệm chữa lành tuyệt vời.",
                  rating: 5,
                },
                {
                  name: "Trần Văn Bình",
                  content:
                    "Tôi rất thích cách Skylarbox thiết kế các sản phẩm. Chúng không chỉ đẹp mà còn có ý nghĩa sâu sắc về mặt tinh thần.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                  style={{ padding: "1.5vw", marginBottom: "1.5vw" }}
                >
                  <div className="flex gap-2 mb-3" style={{ gap: "0.5vw" }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        style={{
                          width: "1vw",
                          height: "1vw",
                          minWidth: "16px",
                          minHeight: "16px",
                        }}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-brand-gray mb-3 italic"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    "{testimonial.content}"
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    — {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Community Stats */}
            <div
              className="bg-gradient-to-br from-brand-lavender/10 to-brand-yellow/10 rounded-2xl p-6"
              style={{ padding: "1.5vw" }}
            >
              <h3
                className="font-bold mb-4"
                style={{
                  fontSize: "clamp(18px, 1.5vw, 2rem)",
                  marginBottom: "1vw",
                }}
              >
                Thống kê cộng đồng
              </h3>
              <div className="grid grid-cols-3 gap-4" style={{ gap: "1vw" }}>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-brand-lavender mb-1"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    1,234
                  </div>
                  <div
                    className="text-sm text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Thành viên
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-brand-lavender mb-1"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    567
                  </div>
                  <div
                    className="text-sm text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Bài viết
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl font-bold text-brand-lavender mb-1"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    89
                  </div>
                  <div
                    className="text-sm text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Sự kiện
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2vw" }}>
              <Link href="/community">
                <Button style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                  Tham gia cộng đồng →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogCommunitySection;

