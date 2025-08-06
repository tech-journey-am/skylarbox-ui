"use client";
import React from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const ContactForm = () => {
  return (
    <div className="w-full" style={{ width: "17.5vw", minWidth: "15vw" }}>
      <h3
        className="font-semibold mb-4"
        style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "1vw" }}
      >
        Liên hệ với chúng tôi
      </h3>

      <form className="space-y-4" style={{ marginTop: "1.25vw", gap: "1vw" }}>
        <div>
          <label
            className="block text-sm font-medium text-brand-gray mb-2"
            style={{
              fontSize: "clamp(16px, 1vw, 1.25rem)",
              marginBottom: "0.5vw",
            }}
          >
            Họ và tên
          </label>
          <Input
            type="text"
            placeholder="Nhập họ và tên"
            style={{
              padding: "0.75vw 1vw",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-brand-gray mb-2"
            style={{
              fontSize: "clamp(16px, 1vw, 1.25rem)",
              marginBottom: "0.5vw",
            }}
          >
            Email
          </label>
          <Input
            type="email"
            placeholder="Nhập email"
            style={{
              padding: "0.75vw 1vw",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-brand-gray mb-2"
            style={{
              fontSize: "clamp(16px, 1vw, 1.25rem)",
              marginBottom: "0.5vw",
            }}
          >
            Tin nhắn
          </label>
          <textarea
            placeholder="Nhập tin nhắn"
            className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent resize-none"
            rows={4}
            style={{
              padding: "0.75vw 1vw",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-brand-lavender hover:bg-brand-lavender/90"
          style={{
            marginTop: "1vw",
            fontSize: "clamp(16px, 1vw, 1.25rem)",
          }}
        >
          Gửi tin nhắn
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

