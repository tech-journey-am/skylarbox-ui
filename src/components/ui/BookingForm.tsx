"use client";

import React from "react";

const BookingForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-full bg-blue-50 rounded-lg text-zinc-800"
      style={{ padding: "1.5vw", marginTop: "2vw" }}
    >
      <div className={`w-full `}>
        <label
          className="font-medium text-zinc-800"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
        >
          Organized Group Tour
        </label>
        <div
          className="flex flex-col justify-center w-full bg-white rounded"
          style={{
            padding: "0.875vw 1vw",
            marginTop: "0.25vw",
            fontSize: "clamp(16px, 1vw, 1.25rem)",
          }}
        >
          <div className="opacity-50 text-zinc-800">Single Customized Trip</div>
        </div>
      </div>

      <div className={`w-full`} style={{ marginTop: "1.5vw" }}>
        <label
          className="font-medium text-zinc-800"
          style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
        >
          Organized Group Tour
        </label>
        <div
          className="flex flex-col justify-center w-full bg-white rounded"
          style={{
            padding: "0.875vw 1vw",
            marginTop: "0.25vw",
            fontSize: "clamp(16px, 1vw, 1.25rem)",
          }}
        >
          <div className="opacity-50 text-zinc-800">Single Customized Trip</div>
        </div>
      </div>

      <button
        type="submit"
        className="overflow-hidden self-start text-center text-white whitespace-nowrap bg-blue-800 rounded hover:bg-blue-900 transition-colors"
        style={{
          gap: "0.375vw",
          padding: "0.5vw 1.25vw",
          marginTop: "1.5vw",
          fontSize: "clamp(16px, 1vw, 1.25rem)",
          lineHeight: "1.5",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;

