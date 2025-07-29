"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Subscription", href: "/subscription" },
    { name: "Blog", href: "/blog" },
    { name: "Cộng đồng", href: "/community" },
    { name: "Giới thiệu", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F1E8]/95 backdrop-blur-sm border-b border-[#D4B996]/20 shadow-sm"
          : "bg-[#F5F1E8]/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20'>
          {/* Logo - Responsive sizing */}
          <Link href='/' className='group flex-shrink-0'>
            <span className='font-display font-bold text-lg sm:text-xl md:text-xl lg:text-2xl text-[#6B5B4F] tracking-wide hover:text-[#A67C5A] transition-colors duration-300'>
              SKYLARBOX
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-[#8B7355] hover:text-[#A67C5A] font-medium transition-colors duration-300 relative group text-sm xl:text-base'
              >
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#A67C5A] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </nav>

          {/* Right Section - Icons & Mobile Menu */}
          <div className='flex items-center space-x-2 sm:space-x-4'>
            {/* Action Icons - Hidden on small mobile, shown on larger screens */}
            <div className='hidden sm:flex items-center space-x-2 md:space-x-3'>
              <button className='p-2 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-full transition-all duration-300'>
                <Search className='w-4 h-4 md:w-5 md:h-5' />
                <span className='sr-only'>Tìm kiếm</span>
              </button>
              <button className='p-2 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-full transition-all duration-300'>
                <ShoppingCart className='w-4 h-4 md:w-5 md:h-5' />
                <span className='sr-only'>Giỏ hàng</span>
              </button>
              <button className='p-2 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-full transition-all duration-300'>
                <User className='w-4 h-4 md:w-5 md:h-5' />
                <span className='sr-only'>Tài khoản</span>
              </button>
            </div>

            {/* Mobile Menu Button - Shown on mobile and tablet */}
            <button
              className='lg:hidden p-2 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-full transition-all duration-300'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='w-5 h-5 sm:w-6 sm:h-6' />
              ) : (
                <Menu className='w-5 h-5 sm:w-6 sm:h-6' />
              )}
              <span className='sr-only'>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='lg:hidden bg-[#F5F1E8]/98 backdrop-blur-xl border-t border-[#D4B996]/20'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className='container mx-auto px-4 sm:px-6 py-4 sm:py-6'>
              {/* Navigation Links */}
              <nav className='space-y-3 sm:space-y-4 mb-4 sm:mb-6'>
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className='block text-[#8B7355] hover:text-[#A67C5A] font-medium py-2 px-4 rounded-lg hover:bg-[#A67C5A]/10 transition-all duration-300 text-base sm:text-lg'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Action Icons - Grid layout for better touch targets */}
              <div className='grid grid-cols-3 gap-3 pt-4 border-t border-[#D4B996]/20'>
                <button className='flex flex-col items-center p-3 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-lg transition-all duration-300'>
                  <Search className='w-5 h-5 mb-1' />
                  <span className='text-xs font-medium'>Tìm kiếm</span>
                </button>
                <button className='flex flex-col items-center p-3 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-lg transition-all duration-300'>
                  <ShoppingCart className='w-5 h-5 mb-1' />
                  <span className='text-xs font-medium'>Giỏ hàng</span>
                </button>
                <button className='flex flex-col items-center p-3 text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 rounded-lg transition-all duration-300'>
                  <User className='w-5 h-5 mb-1' />
                  <span className='text-xs font-medium'>Tài khoản</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
