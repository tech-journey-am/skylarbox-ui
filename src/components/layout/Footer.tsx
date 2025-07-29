import Link from "next/link";
import { Instagram, Facebook, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-[#F0E6D6]/60 to-[#E8DCC0]/40 mt-12 sm:mt-16 md:mt-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12'>
          {/* Brand & Contact - Takes full width on mobile, 2 columns on larger screens */}
          <div className='sm:col-span-2 lg:col-span-2'>
            <div className='mb-4 sm:mb-6'>
              <span className='font-display font-bold text-2xl sm:text-3xl text-[#6B5B4F] tracking-wide'>
                SKYLARBOX
              </span>
            </div>
            <p className='text-[#8B7355] mb-4 sm:mb-6 max-w-md text-base sm:text-lg leading-relaxed'>
              Mỗi người tìm bình yên theo cách riêng. Chúng tôi ở đây để đồng
              hành cùng bạn trong hành trình chữa lành.
            </p>

            {/* Company Info - Responsive spacing */}
            <div className='space-y-1 sm:space-y-2 text-sm text-[#8B7355] bg-white/60 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#D4B996]/30'>
              <p className='font-semibold text-[#6B5B4F] text-sm sm:text-base mb-2 sm:mb-3'>
                Công ty TNHH MTV SKYLARBOX
              </p>
              <p className='text-xs sm:text-sm'>Mã số thuế: 0402286006</p>
              <p className='text-xs sm:text-sm'>
                Địa chỉ: Tầng 8, tòa nhà Bạch Đằng Complex
              </p>
              <p className='text-xs sm:text-sm'>
                50 Bạch Đằng, Phường Hải Châu, TP. Đà Nẵng
              </p>
            </div>
          </div>

          {/* Quick Links - Responsive column */}
          <div className=''>
            <h3 className='font-display font-semibold text-[#6B5B4F] mb-4 sm:mb-6 text-base sm:text-lg'>
              Liên kết nhanh
            </h3>
            <ul className='space-y-2 sm:space-y-3'>
              <li>
                <Link
                  href='/products'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href='/subscription'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Subscription
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links - Responsive column */}
          <div className=''>
            <h3 className='font-display font-semibold text-[#6B5B4F] mb-4 sm:mb-6 text-base sm:text-lg'>
              Hỗ trợ khách hàng
            </h3>
            <ul className='space-y-2 sm:space-y-3'>
              <li>
                <Link
                  href='/shipping'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Vận chuyển
                </Link>
              </li>
              <li>
                <Link
                  href='/return'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Đổi trả
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-[#8B7355] hover:text-[#A67C5A] transition-colors font-medium text-sm sm:text-base'
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - Responsive layout */}
        <div className='border-t border-[#D4B996]/40 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
          {/* Copyright - Responsive text */}
          <p className='text-[#8B7355] font-medium text-sm sm:text-base order-2 sm:order-1'>
            © 2024 Skylarbox. Tất cả quyền được bảo lưu.
          </p>

          {/* Social Links - Responsive sizing and spacing */}
          <div className='flex items-center space-x-3 sm:space-x-4 md:space-x-6 order-1 sm:order-2'>
            <Link
              href='https://instagram.com/skylarbox'
              className='w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 transition-all duration-300 hover:scale-110 border border-[#D4B996]/30'
            >
              <Instagram className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='sr-only'>Instagram</span>
            </Link>
            <Link
              href='https://facebook.com/skylarbox'
              className='w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 transition-all duration-300 hover:scale-110 border border-[#D4B996]/30'
            >
              <Facebook className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='sr-only'>Facebook</span>
            </Link>
            <Link
              href='https://open.spotify.com/user/skylarbox'
              className='w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center text-[#8B7355] hover:text-[#A67C5A] hover:bg-[#A67C5A]/10 transition-all duration-300 hover:scale-110 border border-[#D4B996]/30'
            >
              <Music className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='sr-only'>Spotify</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
