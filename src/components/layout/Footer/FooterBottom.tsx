import Image from "next/image";
import * as React from "react";

interface FooterBottomProps {}

export function FooterBottom({}: FooterBottomProps) {
  return (
    <section className='relative flex z-0 flex-col justify-center px-24 py-4 w-full min-h-[68px] max-md:px-5 max-md:max-w-full bg-gradient-to-br from-brand-cream to-brand-sky/30'>
      <div className='flex relative flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full'>
        <p className='self-stretch my-auto text-xs leading-3 w-[628px] max-md:max-w-full text-gray-800'>
          © 2024 Công ty TNHH MTV SKYLARBOX. All rights reserved.
          <span className='text-gray-400'> Mã số thuế: 0402286006</span>
        </p>
        {/* <div className='flex gap-3 items-center self-stretch my-auto text-xs leading-loose min-w-60'>
          <span className='self-stretch my-auto w-[62px] text-gray-300'>
            Chúng tôi chấp nhận
          </span>
          <div className='relative size-full shrink-0 self-stretch my-auto aspect-[6.99] w-[168px]'>
            <Image
              src='/images/paymentAccept.png'
              className='object-contain'
              alt='Payment methods'
              sizes='(max-width: 768px) 100vw, 168px'
              fill
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
