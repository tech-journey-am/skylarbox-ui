import React from "react";

interface TourInfoProps {
  title: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  price: string;
}

const TourInfo: React.FC<TourInfoProps> = ({
  title,
  duration,
  groupSize,
  difficulty,
  price,
}) => {
  return (
    <div className="flex flex-col" style={{ gap: "1vw" }}>
      <h1
        className="font-bold text-zinc-800"
        style={{ fontSize: "clamp(22px, 2vw, 2.5rem)" }}
      >
        {title}
      </h1>
      <div className="flex flex-col" style={{ marginLeft: "0.5vw" }}>
        <div className="flex items-center" style={{ gap: "0.5vw" }}>
          <span
            className="text-zinc-600"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Duration:
          </span>
          <span
            className="text-zinc-800"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {duration}
          </span>
        </div>
        <div className="flex items-center" style={{ gap: "0.5vw" }}>
          <span
            className="text-zinc-600"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Group Size:
          </span>
          <span
            className="text-zinc-800"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {groupSize}
          </span>
        </div>
        <div className="flex items-center" style={{ gap: "0.5vw" }}>
          <span
            className="text-zinc-600"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Difficulty:
          </span>
          <span
            className="text-zinc-800"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {difficulty}
          </span>
        </div>
        <div className="flex items-center" style={{ gap: "0.5vw" }}>
          <span
            className="text-zinc-600"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Price:
          </span>
          <span
            className="text-zinc-800 font-bold"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;

