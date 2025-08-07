import * as React from "react";
import Link from "next/link";
import { quickLinks } from "@/data/navigation";

interface QuickLinksProps {}

export function QuickLinks({}: QuickLinksProps) {
  const links = quickLinks;

  return (
    <nav className='w-[12vw]'>
      <h3 className='text-[1.6vw] font-semibold leading-none text-neutral-700 font-serif'>
        Liên kết nhanh
      </h3>
      <ul className='mt-vw-2 w-full text-[1vw] leading-none text-brand-gray'>
        {links.map((link, index) => (
          <li key={index} className={index > 0 ? "mt-vw-1" : ""}>
            <Link
              href={link.href}
              className='hover:text-brand-lavender transition-colors text-[1vw]'
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
