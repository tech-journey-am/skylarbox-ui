export interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  savings?: string;
}

export const playlists = [
  "Chữa lành buổi sáng",
  "Thư giãn buổi tối",
  "Tập trung làm việc",
  "Thiền định",
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Gói Tháng",
    price: "299.000đ",
    period: "tháng",
    features: [
      "Hộp quà chủ đề mới mỗi tháng",
      "Truy cập Spotify playlist",
      "Ưu đãi mua sản phẩm lẻ 10%",
      "Tham gia workshop cơ bản",
    ],
    popular: false,
  },
  {
    name: "Gói Mùa",
    price: "799.000đ",
    period: "3 tháng",
    features: [
      "Hộp quà chủ đề mới mỗi tháng",
      "Truy cập Spotify playlist",
      "Ưu đãi mua sản phẩm lẻ 15%",
      "Tham gia workshop nâng cao",
      "Tặng kèm sản phẩm đặc biệt",
    ],
    popular: false,
  },
  {
    name: "Gói Năm",
    price: "2.899.000đ",
    period: "năm",
    features: [
      "Hộp quà chủ đề mới mỗi tháng",
      "Truy cập Spotify playlist",
      "Ưu đãi mua sản phẩm lẻ 20%",
      "Tham gia workshop VIP",
      "Tặng kèm sản phẩm đặc biệt",
      "Tư vấn cá nhân hóa",
    ],
    popular: true,
    savings: "Tiết kiệm 20%",
  },
];
