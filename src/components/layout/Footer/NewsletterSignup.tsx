import { IconSend } from "@/components/icon";
import * as React from "react";

interface NewsletterSignupProps {}

export function NewsletterSignup({}: NewsletterSignupProps) {
  return (
    <section className='flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full'>
      <div className='flex flex-col justify-center self-stretch my-auto min-w-60'>
        <h2 className='text-2xl font-semibold leading-none text-brand-brown font-montserrat'>
          Đăng ký nhận bản tin
        </h2>
        <p className='mt-1 text-xs text-brand-gray'>
          Nhận ưu đãi 10% cho đơn hàng đầu tiên
        </p>
      </div>
      <form className='flex gap-2 self-stretch my-auto text-xs min-w-60 max-md:max-w-full'>
        <input
          type='email'
          placeholder='Nhập email của bạn'
          className='overflow-hidden px-5 py-2 bg-white rounded border border-solid border-brand-lavender/30 min-w-60 text-brand-gray w-[311px] focus:outline-none focus:border-brand-lavender'
        />
        <button
          type='submit'
          className='flex overflow-hidden gap-1.5 items-center self-start px-5 py-2 leading-loose text-center text-white bg-brand-rose rounded hover:bg-brand-rose/90 transition-colors'
        >
          <span className='self-stretch my-auto'>Đăng ký</span>
          <IconSend />
        </button>
      </form>
    </section>
  );
}
