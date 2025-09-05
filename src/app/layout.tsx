import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layouts/Header';

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
