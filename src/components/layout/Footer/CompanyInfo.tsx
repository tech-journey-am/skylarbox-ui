import React from "react";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconYoutube,
} from "@/components/icon";

const CompanyInfo = () => {
  return (
    <div className="w-full" style={{ minWidth: "15vw", width: "17.5vw" }}>
      <h3
        className="font-semibold mb-4"
        style={{ fontSize: "clamp(18px, 1.5vw, 2rem)", marginBottom: "1vw" }}
      >
        Skylarbox
      </h3>
      <p
        className="text-brand-gray leading-relaxed"
        style={{
          marginTop: "1.25vw",
          fontSize: "clamp(16px, 1vw, 1.25rem)",
          lineHeight: "1.25",
        }}
      >
        Chuyên về các sản phẩm chữa lành tâm hồn, mang lại sự bình yên và ấm áp
        cho mọi người.
      </p>

      <div
        className="flex space-x-4 mt-6"
        style={{ gap: "0.5vw", marginTop: "1.25vw" }}
      >
        <a
          href="#"
          className="text-brand-gray hover:text-brand-lavender transition-colors"
        >
          <IconFacebook
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          />
        </a>
        <a
          href="#"
          className="text-brand-gray hover:text-brand-lavender transition-colors"
        >
          <IconInstagram
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          />
        </a>
        <a
          href="#"
          className="text-brand-gray hover:text-brand-lavender transition-colors"
        >
          <IconLinkedin
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          />
        </a>
        <a
          href="#"
          className="text-brand-gray hover:text-brand-lavender transition-colors"
        >
          <IconYoutube
            style={{
              width: "1.75vw",
              height: "1.75vw",
              minWidth: "28px",
              minHeight: "28px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;

