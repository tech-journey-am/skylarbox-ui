import React from "react";

interface DecorativeDividerProps {
  className?: string;
}

const DecorativeDivider: React.FC<DecorativeDividerProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`} style={{ gap: "0.5vw" }}>
      <div className="flex-1 h-px bg-gray-300" style={{ height: "1px" }} />
      <div className="px-4" style={{ padding: "0 1vw" }}>
        <span
          className="text-gray-400"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
        >
          ✦
        </span>
      </div>
      <div className="flex-1 h-px bg-gray-300" style={{ height: "1px" }} />
    </div>
  );
};

export default DecorativeDivider;

