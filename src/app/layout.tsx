import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erdem Erbey Hukuk & Danışmanlık",
  description: "Erdem Erbey Hukuk & Danışmanlık Ofisi",
  icons: {
    icon: '/logomini.png', // 32x32
    apple: '/logomini.png', // 180x180
    shortcut: '/logomini.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
