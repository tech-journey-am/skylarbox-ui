export interface NavigationLink {
  name: string;
  href: string;
}

export const quickLinks: NavigationLink[] = [
  { name: "Giới thiệu", href: "/about" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Subscription", href: "/subscription" },
  { name: "Blog", href: "/blog" },
  { name: "Cộng đồng", href: "/community" },
  { name: "Chính sách bảo mật", href: "/privacy" },
  { name: "Điều khoản sử dụng", href: "/terms" },
];
