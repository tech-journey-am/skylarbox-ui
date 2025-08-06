export interface DemoProduct {
  id: number;
  name: string;
  giftImage: string;
  productImage: string;
  giftIcon: string;
  giftTitle: string;
  productTitle: string;
  giftSubtitle: string;
  productSubtitle: string;
}

export const demoProducts: DemoProduct[] = [
  {
    id: 1,
    name: "Vết nứt ánh sáng",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_1.png",
    giftIcon: "✨",
    giftTitle: "Hộp quà Kintsugi",
    productTitle: "Vết nứt ánh sáng",
    giftSubtitle: "Nghệ thuật chữa lành",
    productSubtitle: "Chữa lành vết thương",
  },
  {
    id: 2,
    name: "Ngày dịu dàng",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_2.png",
    giftIcon: "🌸",
    giftTitle: "Hộp quà Pastel",
    productTitle: "Ngày dịu dàng",
    giftSubtitle: "Tone màu nhẹ nhàng",
    productSubtitle: "Sự dịu dàng",
  },
  {
    id: 3,
    name: "Tìm lại chính mình",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/box_3.png",
    giftIcon: "🧘",
    giftTitle: "Hộp quà Minimalist",
    productTitle: "Tìm lại chính mình",
    giftSubtitle: "Thiết kế tối giản",
    productSubtitle: "Kết nối bản thân",
  },
];
