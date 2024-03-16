import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Agro-Malz: Wiodąca Uprawa Cebuli w Polsce - Pasja i Innowacje w Rolnictwie",
  description:
    "Odkryj Agro-Malz, lidera w uprawie cebuli w Polsce. Nasze zaangażowanie i zrównoważone praktyki rolnicze gwarantują wyjątkową jakość i świeżość. Dołącz do nas i poczuj różnicę!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Head>
        <meta property="og:url" content="https://www.agromalz.pl/" />
        <meta
          name="keywords"
          content="gospodarstwo rolne, agromalz, cebula, tanie zboże, uprawa cebuli"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta property="og:image" content="/images/banner.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
