import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <nav className="w-full" style={{ width: "15vw" }}>
      <h3
        className="font-semibold mb-4"
        style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "1vw" }}
      >
        Liên kết nhanh
      </h3>
      <ul
        className="space-y-2"
        style={{
          marginTop: "1.25vw",
          fontSize: "clamp(16px, 1vw, 1.25rem)",
          gap: "0.5vw",
        }}
      >
        <li style={{ marginTop: "0.5vw" }}>
          <Link
            href="/about"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
          >
            Giới thiệu
          </Link>
        </li>
        <li style={{ marginTop: "0.5vw" }}>
          <Link
            href="/products"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
          >
            Sản phẩm
          </Link>
        </li>
        <li style={{ marginTop: "0.5vw" }}>
          <Link
            href="/subscription"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
          >
            Subscription
          </Link>
        </li>
        <li style={{ marginTop: "0.5vw" }}>
          <Link
            href="/blog"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
          >
            Blog
          </Link>
        </li>
        <li style={{ marginTop: "0.5vw" }}>
          <Link
            href="/community"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
          >
            Cộng đồng
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default QuickLinks;

