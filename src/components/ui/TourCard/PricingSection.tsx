import React from "react";

interface PricingSectionProps {
  price: string;
  originalPrice?: string;
  discount?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="flex flex-col items-end" style={{ marginTop: "1vw" }}>
      {originalPrice && discount && (
        <div className="flex items-center" style={{ gap: "0.5vw" }}>
          <span
            className="text-zinc-400 line-through"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {originalPrice}
          </span>
          <span
            className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {discount}
          </span>
        </div>
      )}
      <span
        className="text-2xl font-bold text-zinc-800"
        style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
      >
        {price}
      </span>
    </div>
  );
};

export default PricingSection;

