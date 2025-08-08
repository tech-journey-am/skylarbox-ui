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
      className={`bg-white/95 backdrop-blur-sm fixed top-0 py-vw-1 inset-x-0 z-50 transition-transform duration-300 ease-in-out shadow-sm border-b border-gray-100 ${className} ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className='container mx-auto px-4 h-full'>
        <nav className='flex items-center justify-between h-full'>
          {/* Logo */}
          <Link href='/'>
            <div className='shadow-lg overflow-hidden rounded-full flex items-center justify-center relative md:w-vw-3 md:h-vw-3 md:min-w-vw-2.5 md:min-h-vw-2.5 size-8'>
              <Image
                src='/logo/logo_circle.png'
                fill
                alt='logo'
                className='object-contain'
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-[3vw]'>
            <Link
              href='/about'
              className='text-brand-gray hover:text-brand-lavender transition-colors text-[1vw]'
            >
              Giới thiệu
            </Link>
            <Link
              href='/products'
              className='text-brand-gray hover:text-brand-lavender transition-colors text-[1vw]'
            >
              Sản phẩm
            </Link>
            <Link
              href='/subscription'
              className='text-brand-gray hover:text-brand-lavender transition-colors text-[1vw]'
            >
              Subscription
            </Link>
            <Link
              href='/blog'
              className='text-brand-gray hover:text-brand-lavender transition-colors text-[1vw]'
            >
              Blog
            </Link>
            <Link
              href='/community'
              className='text-brand-gray hover:text-brand-lavender transition-colors text-[1vw]'
            >
              Cộng đồng
            </Link>
          </div>

          {/* Search Bar */}
          <div className='hidden lg:flex items-center space-x-[0.6vw]'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Tìm kiếm...'
                className='border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender focus:border-transparent w-[16vw] px-[2.5vw] py-[0.6vw] text-[1vw]'
              />
              <Search className='absolute text-gray-400 left-[0.8vw] top-[50%] transform -translate-y-1/2 w-[1vw] h-[1vw]' />
            </div>

            {/* Cart & User */}
            <div className='flex items-center space-x-[0.6vw]'>
              <button className='relative text-gray-700 hover:text-brand-lavender transition-colors p-[0.5vw]'>
                <ShoppingCart className='w-[1.5vw] h-[1.5vw]' />
                {cartCount > 0 && (
                  <span className='absolute bg-brand-rose text-white rounded-full flex items-center justify-center top-[0.25vw] right-[0.25vw] text-[0.8vw] w-[1.25vw] h-[1.25vw]'>
                    {cartCount}
                  </span>
                )}
              </button>
              <button className='text-gray-700 hover:text-brand-lavender transition-colors p-[0.5vw]'>
                <User className='w-[1.5vw] h-[1.5vw]' />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-[0.5vw]'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='text-gray-700 w-6 h-6' />
            ) : (
              <Menu className='text-gray-700 w-6 h-6' />
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
            <div className='space-y-[0.6vw] p-[1.5vw]'>
              <Link
                href='/about'
                className='block text-gray-700 hover:text-brand-lavender transition-colors text-[3.5vw]'
              >
                Giới thiệu
              </Link>
              <Link
                href='/products'
                className='block text-gray-700 hover:text-brand-lavender transition-colors text-[3.5vw]'
              >
                Sản phẩm
              </Link>
              <Link
                href='/subscription'
                className='block text-gray-700 hover:text-brand-lavender transition-colors text-[3.5vw]'
              >
                Subscription
              </Link>
              <Link
                href='/blog'
                className='block text-gray-700 hover:text-brand-lavender transition-colors text-[3.5vw]'
              >
                Blog
              </Link>
              <Link
                href='/community'
                className='block text-gray-700 hover:text-brand-lavender transition-colors text-[3.5vw]'
              >
                Cộng đồng
              </Link>
              <div className='border-t border-gray-100 pt-[1vw]'>
                <div className='relative mb-4'>
                  <input
                    type='text'
                    placeholder='Tìm kiếm...'
                    className='w-full border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-lavender px-[2vw] py-[1vw] text-[3.5vw]'
                  />
                  <Search className='absolute text-gray-400 left-[0.8vw] top-[50%] transform -translate-y-1/2 w-[3vw] h-[3vw]' />
                </div>
                <div className='flex items-center space-x-3'>
                  <button className='relative text-gray-700 hover:text-brand-lavender transition-colors p-[0.5vw]'>
                    <ShoppingCart className='w-[6vw] h-[6vw]' />
                    {cartCount > 0 && (
                      <span className='absolute bg-brand-rose text-white rounded-full flex items-center justify-center top-[0.25vw] right-[0.25vw] text-[2.5vw] w-[5vw] h-[5vw]'>
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <button className='text-gray-700 hover:text-brand-lavender transition-colors p-[0.5vw]'>
                    <User className='w-[6vw] h-[6vw]' />
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
