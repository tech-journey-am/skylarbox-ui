"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Target, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-brand-sky/30">
      {/* Hero Section */}
      <section className="pt-20 pb-12" style={{ padding: "5vw 0 3vw 0" }}>
        <div className="container mx-auto" style={{ padding: "0 1vw" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            style={{ maxWidth: "75vw", margin: "0 auto" }}
          >
            <h1 className="font-bold mb-6" style={{ fontSize: "clamp(28px, 2.5vw, 3.5rem)", marginBottom: "1.5vw" }}>
              Về Skylarbox
            </h1>
            <p className="text-brand-gray leading-relaxed" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
              Chúng tôi là một thương hiệu chuyên về các sản phẩm chữa lành tâm hồn, 
              được thiết kế để mang lại sự bình yên và ấm áp cho mọi người. 
              Với sứ mệnh lan tỏa tình yêu thương, chúng tôi mong muốn tạo ra 
              những trải nghiệm chữa lành độc đáo và ý nghĩa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12" style={{ padding: "3vw 0" }}>
        <div className="container mx-auto" style={{ padding: "0 1vw" }}>
          <div className="grid md:grid-cols-2 gap-12" style={{ gap: "3vw" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-bold mb-6" style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "1.5vw" }}>
                Sứ mệnh của chúng tôi
              </h2>
              <p className="text-brand-gray mb-6" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", marginBottom: "1.5vw" }}>
                Skylarbox được thành lập với sứ mệnh mang lại ánh sáng và hy vọng 
                cho những người đang gặp khó khăn trong cuộc sống. Chúng tôi tin rằng 
                mỗi sản phẩm không chỉ là một món quà vật chất, mà còn là một 
                thông điệp yêu thương và sự quan tâm.
              </p>
              <p className="text-brand-gray" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                Thông qua dự án "Thắp Sáng", chúng tôi đã và đang lan tỏa tình yêu 
                thương đến nhiều vùng đất khác nhau, mang lại niềm vui và hy vọng 
                cho những người cần sự hỗ trợ.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
              style={{ padding: "2vw" }}
            >
              <div className="space-y-6" style={{ gap: "1.5vw" }}>
                <div className="flex items-start gap-4" style={{ gap: "1vw" }}>
                  <div className="flex-shrink-0" style={{ width: "3vw", height: "3vw", minWidth: "48px", minHeight: "48px" }}>
                    <Heart className="w-full h-full text-brand-lavender" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "0.5vw" }}>
                      Chữa lành tâm hồn
                    </h3>
                    <p className="text-brand-gray" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                      Mỗi sản phẩm được chọn lọc kỹ lưỡng để mang lại cảm giác bình yên.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" style={{ gap: "1vw" }}>
                  <div className="flex-shrink-0" style={{ width: "3vw", height: "3vw", minWidth: "48px", minHeight: "48px" }}>
                    <Users className="w-full h-full text-brand-lavender" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "0.5vw" }}>
                      Kết nối cộng đồng
                    </h3>
                    <p className="text-brand-gray" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                      Xây dựng một cộng đồng yêu thương và hỗ trợ lẫn nhau.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" style={{ gap: "1vw" }}>
                  <div className="flex-shrink-0" style={{ width: "3vw", height: "3vw", minWidth: "48px", minHeight: "48px" }}>
                    <Target className="w-full h-full text-brand-lavender" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "0.5vw" }}>
                      Lan tỏa yêu thương
                    </h3>
                    <p className="text-brand-gray" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                      Mỗi hành động nhỏ đều có thể tạo ra sự thay đổi lớn.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white" style={{ padding: "3vw 0" }}>
        <div className="container mx-auto" style={{ padding: "0 1vw" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
            style={{ marginBottom: "4vw" }}
          >
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "1vw" }}>
              Giá trị cốt lõi
            </h2>
            <p className="text-brand-gray" style={{ maxWidth: "50vw", margin: "0 auto", fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
              Những giá trị định hình nên con người và văn hóa Skylarbox
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3" style={{ gap: "2vw" }}>
            {[
              {
                icon: "💝",
                title: "Tình yêu thương",
                description: "Chúng tôi tin rằng tình yêu thương là nền tảng của mọi sự chữa lành."
              },
              {
                icon: "🌟",
                title: "Sự sáng tạo",
                description: "Mỗi sản phẩm đều được thiết kế với sự sáng tạo và tâm huyết."
              },
              {
                icon: "🤝",
                title: "Tinh thần cộng đồng",
                description: "Chúng tôi tin vào sức mạnh của cộng đồng và sự hỗ trợ lẫn nhau."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-lavender/20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ width: "4vw", height: "4vw", minWidth: "64px", minHeight: "64px", marginBottom: "1vw" }}>
                  <span className="text-2xl" style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}>
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-semibold mb-2" style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "0.5vw" }}>
                  {value.title}
                </h3>
                <p className="text-brand-gray" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12" style={{ padding: "3vw 0" }}>
        <div className="container mx-auto" style={{ padding: "0 1vw" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
            style={{ marginBottom: "4vw" }}
          >
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "1vw" }}>
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-brand-gray" style={{ maxWidth: "50vw", margin: "0 auto", fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
              Những con người đam mê và tận tâm đằng sau Skylarbox
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3" style={{ gap: "2vw" }}>
            {[
              {
                name: "Nguyễn Thị Anh",
                role: "Founder & CEO",
                description: "Người sáng lập với tầm nhìn về một thế giới đầy yêu thương."
              },
              {
                name: "Trần Văn Bình",
                role: "Creative Director",
                description: "Chịu trách nhiệm thiết kế các sản phẩm chữa lành độc đáo."
              },
              {
                name: "Lê Thị Cẩm",
                role: "Community Manager",
                description: "Xây dựng và kết nối cộng đồng Skylarbox."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
                style={{ padding: "1.5vw" }}
              >
                <div className="w-20 h-20 bg-brand-lavender/20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ width: "5vw", height: "5vw", minWidth: "80px", minHeight: "80px", marginBottom: "1vw" }}>
                  <Award className="w-10 h-10 text-brand-lavender" style={{ width: "2.5vw", height: "2.5vw", minWidth: "40px", minHeight: "40px" }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "0.25vw" }}>
                  {member.name}
                </h3>
                <p className="text-brand-lavender mb-3" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", marginBottom: "0.75vw" }}>
                  {member.role}
                </p>
                <p className="text-brand-gray" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-12 bg-white" style={{ padding: "3vw 0" }}>
        <div className="container mx-auto" style={{ padding: "0 1vw" }}>
          <div className="text-center" style={{ maxWidth: "75vw", margin: "0 auto" }}>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-bold mb-6"
              style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "1.5vw" }}
            >
              Tương lai của Skylarbox
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gray mb-8"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", marginBottom: "2vw" }}
            >
              Chúng tôi đang phát triển để mang đến nhiều sản phẩm chữa lành hơn nữa, 
              mở rộng cộng đồng và lan tỏa tình yêu thương đến nhiều nơi hơn. 
              Hãy cùng chúng tôi xây dựng một thế giới đầy ấm áp và yêu thương.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/subscription">
                <Button className="bg-brand-lavender hover:bg-brand-lavender/90" style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}>
                  Đăng ký subscription
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

