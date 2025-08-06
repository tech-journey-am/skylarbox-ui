import React from "react";

export function FooterBottom() {
  return (
    <div
      className="border-t border-gray-200 py-6"
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "1.5vw 0",
        minHeight: "3vw",
      }}
    >
      <div
        className="flex flex-col md:flex-row justify-between items-center"
        style={{ gap: "1vw" }}
      >
        <div className="flex items-center" style={{ gap: "1vw" }}>
          <p
            className="text-brand-gray"
            style={{
              fontSize: "clamp(16px, 1vw, 1.25rem)",
              lineHeight: "1.25",
              width: "100%",
            }}
          >
            © 2024 Skylarbox. Tất cả quyền được bảo lưu.
          </p>
        </div>

        <div className="flex items-center space-x-6" style={{ gap: "1.5vw" }}>
          <a
            href="/privacy"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Chính sách bảo mật
          </a>
          <a
            href="/terms"
            className="text-brand-gray hover:text-brand-lavender transition-colors"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Điều khoản sử dụng
          </a>
        </div>
      </div>
    </div>
  );
}

