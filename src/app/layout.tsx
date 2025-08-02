import type { Metadata } from "next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { LoadingProvider } from "@/components/providers/LoadingProvider";

export const metadata: Metadata = {
  title: "Skylarbox | Mỗi người tìm bình yên theo cách riêng",
  description:
    "Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng, sống động và lành. Khám phá các hộp chủ đề, sản phẩm lẻ và playlist Spotify độc quyền.",
  keywords: [
    "Skylarbox",
    "hộp quà chữa lành",
    "self-care",
    "mindfulness",
    "chữa lành",
    "phát triển bản thân",
    "subscription box",
    "playlist Spotify",
    "cộng đồng",
  ].join(", "),
  authors: [{ name: "Công ty TNHH MTV SKYLARBOX" }],
  creator: "Công ty TNHH MTV SKYLARBOX",
  publisher: "Công ty TNHH MTV SKYLARBOX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://skylarbox.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skylarbox | Mỗi người tìm bình yên theo cách riêng",
    description:
      "Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng, sống động và lành. Khám phá các hộp chủ đề, sản phẩm lẻ và playlist Spotify độc quyền.",
    url: "https://skylarbox.com",
    siteName: "Skylarbox",
    images: [
      {
        url: "/images/box/box_1.png",
        width: 1200,
        height: 630,
        alt: "Skylarbox - Hộp quà chữa lành",
        type: "image/png",
      },
      {
        url: "/logo/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Skylarbox",
        type: "image/png",
      },
    ],
    locale: "vi_VN",
    type: "website",
    emails: ["TBC"],
    phoneNumbers: ["TBC"],
    countryName: "Vietnam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylarbox | Mỗi người tìm bình yên theo cách riêng",
    description:
      "Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng, sống động và lành.",
    images: [
      {
        url: "/images/banner.png",
        alt: "Skylarbox - Hộp quà chữa lành",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@skylarbox",
    site: "@skylarbox",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "lifestyle",
  classification: "Wellness & Self-Care",
  other: {
    // Facebook specific
    "fb:app_id": "your-facebook-app-id",
    "fb:admins": "your-facebook-admin-id",
    "article:author": "https://www.facebook.com/skylarbox",
    "article:publisher": "https://www.facebook.com/skylarbox",
    "article:section": "Lifestyle",
    "article:tag":
      "Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng, sống động và lành.",
    "fb:page_id": "your-facebook-page-id",

    // Instagram specific
    "instagram:hashtags":
      "#Skylarbox #SkylarboxJourney #SelfCare #Mindfulness #Healing #Wellness #SubscriptionBox",
    "instagram:caption":
      "Skylarbox | Mỗi người tìm bình yên theo cách riêng 🌸 #Skylarbox #SelfCare",
    "instagram:image": "/images/banner.png",
    "instagram:title": "Skylarbox",

    // Geographic data
    "geo.region": "VN-DN",
    "geo.placename": "Da Nang, Vietnam",
    "geo.position": "16.0544;108.2022",
    ICBM: "16.0544, 108.2022",

    // Business contact data
    "business:contact_data:locality": "Da Nang",
    "business:contact_data:region": "Da Nang",
    "business:contact_data:country_name": "Vietnam",
    "business:contact_data:phone_number": "TBC",
    "business:contact_data:email": "TBC",
    "business:contact_data:website": "https://skylarbox.com",
    "business:contact_data:address":
      "Tầng 8, tòa nhà Bạch Đằng complex, 50 Bạch Đằng, Phường Hải Châu, Thành phố Đà Nẵng",
    "business:contact_data:tax_id": "0402286006",

    // Additional social media
    "pinterest:description":
      "Skylarbox - Hộp quà chữa lành với các sản phẩm nguyên bản, dịu dàng, sống động và lành 🌸",
    "telegram:channel": "@skylarbox",
    "telegram:username": "@skylarbox",

    // Rich snippets
    "application-name": "Skylarbox",
    "msapplication-TileColor": "#CBA7E0",
    "msapplication-TileImage": "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi' className='scroll-smooth'>
      <body className='antialiased'>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
