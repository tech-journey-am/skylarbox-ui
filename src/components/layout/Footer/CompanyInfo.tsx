import * as React from "react";
import {
  IconFacebook,
  IconLinkedin,
  IconInstagram,
  IconWhatsapp,
} from "@/components/icon";
import Link from "next/link";

interface CompanyInfoProps {}

export function CompanyInfo({}: CompanyInfoProps) {
  return (
    <section className='flex flex-col min-w-60 w-[280px]'>
      <h3 className='text-base font-semibold leading-none capitalize text-brand-brown font-montserrat'>
        SKYLARBOX
      </h3>
      <p className='mt-5 text-xs leading-5 text-brand-gray'>
        Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng,
        sống động và lành. Mỗi người tìm bình yên theo cách riêng của mình.
      </p>
      <div className='flex gap-2 items-center self-start mt-5'>
        <Link href='#' className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'>
          <IconFacebook />
        </Link>
        <Link href='#' className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'>
          <IconLinkedin />
        </Link>
        <Link href='#' className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'>
          <IconWhatsapp />
        </Link>
        <Link href='#' className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square hover:bg-brand-lavender/20 transition-colors'>
          <IconInstagram />
        </Link>
      </div>
    </section>
  );
}
