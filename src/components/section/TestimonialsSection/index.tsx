"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { testimonials } from "@/data/blog";

export default function TestimonialsSection() {
  return (
    <section className='w-full py-8 md:py-vw-6 bg-brand-cream/40 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <Marquee
          speed={35}
          gradient={true}
          gradientColor={"rgb(255,255,255)"}
          gradientWidth={80}
          pauseOnHover={true}
          autoFill
        >
          <div className='flex items-stretch overflow-hidden'>
            {testimonials.concat(testimonials).map((t, index) => {
              const skew = index % 2 === 0 ? "skew-y-1" : "-skew-y-1";

              return (
                <div
                  key={`${t.name}-${index}`}
                  className={`flex-shrink-0 ${skew} overflow-hidden mx-2 md:mx-vw`}
                >
                  <div
                    className={`bg-white/90 backdrop-blur-sm rounded-lg md:rounded-[1vw] shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 max-w-[280px] md:max-w-[18vw]`}
                  >
                    <div className='p-4 md:p-[1vw]'>
                      <div className='flex items-center gap-1 md:gap-[.4vw] mb-2 md:mb-[.6vw]'>
                        {[...Array(t.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className='w-4 h-4 md:w-[1.2vw] md:h-[1.2vw] text-yellow-400 fill-current'
                            viewBox='0 0 24 24'
                          >
                            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                          </svg>
                        ))}
                      </div>
                      <p className='text-brand-gray text-sm md:text-[1.1vw] italic leading-snug'>
                        "{t.content}"
                      </p>
                      <p className='text-xs md:text-[.95vw] font-medium text-brand-brown mt-2 md:mt-[.6vw]'>
                        — {t.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
