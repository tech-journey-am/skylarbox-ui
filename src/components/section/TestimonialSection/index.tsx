import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thị Anh",
      content:
        "Skylarbox đã giúp tôi tìm lại sự bình yên trong cuộc sống bận rộn. Mỗi hộp quà đều mang đến những trải nghiệm chữa lành tuyệt vời.",
      rating: 5,
    },
    {
      id: 2,
      name: "Trần Văn Bình",
      content:
        "Tôi rất thích cách Skylarbox thiết kế các sản phẩm. Chúng không chỉ đẹp mà còn có ý nghĩa sâu sắc về mặt tinh thần.",
      rating: 5,
    },
    {
      id: 3,
      name: "Lê Thị Cẩm",
      content:
        "Những hộp quà của Skylarbox thực sự đã giúp tôi vượt qua những khoảng thời gian khó khăn. Cảm ơn team rất nhiều!",
      rating: 5,
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-brand-cream to-brand-sky/20"
      style={{ padding: "5vw 0" }}
    >
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: "4vw" }}
        >
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(22px, 2vw, 2.5rem)",
              marginBottom: "1vw",
            }}
          >
            Khách hàng nói gì về chúng tôi
          </h2>
          <p
            className="text-brand-gray"
            style={{
              maxWidth: "50vw",
              margin: "0 auto",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          >
            Những phản hồi chân thành từ khách hàng của Skylarbox
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3" style={{ gap: "2vw" }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
              style={{ padding: "1.5vw" }}
            >
              <div
                className="flex items-center mb-4"
                style={{ marginBottom: "1vw" }}
              >
                <div
                  className="w-12 h-12 bg-brand-lavender/20 rounded-full flex items-center justify-center mr-4"
                  style={{
                    width: "3vw",
                    height: "3vw",
                    minWidth: "48px",
                    minHeight: "48px",
                    marginRight: "1vw",
                  }}
                >
                  <Heart
                    className="w-6 h-6 text-brand-lavender"
                    style={{
                      width: "1.5vw",
                      height: "1.5vw",
                      minWidth: "24px",
                      minHeight: "24px",
                    }}
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold"
                    style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
                  >
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1" style={{ gap: "0.25vw" }}>
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
                </div>
              </div>
              <blockquote
                className="text-brand-gray italic"
                style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
              >
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

