import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";

const NotoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "내 위키, 문서, 프로젝트를 모두 한 곳에서 만나는 커넥티드 워크스페이스 | Kyeongbeom",
  description:
    "Noti**의 메인 디자인에 영감을 받아 비슷하게 만든 Kyeongbeom의 포트폴리오",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(123);
  return (
    <html lang="en">
      <body className={NotoSansKr.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
