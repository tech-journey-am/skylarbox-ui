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
      className={`bg-white/95 backdrop-blur-sm fixed top-0 inset-x-0 h-20 z-50 transition-transform duration-300 ease-in-out shadow-sm border-b border-gray-100 ${className} ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className='container mx-auto px-4 h-full'>
        <nav className='flex items-center justify-between h-full'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-12 h-12 bg-gradient-to-br from-brand-lavender to-brand-lavender rounded-lg flex items-center justify-center relative'>
              <Image
                src='/logo/logo.png'
                fill
                alt='logo'
                className='object-contain'
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/about'
              className='text-brand-gray hover:text-brand-lavender transition-colors'
            >
              Giới thiệu
            </Link>
            <Link
              href='/products'
              className='text-brand-gray hover:text-brand-lavender transition-colors'
            >
              Sản phẩm
            </Link>
            <Link
              href='/subscription'
              className='text-brand-gray hover:text-brand-lavender transition-colors'
            >
              Subscription
            </Link>
            <Link
              href='/blog'
              className='text-brand-gray hover:text-brand-lavender transition-colors'
            >
              Blog
            </Link>
            <Link
              href='/community'
              className='text-brand-gray hover:text-brand-lavender transition-colors'
            >
              Cộng đồng
            </Link>
          </div>

          {/* Search Bar */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Tìm kiếm...'
                className='w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent'
              />
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            </div>

            {/* Cart & User */}
            <div className='flex items-center space-x-3'>
              <button className='relative p-2 text-gray-700 hover:text-brand-lavender transition-colors'>
                <ShoppingCart className='w-6 h-6' />
                {cartCount > 0 && (
                  <span className='absolute -top-1 -right-1 bg-brand-rose text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                    {cartCount}
                  </span>
                )}
              </button>
              <button className='p-2 text-gray-700 hover:text-brand-lavender transition-colors'>
                <User className='w-6 h-6' />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6 text-gray-700' />
            ) : (
              <Menu className='w-6 h-6 text-gray-700' />
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
            className='md:hidden bg-white border-t border-gray-100'
          >
            <div className='px-4 py-6 space-y-4'>
              <Link
                href='/about'
                className='block text-gray-700 hover:text-brand-lavender transition-colors'
              >
                Giới thiệu
              </Link>
              <Link
                href='/products'
                className='block text-gray-700 hover:text-brand-lavender transition-colors'
              >
                Sản phẩm
              </Link>
              <Link
                href='/subscription'
                className='block text-gray-700 hover:text-brand-lavender transition-colors'
              >
                Subscription
              </Link>
              <Link
                href='/blog'
                className='block text-gray-700 hover:text-brand-lavender transition-colors'
              >
                Blog
              </Link>
              <Link
                href='/community'
                className='block text-gray-700 hover:text-brand-lavender transition-colors'
              >
                Cộng đồng
              </Link>
              <div className='pt-4 border-t border-gray-100'>
                <div className='relative mb-4'>
                  <input
                    type='text'
                    placeholder='Tìm kiếm...'
                    className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender'
                  />
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                </div>
                <div className='flex items-center space-x-3'>
                  <button className='relative p-2 text-gray-700 hover:text-brand-lavender transition-colors'>
                    <ShoppingCart className='w-6 h-6' />
                    {cartCount > 0 && (
                      <span className='absolute -top-1 -right-1 bg-brand-rose text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <button className='p-2 text-gray-700 hover:text-brand-lavender transition-colors'>
                    <User className='w-6 h-6' />
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
