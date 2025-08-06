import React from "react";
import { motion } from "framer-motion";
import TourInfo from "./TourInfo";
import PricingSection from "./PricingSection";

interface TourCardProps {
  title: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  description: string;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  duration,
  groupSize,
  difficulty,
  price,
  originalPrice,
  discount,
  image,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          style={{ height: "12vw", minHeight: "192px" }}
        />
        {discount && (
          <div
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
            style={{
              padding: "0.25vw 0.75vw",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          >
            {discount}
          </div>
        )}
      </div>

      <div className="p-6" style={{ padding: "1.5vw" }}>
        <h1
          className="font-bold mb-4"
          style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "1vw" }}
        >
          {title}
        </h1>

        <p
          className="text-gray-600 mb-6"
          style={{
            fontSize: "clamp(16px, 1vw, 1.25rem)",
            marginBottom: "1.5vw",
          }}
        >
          {description}
        </p>

        <TourInfo
          title={title}
          duration={duration}
          groupSize={groupSize}
          difficulty={difficulty}
          price={price}
        />

        <PricingSection
          price={price}
          originalPrice={originalPrice}
          discount={discount}
        />
      </div>
    </motion.div>
  );
};

export default TourCard;

