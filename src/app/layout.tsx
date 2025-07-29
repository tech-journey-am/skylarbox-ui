import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skylarbox - Nurture Your Well-Being",
  description:
    "Mỗi người tìm bình yên theo cách riêng. Chúng tôi ở đây để đồng hành cùng bạn trong hành trình chữa lành và yêu thương bản thân.",
  keywords:
    "chữa lành, self-care, wellness, mindfulness, Skylarbox, subscription box",
  authors: [{ name: "Skylarbox" }],
  creator: "Skylarbox",
  publisher: "Skylarbox",
  robots: "index, follow",
  openGraph: {
    title: "Skylarbox - Nurture Your Well-Being",
    description:
      "Mỗi người tìm bình yên theo cách riêng. Chúng tôi ở đây để đồng hành cùng bạn trong hành trình chữa lành và yêu thương bản thân.",
    url: "https://skylarbox.com",
    siteName: "Skylarbox",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylarbox - Nurture Your Well-Being",
    description: "Mỗi người tìm bình yên theo cách riêng.",
    creator: "@skylarbox",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi'>
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className='flex-1 flex justify-center'>
          <div className='w-full max-w-7xl mx-auto'>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
