import * as React from "react";
import { IconMail, IconPhone, IconLocations } from "@/components/icon";
import Link from "next/link";

interface ContactInfoProps {}

export function ContactInfo({}: ContactInfoProps) {
  return (
    <section className='min-w-[20vw] w-[20vw]'>
      <h3 className='text-[1.6vw] font-semibold leading-none text-neutral-700 font-serif'>
        Thông tin liên hệ
      </h3>
      <div className='flex flex-col mt-6 w-full text-xs max-w-[20vw] text-brand-gray'>
        <Link
          href={"mailto:TBC"}
          className='flex gap-vw items-center self-start leading-none whitespace-nowrap hover:text-brand-lavender transition-colors'
        >
          <div className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square'>
            <IconMail />
          </div>
          <span className='self-stretch my-auto text-[1vw]'>TBC</span>
        </Link>

        <h4 className='mt-vw-2 font-semibold text-neutral-700 text-[1.2vw]'>
          Văn phòng chính
        </h4>

        <Link
          href='#'
          className='flex gap-vw items-center self-start mt-[.6vw] leading-none hover:text-brand-lavender transition-colors'
        >
          <div className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square'>
            <IconPhone />
          </div>
          <div className='flex flex-col justify-center self-stretch my-auto'>
            <span className='text-[1vw]'>TBC</span>
          </div>
        </Link>

        <Link
          href='https://www.google.com/maps/search/T%E1%BA%A7ng+8,+t%C3%B2a+nh%C3%A0+B%E1%BA%A1ch+%C4%90%E1%BA%B1ng+complex,+50+B%E1%BA%A1ch+%C4%90%E1%BA%B1ng,+Ph%C6%B0%E1%BB%9Dng+H%E1%BA%A3i+Ch%C3%A2u,+Th%C3%A0nh+ph%E1%BB%91+%C4%90%C3%A0+N%E1%BA%B5ng/@16.070606,108.2129057,4145m/data=!3m2!1e3!4b1?hl=en&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D'
          className='flex gap-vw items-center mt-[.6vw] w-full leading-snug hover:text-brand-lavender transition-colors'
        >
          <div className='shrink-0 self-stretch my-auto size-[2.2vw] inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square'>
            <IconLocations />
          </div>
          <address className='text-[.8vw] leading-snug'>
            Tầng 8, tòa nhà Bạch Đằng complex, 50 Bạch Đằng, Phường Hải Châu,
            Thành phố Đà Nẵng
          </address>
        </Link>
      </div>
    </section>
  );
}
