import * as React from "react";
import Link from "next/link";

interface QuickLinksProps {}

export function QuickLinks({}: QuickLinksProps) {
  const links = [
    { name: "Giới thiệu", href: "/about" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Subscription", href: "/subscription" },
    { name: "Blog", href: "/blog" },
    { name: "Cộng đồng", href: "/community" },
    { name: "Chính sách bảo mật", href: "/privacy" },
    { name: "Điều khoản sử dụng", href: "/terms" },
  ];

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
