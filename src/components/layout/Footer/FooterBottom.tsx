import Image from "next/image";
import * as React from "react";

interface FooterBottomProps {}

export function FooterBottom({}: FooterBottomProps) {
  return (
    <section className='relative flex z-0 flex-col justify-center px-4 md:px-vw-4 py-4 md:py-vw-2 w-full min-h-[6vw] bg-gradient-to-br from-brand-cream to-brand-sky/30'>
      <div className='flex relative flex-wrap gap-4 md:gap-vw justify-center items-center w-full'>
        <p className='text-sm md:text-[1vw] leading-snug text-brand-gray text-center'>
          © 2024 Công ty TNHH MTV SKYLARBOX. All rights reserved.
          <span className='text-brand-gray/50 max-md:block'>
            {" "}
            Mã số thuế: 0402286006
          </span>
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
