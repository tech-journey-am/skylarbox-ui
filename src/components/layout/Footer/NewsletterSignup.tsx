import { IconSend } from "@/components/icon";
import { motion } from "framer-motion";
import * as React from "react";

interface NewsletterSignupProps {}

export function NewsletterSignup({}: NewsletterSignupProps) {
  return (
    <section className='flex flex-col md:flex-row gap-4 md:gap-vw-2 justify-between items-start md:items-center w-full'>
      <div className='flex flex-col justify-center self-stretch my-auto w-full md:min-w-60'>
        <h2 className='text-xl max-md:text-center md:text-[2vw] font-semibold leading-none text-neutral-700 font-serif'>
          Đăng ký nhận bản tin
        </h2>
        <p className='mt-2 md:mt-vw-1 max-md:text-center text-sm md:text-[1vw] text-brand-gray italic'>
          Nhận ưu đãi 10% cho đơn hàng đầu tiên
        </p>
      </div>
      <form className='flex flex-col md:flex-row gap-3 md:gap-vw self-stretch my-auto text-sm md:text-[1vw] w-full md:min-w-60'>
        <input
          type='email'
          placeholder='Nhập email của bạn'
          className='overflow-hidden px-3 md:px-vw-1 py-2 md:py-[.6vw] bg-white rounded-lg md:rounded-[1vw] border border-solid border-brand-lavender/30 text-brand-gray w-full md:w-[20vw] focus:outline-none focus:border-brand-lavender text-sm md:text-[1vw]'
        />
        <motion.button
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex overflow-hidden gap-2 md:gap-vw items-center justify-center px-3 md:px-vw-1 py-2 md:py-[.6vw] leading-loose text-center text-white bg-brand-rose rounded-lg md:rounded-[1vw] hover:bg-brand-rose/90 transition-colors'
        >
          <span className='self-stretch my-auto text-sm md:text-[1vw]'>
            Đăng ký
          </span>
          <IconSend />
        </motion.button>
      </form>
    </section>
  );
}
