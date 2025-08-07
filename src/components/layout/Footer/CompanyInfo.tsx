import * as React from "react";
import {
  IconFacebook,
  IconLinkedin,
  IconInstagram,
  IconWhatsapp,
} from "@/components/icon";
import Link from "next/link";
import { motion } from "framer-motion";

interface CompanyInfoProps {}

export function CompanyInfo({}: CompanyInfoProps) {
  return (
    <section className='flex flex-col min-w-60 w-[20vw]'>
      <h3 className='text-[2vw] font-semibold leading-none capitalize text-neutral-700 font-serif'>
        SKYLARBOX
      </h3>
      <p className='mt-vw text-[1vw] leading-snug text-brand-gray italic'>
        Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng,
        sống động và lành. Mỗi người tìm bình yên theo cách riêng của mình.
      </p>
      <div className='flex gap-vw-1 items-center self-start mt-vw-2'>
        <Link href='#'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'
          >
            <IconFacebook />
          </motion.button>
        </Link>
        <Link href='#'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'
          >
            <IconLinkedin />
          </motion.button>
        </Link>
        <Link href='#'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'
          >
            <IconWhatsapp />
          </motion.button>
        </Link>
        <Link href='#'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'
          >
            <IconInstagram />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
