"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Construction, Home } from "lucide-react";

interface UnderDevelopmentProps {
  title?: string;
  description?: string;
}

export function UnderDevelopment({
  title = "Trang đang phát triển",
  description = "Chúng tôi đang nỗ lực hoàn thiện trang này để mang đến trải nghiệm tốt nhất cho bạn.",
}: UnderDevelopmentProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-brand-cream to-brand-sky/30 flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-white rounded-2xl p-8 shadow-lg'
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-20 h-20 bg-gradient-to-br from-brand-lavender to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6'
          >
            <Construction className='w-10 h-10 text-white' />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-2xl font-montserrat font-bold text-brand-brown mb-4'
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-brand-gray mb-8 leading-relaxed'
          >
            {description}
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='mb-8'
          >
            <div className='w-full bg-gray-200 rounded-full h-2 mb-2'>
              <div
                className='bg-gradient-to-r from-brand-lavender to-brand-rose h-2 rounded-full animate-pulse'
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className='text-sm text-brand-gray'>65% hoàn thành</p>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href='/'
              className='inline-flex items-center space-x-2 bg-brand-rose text-white px-6 py-3 rounded-full hover:bg-brand-rose/90 transition-colors font-medium'
            >
              <ArrowLeft className='w-4 h-4' />
              <span>Quay lại trang chủ</span>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-6 pt-6 border-t border-gray-100'
          >
            <p className='text-xs text-brand-gray'>
              Theo dõi chúng tôi để cập nhật thông tin mới nhất
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
