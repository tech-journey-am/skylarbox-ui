"use client";

import React from "react";
import { motion } from "framer-motion";
import { individualProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IndividualProductsSection = () => {
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
            Sản phẩm lẻ
          </h2>
          <p
            className="text-brand-gray"
            style={{
              maxWidth: "50vw",
              margin: "0 auto",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          >
            Khám phá các sản phẩm chữa lành được chọn lọc kỹ lưỡng
          </p>
        </div>

        <div
          className="flex overflow-x-auto pb-6"
          style={{ gap: "1.5vw", paddingBottom: "1.5vw" }}
        >
          {individualProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0"
              style={{ width: "18vw", minWidth: "280px" }}
            >
              <div
                className="relative"
                style={{
                  height: "12vw",
                  marginBottom: "1vw",
                  minHeight: "180px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.category && (
                  <div
                    className="absolute bottom-2 left-2 bg-brand-lavender text-white rounded-full px-2 py-1 text-xs"
                    style={{
                      bottom: "0.5vw",
                      left: "0.5vw",
                      padding: "0.25vw 0.5vw",
                      fontSize: "clamp(16px, 1vw, 1.25rem)",
                    }}
                  >
                    {product.category}
                  </div>
                )}
              </div>
              <div className="p-6" style={{ padding: "1.5vw" }}>
                <h3
                  className="font-bold mb-2"
                  style={{
                    fontSize: "clamp(18px, 1.5vw, 2rem)",
                    marginBottom: "0.5vw",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-brand-gray mb-4"
                  style={{
                    fontSize: "clamp(16px, 1vw, 1.25rem)",
                    marginBottom: "1vw",
                  }}
                >
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="text-2xl font-bold text-brand-lavender"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    {product.price}
                  </span>
                  <span
                    className="text-sm text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    {product.rating} ⭐
                  </span>
                </div>
                <Button
                  className="w-full"
                  style={{
                    padding: "0.5vw 0",
                    fontSize: "clamp(16px, 1vw, 1.25rem)",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndividualProductsSection;

