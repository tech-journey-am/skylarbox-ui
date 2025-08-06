import React from "react";
import { IconPhone, IconMail, IconLocation } from "@/components/icon";

const ContactInfo = () => {
  return (
    <div className="w-full" style={{ minWidth: "15vw", width: "17.5vw" }}>
      <h3
        className="font-semibold mb-4"
        style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "1vw" }}
      >
        Thông tin liên hệ
      </h3>

      <div className="space-y-4" style={{ gap: "1vw" }}>
        <div className="flex items-start gap-3" style={{ gap: "0.75vw" }}>
          <div
            className="flex-shrink-0"
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          >
            <IconPhone className="w-full h-full text-brand-lavender" />
          </div>
          <div>
            <h4
              className="font-medium"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Điện thoại
            </h4>
            <p
              className="text-brand-gray"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              +84 123 456 789
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3" style={{ gap: "0.75vw" }}>
          <div
            className="flex-shrink-0"
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          >
            <IconMail className="w-full h-full text-brand-lavender" />
          </div>
          <div>
            <h4
              className="font-medium"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Email
            </h4>
            <p
              className="text-brand-gray"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              info@skylarbox.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3" style={{ gap: "0.75vw" }}>
          <div
            className="flex-shrink-0"
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          >
            <IconLocation className="w-full h-full text-brand-lavender" />
          </div>
          <div>
            <h4
              className="font-medium"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Địa chỉ
            </h4>
            <address
              className="text-brand-gray not-italic"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              123 Đường ABC, Quận 1, TP.HCM
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

