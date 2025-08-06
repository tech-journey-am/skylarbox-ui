import React, { useState } from "react";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register">("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="bg-white rounded-lg shadow-lg w-full relative"
        style={{ padding: "2vw", maxWidth: "25vw" }}
      >
        <button
          className="absolute text-gray-500 hover:text-gray-800"
          style={{
            top: "0.5vw",
            right: "0.5vw",
            fontSize: "clamp(22px, 2vw, 2.5rem)",
          }}
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex justify-center" style={{ marginBottom: "1.5vw" }}>
          <button
            className={`font-semibold rounded-l ${
              tab === "login"
                ? "bg-blue-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            style={{
              padding: "0.5vw 1vw",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
            onClick={() => setTab("login")}
          >
            Sign In
          </button>
          <button
            className={`font-semibold rounded-r ${
              tab === "register"
                ? "bg-blue-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            style={{
              padding: "0.5vw 1vw",
              fontSize: "clamp(16px, 1vw, 1.25rem)",
            }}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>
        {tab === "login" ? (
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded"
              style={{
                padding: "0.5vw 0.75vw",
                marginBottom: "0.75vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded"
              style={{
                padding: "0.5vw 0.75vw",
                marginBottom: "0.75vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            />
            <button
              type="submit"
              className="w-full bg-blue-800 text-white rounded hover:bg-blue-700"
              style={{
                padding: "0.5vw 0",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              Sign In
            </button>
            <div
              className="text-center"
              style={{
                marginTop: "1vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              Don&apos;t have an account?{" "}
              <span
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setTab("register")}
              >
                Register
              </span>
            </div>
          </form>
        ) : (
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded"
              style={{
                padding: "0.5vw 0.75vw",
                marginBottom: "0.75vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded"
              style={{
                padding: "0.5vw 0.75vw",
                marginBottom: "0.75vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded"
              style={{
                padding: "0.5vw 0.75vw",
                marginBottom: "0.75vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            />
            <button
              type="submit"
              className="w-full bg-blue-800 text-white rounded hover:bg-blue-700"
              style={{
                padding: "0.5vw 0",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              Register
            </button>
            <div
              className="text-center"
              style={{
                marginTop: "1vw",
                fontSize: "clamp(16px, 1vw, 1.25rem)",
              }}
            >
              Already have an account?{" "}
              <span
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setTab("login")}
              >
                Sign In
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

