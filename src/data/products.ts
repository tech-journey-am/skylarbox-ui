export interface IndividualProduct {
  name: string;
  price: string;
  category: string;
  giftImage: string;
  productImage: string;
  giftIcon: string;
}

export const individualProducts: IndividualProduct[] = [
  {
    name: "Bộ bài Skylar Oracle",
    price: "299.000đ",
    category: "Oracle Cards",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/skylar_oracle_1.png",
    giftIcon: "🔮",
  },
  {
    name: "Bộ bài Skylar Oracle",
    price: "299.000đ",
    category: "Oracle Cards",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/skylar_oracle_2.png",
    giftIcon: "🔮",
  },
  {
    name: "Thẻ cảm xúc",
    price: "199.000đ",
    category: "Emotion Cards",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/the_cam_xuc.png",
    giftIcon: "💝",
  },
  {
    name: "Thiệp chữa lành",
    price: "99.000đ",
    category: "Cards",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/thiep_1.png",
    giftIcon: "💌",
  },
  {
    name: "Thiệp chữa lành",
    price: "99.000đ",
    category: "Cards",
    giftImage: "/images/box/demo.png",
    productImage: "/images/box/thiep_2.png",
    giftIcon: "💌",
  },
];
