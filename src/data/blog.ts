export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

export interface Testimonial {
  name: string;
  content: string;
  rating: number;
}

export const blogPosts: BlogPost[] = [
  {
    title: "5 cách thực hành self-care mỗi ngày",
    excerpt:
      "Khám phá những phương pháp đơn giản để chăm sóc bản thân trong cuộc sống bận rộn...",
    date: "15/12/2024",
  },
  {
    title: "Mindfulness: Nghệ thuật sống hiện tại",
    excerpt:
      "Tìm hiểu về mindfulness và cách áp dụng vào cuộc sống hàng ngày để giảm stress...",
    date: "12/12/2024",
  },
  {
    title: "Hành trình chữa lành từ những vết thương",
    excerpt:
      "Chia sẻ về quá trình chữa lành và những bài học quý giá từ những khó khăn...",
    date: "10/12/2024",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nguyễn Thị Anh",
    content:
      "Skylarbox đã giúp tôi tìm lại bình yên trong cuộc sống bận rộn. Mỗi hộp quà như một món quà nhỏ cho tâm hồn.",
    rating: 5,
  },
  {
    name: "Trần Văn Bình",
    content:
      "Playlist Spotify của Skylarbox thực sự tuyệt vời. Âm nhạc có khả năng chữa lành thật sự.",
    rating: 5,
  },
];
