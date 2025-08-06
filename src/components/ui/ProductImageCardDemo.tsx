"use client";

import React from "react";
import ProductImageCard from "./ProductImageCard";

const ProductImageCardDemo = () => {
  return (
    <div className="p-8" style={{ padding: "2vw" }}>
      <div
        className="max-w-6xl mx-auto"
        style={{ maxWidth: "75vw", margin: "0 auto" }}
      >
        <h1
          className="text-3xl font-bold mb-8"
          style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "2vw" }}
        >
          Product Image Card Demo
        </h1>

        <p
          className="text-gray-600 mb-6"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)", marginBottom: "2vw" }}
        >
          Demo các loại Product Image Card khác nhau
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gap: "1vw" }}
        >
          <div>
            <h3
              className="text-sm font-medium mb-2"
              style={{
                fontSize: "clamp(16px, 1vw, 1.25rem)",
                marginBottom: "0.5vw",
              }}
            >
              Basic Card
            </h3>
            <ProductImageCard
              src="/images/box/box_1.png"
              alt="Product 1"
              title="Product Title"
              price="299.000đ"
              category="Candle"
            />
          </div>

          <div>
            <h3
              className="text-sm font-medium mb-2"
              style={{
                fontSize: "clamp(16px, 1vw, 1.25rem)",
                marginBottom: "0.5vw",
              }}
            >
              Card with Badge
            </h3>
            <ProductImageCard
              src="/images/box/box_2.png"
              alt="Product 2"
              title="Product with Badge"
              price="399.000đ"
              category="Essential Oil"
              badge="New"
            />
          </div>

          <div>
            <h3
              className="text-sm font-medium mb-2"
              style={{
                fontSize: "clamp(16px, 1vw, 1.25rem)",
                marginBottom: "0.5vw",
              }}
            >
              Card with Discount
            </h3>
            <ProductImageCard
              src="/images/box/box_3.png"
              alt="Product 3"
              title="Product with Discount"
              price="299.000đ"
              originalPrice="399.000đ"
              category="Tea"
              badge="Sale"
            />
          </div>
        </div>

        <div className="mt-8" style={{ marginTop: "2vw" }}>
          <h2
            className="text-xl font-semibold mb-4"
            style={{
              fontSize: "clamp(18px, 1.5vw, 2rem)",
              marginBottom: "1vw",
            }}
          >
            Responsive Grid
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            style={{ gap: "1vw" }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProductImageCard
                key={i}
                src={`/images/box/box_${i}.png`}
                alt={`Product ${i}`}
                title={`Product ${i}`}
                price={`${(i * 100 + 99).toLocaleString()}đ`}
                category="Category"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageCardDemo;

