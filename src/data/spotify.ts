export interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  features: { name: string; included: boolean }[];
  popular: boolean;
  savings?: string;
}

export const playlists = [
  "Chữa lành buổi sáng",
  "Thư giãn buổi tối",
  "Tập trung làm việc",
  "Thiền định",
];

const allFeatures = [
  "Hộp quà chủ đề mới mỗi tháng",
  "Truy cập Spotify playlist",
  "Ưu đãi mua sản phẩm lẻ 10%",
  "Ưu đãi mua sản phẩm lẻ 15%",
  "Ưu đãi mua sản phẩm lẻ 20%",
  "Tham gia workshop cơ bản",
  "Tham gia workshop nâng cao",
  "Tham gia workshop VIP",
  "Tặng kèm sản phẩm đặc biệt",
  "Tư vấn cá nhân hóa",
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Gói Tháng",
    price: "299.000đ",
    period: "tháng",
    features: [
      { name: allFeatures[0], included: true },
      { name: allFeatures[1], included: true },
      { name: allFeatures[2], included: true },
      { name: allFeatures[5], included: true },
      { name: allFeatures[8], included: false },
      { name: allFeatures[9], included: false },
    ],
    popular: false,
  },
  {
    name: "Gói Mùa",
    price: "799.000đ",
    period: "3 tháng",
    features: [
      { name: allFeatures[0], included: true },
      { name: allFeatures[1], included: true },
      { name: allFeatures[3], included: true },
      { name: allFeatures[6], included: true },
      { name: allFeatures[8], included: true },
      { name: allFeatures[9], included: false },
    ],
    popular: false,
  },
  {
    name: "Gói Năm",
    price: "2.899.000đ",
    period: "năm",
    features: [
      { name: allFeatures[0], included: true },
      { name: allFeatures[1], included: true },
      { name: allFeatures[4], included: true },
      { name: allFeatures[7], included: true },
      { name: allFeatures[8], included: true },
      { name: allFeatures[9], included: true },
    ],
    popular: true,
    savings: "Tiết kiệm 20%",
  },
];
