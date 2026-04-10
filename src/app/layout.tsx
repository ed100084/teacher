import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "數學星球 | 小六到國三數學學習平台",
  description: "專為台灣女生設計的數學學習網站，對應108課綱，以有趣的情境故事和互動練習讓你愛上數學！",
  keywords: "數學, 學習, 國小, 國中, 108課綱, 台灣, 女生, 數學星球",
  openGraph: {
    title: "數學星球 | 小六到國三數學學習平台",
    description: "以有趣情境和互動練習，讓數學變得超好玩！",
    locale: "zh-TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
