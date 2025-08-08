"use client";
import { IconSend } from "@/components/icon";
import { motion } from "framer-motion";
import * as React from "react";

interface ContactFormProps {}

export function ContactForm({}: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className='flex flex-col w-full lg:w-[20vw] lg:min-w-[20vw] text-xs'>
      <h3 className='text-lg md:text-[1.6vw] font-semibold leading-none text-neutral-700 font-serif'>
        Liên hệ
      </h3>
      <form
        onSubmit={handleSubmit}
        className='mt-3 md:mt-vw-2 w-full text-sm md:text-[1vw] space-y-3 md:space-y-vw-1'
      >
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Nhập tên của bạn'
          className='overflow-hidden px-3 md:px-vw-1 py-2 md:py-[.6vw] bg-white rounded-lg md:rounded-[1vw] border border-solid border-brand-lavender/30 text-brand-gray w-full focus:outline-none focus:border-brand-lavender text-sm md:text-[1vw]'
        />

        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Nhập email của bạn'
          className='overflow-hidden px-3 md:px-vw-1 py-2 md:py-[.6vw] bg-white rounded-lg md:rounded-[1vw] border border-solid border-brand-lavender/30 text-brand-gray w-full focus:outline-none focus:border-brand-lavender text-sm md:text-[1vw]'
        />

        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleInputChange}
          placeholder='Nhập số điện thoại của bạn'
          className='overflow-hidden px-3 md:px-vw-1 py-2 md:py-[.6vw] bg-white rounded-lg md:rounded-[1vw] border border-solid border-brand-lavender/30 text-brand-gray w-full focus:outline-none focus:border-brand-lavender text-sm md:text-[1vw]'
        />

        <motion.button
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex overflow-hidden gap-2 md:gap-vw items-center self-start px-3 md:px-vw-1 py-2 md:py-[.6vw] leading-loose justify-center text-brand-lavender bg-transparent rounded-lg md:rounded-[1vw] hover:bg-brand-lavender/90 hover:text-white border border-brand-lavender transition-colors w-full'
        >
          <span className='self-stretch my-auto text-sm md:text-[1vw]'>
            Gửi
          </span>
          <IconSend />
        </motion.button>
      </form>
    </section>
  );
}
