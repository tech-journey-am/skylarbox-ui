export interface VideoSlide {
  id: number;
  video: string;
  title: string;
  subtitle: string;
  description: string;
  showText?: boolean;
}

export const heroSlides: VideoSlide[] = [
  {
    id: 1,
    video: "/videos/candle_video_1.mp4",
    title: "Mỗi người tìm bình yên theo cách riêng",
    subtitle: "Khám phá hành trình chữa lành của riêng bạn",
    description:
      "Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng, sống động và lành.",
    showText: true,
  },
  {
    id: 2,
    video: "/videos/candle_video_2.mp4",
    title: "Chữa lành từ bên trong",
    subtitle: "Tìm lại sự bình an trong tâm hồn",
    description:
      "Mỗi hộp quà là một hành trình khám phá bản thân, giúp bạn kết nối với chính mình.",
    showText: false,
  },
  {
    id: 3,
    video: "/videos/candle_video_3.mp4",
    title: "Sống động và lành mạnh",
    subtitle: "Năng lượng tích cực mỗi ngày",
    description:
      "Với Skylarbox, hành trình tìm về bình an cũng có thể rực rỡ, sáng tạo và đầy màu sắc.",
    showText: false,
  },
];

// Alternative video sources for candles/wax theme
export const candleVideos = [
  "/videos/candle_video_1.mp4",
  "/videos/candle_video_2.mp4",
  "/videos/candle_video_3.mp4",
];
