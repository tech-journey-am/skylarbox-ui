import * as React from "react";
import Link from "next/link";
import { quickLinks } from "@/data/navigation";

interface QuickLinksProps {}

export function QuickLinks({}: QuickLinksProps) {
  const links = quickLinks;

  return (
    <nav className='w-[103px]'>
      <h3 className='text-lg font-semibold leading-none text-brand-brown font-montserrat'>
        Liên kết nhanh
      </h3>
      <ul className='mt-6 w-full text-xs leading-none text-brand-gray'>
        {links.map((link, index) => (
          <li key={index} className={index > 0 ? "mt-3" : ""}>
            <Link
              href={link.href}
              className='hover:text-brand-lavender transition-colors'
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
