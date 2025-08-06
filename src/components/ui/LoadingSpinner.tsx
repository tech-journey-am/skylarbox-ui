import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          width: "1vw",
          height: "1vw",
          minWidth: "16px",
          minHeight: "16px",
        };
      case "lg":
        return {
          width: "2vw",
          height: "2vw",
          minWidth: "32px",
          minHeight: "32px",
        };
      default:
        return {
          width: "1.5vw",
          height: "1.5vw",
          minWidth: "24px",
          minHeight: "24px",
        };
    }
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${className}`}
      style={getSizeStyles()}
    />
  );
};

interface LoadingDotsProps {
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({ className = "" }) => {
  return (
    <div className={`flex space-x-1 ${className}`} style={{ gap: "0.25vw" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="bg-blue-600 rounded-full animate-bounce"
          style={{
            width: "0.5vw",
            height: "0.5vw",
            minWidth: "8px",
            minHeight: "8px",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner;

