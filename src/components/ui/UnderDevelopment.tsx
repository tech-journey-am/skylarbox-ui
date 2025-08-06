"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, ArrowLeft } from "lucide-react";

interface UnderDevelopmentProps {
  title?: string;
  description?: string;
}

export function UnderDevelopment({
  title = "Trang đang phát triển",
  description = "Chúng tôi đang nỗ lực hoàn thiện trang này để mang đến trải nghiệm tốt nhất cho bạn.",
}: UnderDevelopmentProps) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-brand-cream to-brand-sky/30 flex items-center justify-center"
      style={{ padding: "0 1vw" }}
    >
      <div className="text-center" style={{ maxWidth: "25vw", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg"
          style={{ padding: "2vw" }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-lavender to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              width: "5vw",
              height: "5vw",
              minWidth: "80px",
              minHeight: "80px",
            }}
          >
            <Construction
              className="text-white"
              style={{
                width: "2.5vw",
                height: "2.5vw",
                minWidth: "40px",
                minHeight: "40px",
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-montserrat font-bold text-brand-brown mb-4"
            style={{ fontSize: "clamp(22px, 2vw, 2.5rem)" }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-brand-gray mb-8 leading-relaxed"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {description}
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginBottom: "2vw" }}
          >
            <div
              className="w-full bg-gray-200 rounded-full mb-2"
              style={{ height: "0.5vw" }}
            >
              <div
                className="bg-gradient-to-r from-brand-lavender to-brand-rose rounded-full animate-pulse"
                style={{ width: "65%", height: "0.5vw" }}
              ></div>
            </div>
            <p
              className="text-brand-gray"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              65% hoàn thành
            </p>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center bg-brand-rose text-white rounded-full hover:bg-brand-rose/90 transition-colors font-medium"
              style={{ padding: "0.75vw 1.5vw", gap: "0.5vw" }}
            >
              <ArrowLeft
                style={{
                  width: "1vw",
                  height: "1vw",
                  minWidth: "16px",
                  minHeight: "16px",
                }}
              />
              <span style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                Quay lại trang chủ
              </span>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              marginTop: "1.5vw",
              paddingTop: "1.5vw",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <p
              className="text-brand-gray"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Theo dõi chúng tôi để cập nhật thông tin mới nhất
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

