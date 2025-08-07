export interface FeaturedBox {
  name: string;
  description: string;
  price: string;
  color: string;
  giftImage: string;
  productImage: string;
  badge: string;
}

export const featuredBoxes: FeaturedBox[] = [
  {
    name: "Vết nứt ánh sáng",
    description: "Hộp chủ đề kintsugi - nghệ thuật chữa lành vết nứt bằng vàng",
    price: "599.000đ",
    color: "bg-gradient-to-br from-brand-rose/20 to-brand-rose/40",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_1.png",
    badge: "Mới",
  },
  {
    name: "Ngày dịu dàng",
    description: "Tone màu pastel nhẹ nhàng cho những ngày cần sự dịu dàng",
    price: "549.000đ",
    color: "bg-gradient-to-br from-brand-lavender/20 to-brand-lavender/40",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_2.png",
    badge: "Phổ biến",
  },
  {
    name: "Tìm lại chính mình",
    description: "Thiết kế minimalist giúp bạn kết nối với bản thân",
    price: "649.000đ",
    color: "bg-gradient-to-br from-brand-cream to-brand-cream/80",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_3.png",
    badge: "Đặc biệt",
  },
  {
    name: "Hãy tha thứ",
    description: "Lá thư và nến thơm giúp bạn buông bỏ và tha thứ",
    price: "499.000đ",
    color: "bg-gradient-to-br from-brand-sky/20 to-brand-sky/40",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_4.png",
    badge: "Đặc biệt",
  },
  {
    name: "Thanh lọc năng lượng",
    description: "Các yếu tố thiên nhiên giúp thanh lọc tâm hồn",
    price: "699.000đ",
    color: "bg-gradient-to-br from-brand-sage/20 to-brand-sage/40",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_5.png",
    badge: "Đặc biệt",
  },
  {
    name: "May mắn",
    description: "Thiết kế rực rỡ mang lại may mắn và niềm vui",
    price: "599.000đ",
    color: "bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/40",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_6.png",
    badge: "Đặc biệt",
  },
];
