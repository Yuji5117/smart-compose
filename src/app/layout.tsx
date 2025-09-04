import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'Smart Compose - 求人作成ツール',
  description: '簡単に求人票を作成・編集できるWebアプリケーション',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
