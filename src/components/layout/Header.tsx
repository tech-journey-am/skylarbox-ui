"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconBoat } from "@/components/icon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-white shadow-sm sticky top-0 z-50"
      style={{ height: "5vw", minHeight: "80px" }}
    >
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        <div
          className="flex items-center justify-between h-full"
          style={{ height: "100%" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className="w-12 h-12 bg-brand-lavender rounded-lg flex items-center justify-center mr-3"
              style={{
                width: "3vw",
                height: "3vw",
                minWidth: "48px",
                minHeight: "48px",
                marginRight: "0.75vw",
              }}
            >
              <IconBoat
                className="text-white"
                style={{
                  width: "1.5vw",
                  height: "1.5vw",
                  minWidth: "24px",
                  minHeight: "24px",
                }}
              />
            </div>
            <span
              className="font-bold text-xl text-brand-brown"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              Skylarbox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            style={{ gap: "2vw" }}
          >
            <Link
              href="/about"
              className="text-brand-gray hover:text-brand-lavender transition-colors font-medium"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              Giới thiệu
            </Link>
            <Link
              href="/products"
              className="text-brand-gray hover:text-brand-lavender transition-colors font-medium"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              Sản phẩm
            </Link>
            <Link
              href="/subscription"
              className="text-brand-gray hover:text-brand-lavender transition-colors font-medium"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              Subscription
            </Link>
            <Link
              href="/blog"
              className="text-brand-gray hover:text-brand-lavender transition-colors font-medium"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              Blog
            </Link>
            <Link
              href="/community"
              className="text-brand-gray hover:text-brand-lavender transition-colors font-medium"
              style={{ fontSize: "clamp(18px, 1.5vw, 2rem)" }}
            >
              Cộng đồng
            </Link>
          </nav>

          {/* Search Bar */}
          <div
            className="hidden lg:flex items-center flex-1 max-w-md mx-8"
            style={{ maxWidth: "25vw", margin: "0 2vw" }}
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent"
                style={{
                  padding: "0.5vw 1vw",
                  fontSize: "clamp(16px, 1vw, 1.25rem)",
                }}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-lavender">
                <svg
                  className="w-5 h-5"
                  style={{
                    width: "1.25vw",
                    height: "1.25vw",
                    minWidth: "20px",
                    minHeight: "20px",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4" style={{ gap: "1vw" }}>
            <button className="text-brand-gray hover:text-brand-lavender transition-colors">
              <svg
                className="w-6 h-6"
                style={{
                  width: "1.5vw",
                  height: "1.5vw",
                  minWidth: "24px",
                  minHeight: "24px",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
            </button>
            <button className="text-brand-gray hover:text-brand-lavender transition-colors">
              <svg
                className="w-6 h-6"
                style={{
                  width: "1.5vw",
                  height: "1.5vw",
                  minWidth: "24px",
                  minHeight: "24px",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-gray hover:text-brand-lavender transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                style={{
                  width: "1.5vw",
                  height: "1.5vw",
                  minWidth: "24px",
                  minHeight: "24px",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
            style={{ borderTop: "1px solid #e5e7eb" }}
          >
            <div
              className="py-4 space-y-4"
              style={{ padding: "1vw 0", gap: "1vw" }}
            >
              <Link
                href="/about"
                className="block px-4 py-2 text-brand-gray hover:text-brand-lavender transition-colors"
                style={{
                  padding: "0.5vw 1vw",
                  fontSize: "clamp(18px, 1.5vw, 2rem)",
                }}
              >
                Giới thiệu
              </Link>
              <Link
                href="/products"
                className="block px-4 py-2 text-brand-gray hover:text-brand-lavender transition-colors"
                style={{
                  padding: "0.5vw 1vw",
                  fontSize: "clamp(18px, 1.5vw, 2rem)",
                }}
              >
                Sản phẩm
              </Link>
              <Link
                href="/subscription"
                className="block px-4 py-2 text-brand-gray hover:text-brand-lavender transition-colors"
                style={{
                  padding: "0.5vw 1vw",
                  fontSize: "clamp(18px, 1.5vw, 2rem)",
                }}
              >
                Subscription
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-brand-gray hover:text-brand-lavender transition-colors"
                style={{
                  padding: "0.5vw 1vw",
                  fontSize: "clamp(18px, 1.5vw, 2rem)",
                }}
              >
                Blog
              </Link>
              <Link
                href="/community"
                className="block px-4 py-2 text-brand-gray hover:text-brand-lavender transition-colors"
                style={{
                  padding: "0.5vw 1vw",
                  fontSize: "clamp(18px, 1.5vw, 2rem)",
                }}
              >
                Cộng đồng
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

