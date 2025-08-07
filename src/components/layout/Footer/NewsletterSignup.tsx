import { IconSend } from "@/components/icon";
import { motion } from "framer-motion";
import * as React from "react";

interface NewsletterSignupProps {}

export function NewsletterSignup({}: NewsletterSignupProps) {
  return (
    <section className='flex flex-wrap gap-vw-2 justify-between items-center w-full max-md:max-w-full'>
      <div className='flex flex-col justify-center self-stretch my-auto min-w-60'>
        <h2 className='text-[2vw] font-semibold leading-none text-neutral-700 font-serif'>
          Đăng ký nhận bản tin
        </h2>
        <p className='mt-vw-1 text-[1vw] text-brand-gray italic'>
          Nhận ưu đãi 10% cho đơn hàng đầu tiên
        </p>
      </div>
      <form className='flex gap-vw self-stretch my-auto text-[1vw] min-w-60 max-md:max-w-full'>
        <input
          type='email'
          placeholder='Nhập email của bạn'
          className='overflow-hidden px-vw-1 py-[.6vw] bg-white rounded-[1vw] border border-solid border-brand-lavender/30 min-w-60 text-brand-gray w-[20vw] focus:outline-none focus:border-brand-lavender'
        />
        <motion.button
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex overflow-hidden gap-vw items-center self-start px-vw-1 py-[.6vw] leading-loose text-center text-white bg-brand-rose rounded-[1vw] hover:bg-brand-rose/90 transition-colors'
        >
          <span className='self-stretch my-auto text-[1vw]'>Đăng ký</span>
          <IconSend />
        </motion.button>
      </form>
    </section>
  );
}
