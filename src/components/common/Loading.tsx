import React from "react";
import { Ship } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center ">
      <div
        className="bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce"
        style={{
          width: "5vw",
          height: "5vw",
          minWidth: "80px",
          minHeight: "80px",
        }}
      >
        <Ship
          className="text-white"
          style={{
            width: "2.5vw",
            height: "2.5vw",
            minWidth: "40px",
            minHeight: "40px",
          }}
        />
      </div>
      <p
        className="text-blue-600 font-bold tracking-wide animate-fade-in"
        style={{ marginTop: "1.5vw", fontSize: "clamp(16px, 1vw, 1.25rem)" }}
      >
        Đang tải dữ liệu...
      </p>
    </div>
  );
}

