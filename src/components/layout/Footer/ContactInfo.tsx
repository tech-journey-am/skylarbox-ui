import * as React from "react";
import { IconMail, IconPhone, IconLocations } from "@/components/icon";

interface ContactInfoProps {}

export function ContactInfo({}: ContactInfoProps) {
  return (
    <section className='min-w-60 w-[251px]'>
      <h3 className='text-lg font-semibold leading-none text-brand-brown font-montserrat'>
        Liên hệ với chúng tôi
      </h3>
      <div className='flex flex-col mt-6 w-full text-xs max-w-[251px] text-brand-gray'>
        <div className='flex gap-3 items-center self-start leading-none whitespace-nowrap'>
          <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square'>
            <IconMail />
          </div>
          <a
            href='mailto:TBC'
            className='self-stretch my-auto hover:text-brand-lavender transition-colors'
          >
            TBC
          </a>
        </div>

        <h4 className='mt-3 font-semibold text-brand-brown'>Văn phòng chính</h4>

        <div className='flex gap-3 items-center self-start mt-3 leading-none'>
          <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square'>
            <IconPhone />
          </div>
          <div className='flex flex-col justify-center self-stretch my-auto'>
            <a
              href='tel:TBC'
              className='hover:text-brand-lavender transition-colors'
            >
              TBC
            </a>
          </div>
        </div>

        <div className='flex gap-3 items-center mt-3 w-full leading-4'>
          <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-brand-lavender bg-brand-lavender/10 justify-center items-center rounded-full aspect-square'>
            <IconLocations />
          </div>
          <address className='self-stretch my-auto not-italic'>
            Tầng 8, tòa nhà Bạch Đằng complex, <br />
            50 Bạch Đằng, Phường Hải Châu, <br />
            Thành phố Đà Nẵng
          </address>
        </div>
      </div>
    </section>
  );
}
