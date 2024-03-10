import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "AgroMalz: Wiodąca Uprawa Cebuli w Polsce - Pasja i Innowacje w Rolnictwie",
  description:
    "Odkryj AgroMalz, lidera w uprawie cebuli w Polsce. Nasze zaangażowanie i zrównoważone praktyki rolnicze gwarantują wyjątkową jakość i świeżość. Dołącz do nas i poczuj różnicę!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
