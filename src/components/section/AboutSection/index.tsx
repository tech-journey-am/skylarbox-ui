import React from "react";
import { motion } from "framer-motion";
import { IconHeart, IconLocation, IconClock } from "@/components/icon";

const AboutSection = () => {
  return (
    <section className="bg-white" style={{ padding: "5vw 0" }}>
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        <div className="grid lg:grid-cols-2 gap-12" style={{ gap: "3vw" }}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(28px, 2.5vw, 3.5rem)",
                marginBottom: "1.5vw",
              }}
            >
              Về dự án "Thắp Sáng"
            </h1>
            <p
              className="text-brand-gray mb-8 leading-relaxed"
              style={{
                fontSize: "clamp(16px, 1vw, 1.25rem)",
                marginBottom: "2vw",
              }}
            >
              "Thắp Sáng" là dự án đặc biệt của Skylarbox, được thiết kế để mang
              lại ánh sáng và hy vọng cho những người đang gặp khó khăn trong
              cuộc sống. Thông qua những hộp quà chữa lành, chúng tôi mong muốn
              lan tỏa tình yêu thương và sự ấm áp đến mọi người.
            </p>

            <div className="space-y-6" style={{ gap: "1.5vw" }}>
              <div className="flex items-start gap-4" style={{ gap: "1vw" }}>
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "3vw",
                    height: "3vw",
                    minWidth: "48px",
                    minHeight: "48px",
                  }}
                >
                  <IconHeart className="w-full h-full text-brand-lavender" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "clamp(18px, 1.5vw, 2rem)",
                      marginBottom: "0.5vw",
                    }}
                  >
                    Chữa lành tâm hồn
                  </h3>
                  <p
                    className="text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Mỗi sản phẩm được chọn lọc kỹ lưỡng để mang lại cảm giác
                    bình yên và ấm áp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" style={{ gap: "1vw" }}>
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "3vw",
                    height: "3vw",
                    minWidth: "48px",
                    minHeight: "48px",
                  }}
                >
                  <IconLocation className="w-full h-full text-brand-lavender" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "clamp(18px, 1.5vw, 2rem)",
                      marginBottom: "0.5vw",
                    }}
                  >
                    Lan tỏa yêu thương
                  </h3>
                  <p
                    className="text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Chúng tôi tin rằng mỗi hành động nhỏ đều có thể tạo ra sự
                    thay đổi lớn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" style={{ gap: "1vw" }}>
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "3vw",
                    height: "3vw",
                    minWidth: "48px",
                    minHeight: "48px",
                  }}
                >
                  <IconClock className="w-full h-full text-brand-lavender" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "clamp(18px, 1.5vw, 2rem)",
                      marginBottom: "0.5vw",
                    }}
                  >
                    Kết nối cộng đồng
                  </h3>
                  <p
                    className="text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    Xây dựng một cộng đồng yêu thương và hỗ trợ lẫn nhau.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "30vw", minHeight: "400px", maxHeight: "500px" }}
            >
              <img
                src="/images/village.jpg"
                alt="Thắp Sáng Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2
                  className="font-bold mb-2"
                  style={{
                    fontSize: "clamp(22px, 2vw, 2.5rem)",
                    marginBottom: "0.5vw",
                  }}
                >
                  Thắp Sáng
                </h2>
                <p
                  className="text-white/90"
                  style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                >
                  Dự án chữa lành tâm hồn
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

