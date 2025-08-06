"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Image from "next/image";
interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Header scroll effect
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <header
      className={`bg-white/95 backdrop-blur-sm fixed top-0 inset-x-0 z-50 transition-transform duration-300 ease-in-out shadow-sm border-b border-gray-100 ${className} ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ height: "5vw", minHeight: "4vw" }}
    >
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="bg-gradient-to-br from-brand-lavender to-brand-lavender rounded-lg flex items-center justify-center relative"
              style={{
                width: "3vw",
                height: "3vw",
                minWidth: "2.5vw",
                minHeight: "2.5vw",
              }}
            >
              <Image
                src="/logo/logo.png"
                fill
                alt="logo"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-brand-gray hover:text-brand-lavender transition-colors"
              style={{ fontSize: "1.2vw" }}
            >
              Giới thiệu
            </Link>
            <Link
              href="/products"
              className="text-brand-gray hover:text-brand-lavender transition-colors"
              style={{ fontSize: "1.2vw" }}
            >
              Sản phẩm
            </Link>
            <Link
              href="/subscription"
              className="text-brand-gray hover:text-brand-lavender transition-colors"
              style={{ fontSize: "1.2vw" }}
            >
              Subscription
            </Link>
            <Link
              href="/blog"
              className="text-brand-gray hover:text-brand-lavender transition-colors"
              style={{ fontSize: "1.2vw" }}
            >
              Blog
            </Link>
            <Link
              href="/community"
              className="text-brand-gray hover:text-brand-lavender transition-colors"
              style={{ fontSize: "1.2vw" }}
            >
              Cộng đồng
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent"
                style={{
                  width: "16vw",
                  paddingLeft: "2.5vw",
                  paddingRight: "1vw",
                  paddingTop: "0.8vw",
                  paddingBottom: "0.8vw",
                  fontSize: "1vw",
                }}
              />
              <Search
                className="absolute text-gray-400"
                style={{
                  left: "0.8vw",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1vw",
                  height: "1vw",
                }}
              />
            </div>

            {/* Cart & User */}
            <div className="flex items-center space-x-3">
              <button
                className="relative text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ padding: "0.5vw" }}
              >
                <ShoppingCart style={{ width: "1.5vw", height: "1.5vw" }} />
                {cartCount > 0 && (
                  <span
                    className="absolute bg-brand-rose text-white rounded-full flex items-center justify-center"
                    style={{
                      top: "-0.25vw",
                      right: "-0.25vw",
                      fontSize: "0.8vw",
                      width: "1.25vw",
                      height: "1.25vw",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ padding: "0.5vw" }}
              >
                <User style={{ width: "1.5vw", height: "1.5vw" }} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ padding: "0.5vw" }}
          >
            {isMobileMenuOpen ? (
              <X
                className="text-gray-700"
                style={{ width: "1.5vw", height: "1.5vw" }}
              />
            ) : (
              <Menu
                className="text-gray-700"
                style={{ width: "1.5vw", height: "1.5vw" }}
              />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="space-y-4" style={{ padding: "1.5vw" }}>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ fontSize: "3.5vw" }}
              >
                Giới thiệu
              </Link>
              <Link
                href="/products"
                className="block text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ fontSize: "3.5vw" }}
              >
                Sản phẩm
              </Link>
              <Link
                href="/subscription"
                className="block text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ fontSize: "3.5vw" }}
              >
                Subscription
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ fontSize: "3.5vw" }}
              >
                Blog
              </Link>
              <Link
                href="/community"
                className="block text-gray-700 hover:text-brand-lavender transition-colors"
                style={{ fontSize: "3.5vw" }}
              >
                Cộng đồng
              </Link>
              <div
                className="border-t border-gray-100"
                style={{ paddingTop: "1vw" }}
              >
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="w-full border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender"
                    style={{
                      paddingLeft: "2.5vw",
                      paddingRight: "1vw",
                      paddingTop: "2vw",
                      paddingBottom: "2vw",
                      fontSize: "3.5vw",
                    }}
                  />
                  <Search
                    className="absolute text-gray-400"
                    style={{
                      left: "0.8vw",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "3vw",
                      height: "3vw",
                    }}
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    className="relative text-gray-700 hover:text-brand-lavender transition-colors"
                    style={{ padding: "0.5vw" }}
                  >
                    <ShoppingCart style={{ width: "6vw", height: "6vw" }} />
                    {cartCount > 0 && (
                      <span
                        className="absolute bg-brand-rose text-white rounded-full flex items-center justify-center"
                        style={{
                          top: "-0.25vw",
                          right: "-0.25vw",
                          fontSize: "2.5vw",
                          width: "5vw",
                          height: "5vw",
                        }}
                      >
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <button
                    className="text-gray-700 hover:text-brand-lavender transition-colors"
                    style={{ padding: "0.5vw" }}
                  >
                    <User style={{ width: "6vw", height: "6vw" }} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

