"use client";

import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const LoadingDemo = () => {
  return (
    <div className="p-8" style={{ padding: "2vw" }}>
      <div
        className="max-w-4xl mx-auto"
        style={{ maxWidth: "50vw", margin: "0 auto" }}
      >
        <h1
          className="text-3xl font-bold mb-8"
          style={{ fontSize: "clamp(22px, 2vw, 2.5rem)", marginBottom: "2vw" }}
        >
          Loading Components Demo
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ gap: "2vw" }}
        >
          <div className="text-center">
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                fontSize: "clamp(18px, 1.5vw, 2rem)",
                marginBottom: "1vw",
              }}
            >
              Small Spinner
            </h3>
            <div className="flex justify-center">
              <LoadingSpinner size="sm" />
            </div>
            <p
              className="text-gray-600 mt-4"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Small loading spinner for compact spaces
            </p>
          </div>

          <div className="text-center">
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                fontSize: "clamp(18px, 1.5vw, 2rem)",
                marginBottom: "1vw",
              }}
            >
              Medium Spinner
            </h3>
            <div className="flex justify-center">
              <LoadingSpinner size="md" />
            </div>
            <p
              className="text-gray-600 mt-4"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Default medium size spinner
            </p>
          </div>

          <div className="text-center">
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                fontSize: "clamp(18px, 1.5vw, 2rem)",
                marginBottom: "1vw",
              }}
            >
              Large Spinner
            </h3>
            <div className="flex justify-center">
              <LoadingSpinner size="lg" />
            </div>
            <p
              className="text-gray-600 mt-4"
              style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
            >
              Large spinner for prominent loading states
            </p>
          </div>
        </div>

        <div className="mt-12 text-center" style={{ marginTop: "3vw" }}>
          <h2
            className="text-2xl font-bold mb-6"
            style={{
              fontSize: "clamp(22px, 2vw, 2.5rem)",
              marginBottom: "1.5vw",
            }}
          >
            Loading Dots
          </h2>
          <div className="flex justify-center">
            <div className="flex space-x-2" style={{ gap: "0.5vw" }}>
              <div
                className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                style={{
                  width: "0.75vw",
                  height: "0.75vw",
                  minWidth: "12px",
                  minHeight: "12px",
                }}
              />
              <div
                className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                style={{
                  width: "0.75vw",
                  height: "0.75vw",
                  minWidth: "12px",
                  minHeight: "12px",
                  animationDelay: "0.1s",
                }}
              />
              <div
                className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                style={{
                  width: "0.75vw",
                  height: "0.75vw",
                  minWidth: "12px",
                  minHeight: "12px",
                  animationDelay: "0.2s",
                }}
              />
            </div>
          </div>
          <p
            className="text-gray-600 mt-4"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            Animated dots for loading states
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingDemo;

