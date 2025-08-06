import React from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const NewsletterSignup = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between"
      style={{ gap: "2.5vw" }}
    >
      <div className="flex-1" style={{ minWidth: "15vw" }}>
        <h2
          className="font-bold mb-2"
          style={{
            fontSize: "clamp(22px, 2vw, 2.5rem)",
            marginBottom: "0.5vw",
          }}
        >
          Đăng ký nhận tin
        </h2>
        <p
          className="text-brand-gray"
          style={{ marginTop: "0.25vw", fontSize: "clamp(16px, 1vw, 1.25rem)" }}
        >
          Nhận thông tin mới nhất về sản phẩm và sự kiện
        </p>
      </div>

      <form className="flex gap-2" style={{ gap: "0.5vw", minWidth: "15vw" }}>
        <Input
          type="email"
          placeholder="Email của bạn"
          className="flex-1"
          style={{
            padding: "0.75vw 1vw",
            minWidth: "12vw",
            width: "20vw",
            fontSize: "clamp(16px, 1vw, 1.25rem)",
          }}
        />
        <Button
          type="submit"
          className="bg-brand-lavender hover:bg-brand-lavender/90"
          style={{
            gap: "0.5vw",
            padding: "0.75vw 1.5vw",
            fontSize: "clamp(16px, 1vw, 1.25rem)",
          }}
        >
          <svg
            className="w-4 h-4"
            style={{
              width: "1vw",
              height: "1vw",
              minWidth: "16px",
              minHeight: "16px",
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;

