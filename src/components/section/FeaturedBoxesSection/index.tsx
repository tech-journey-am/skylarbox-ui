"use client";

import React from "react";
import { motion } from "framer-motion";
import { featuredBoxes } from "@/data/featuredBoxes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedBoxesSection = () => {
  return (
    <section className="bg-cream-50" style={{ padding: "5vw 0" }}>
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        <div className="text-center" style={{ marginBottom: "4vw" }}>
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(22px, 2vw, 2.5rem)",
              marginBottom: "1vw",
            }}
          >
            Các hộp chủ đề Skylarbox
          </h2>
          <p
            className="text-brand-gray"
            style={{
              maxWidth: "50vw",
              margin: "0 auto",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          >
            Mỗi hộp quà được thiết kế với chủ đề riêng biệt, mang đến trải
            nghiệm chữa lành độc đáo
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2vw", marginBottom: "3vw" }}
        >
          {featuredBoxes.map((box, index) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              style={{ height: "24vw", minHeight: "300px" }}
            >
              <div className="relative h-2/3">
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3
                    className="font-bold mb-2"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    {box.name}
                  </h3>
                  <p
                    className="text-sm opacity-90"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    {box.description}
                  </p>
                </div>
              </div>
              <div className="p-6" style={{ padding: "1.5vw" }}>
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="text-2xl font-bold text-brand-lavender"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    {box.price}
                  </span>
                  <span
                    className="text-sm text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    {box.duration}
                  </span>
                </div>
                <Link href={`/products/${box.id}`}>
                  <Button
                    className="w-full"
                    style={{
                      padding: "0.75vw 2vw",
                      fontSize: "clamp(16px, 1vw, 1.25rem)",
                    }}
                  >
                    Khám phá ngay
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBoxesSection;

