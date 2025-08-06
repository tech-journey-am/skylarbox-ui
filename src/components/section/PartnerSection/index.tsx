import React from "react";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";
import { Star } from "lucide-react";

const PartnerSection = () => {
  return (
    <section className="bg-white" style={{ padding: "5vw 0" }}>
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
            Đối tác của chúng tôi
          </h2>
          <p
            className="text-brand-gray"
            style={{
              maxWidth: "50vw",
              margin: "0 auto",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          >
            Những đối tác tin cậy đồng hành cùng Skylarbox trong hành trình chữa
            lành
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2vw" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
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
                  <Star
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
                    {partner.companyName}
                  </h3>
                  <p
                    className="text-brand-gray"
                    style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                  >
                    {partner.package}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1" style={{ gap: "0.25vw" }}>
                  {[...Array(5)].map((_, i) => (
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
                <span
                  className="text-brand-lavender font-medium"
                  style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
                >
                  {partner.package}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: "4vw" }}
        >
          <h3
            className="text-center font-semibold mb-6"
            style={{
              fontSize: "clamp(18px, 1.5vw, 2rem)",
              marginBottom: "1.5vw",
            }}
          >
            Logo đối tác
          </h3>
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
            style={{ gap: "2vw" }}
          >
            {[
              "bao-tram-x-thap-sang.png",
              "bbe.png",
              "brando.png",
              "gein-academy.png",
              "jci-da-nang.png",
              "luat-khoa-tin.png",
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                style={{ padding: "1vw" }}
              >
                <div
                  className="relative"
                  style={{
                    width: "8vw",
                    height: "4vw",
                    minWidth: "120px",
                    minHeight: "60px",
                  }}
                >
                  <img
                    src={`/images/partners/${logo}`}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;

