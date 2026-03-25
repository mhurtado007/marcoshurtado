import type { Metadata } from "next";
import { Geist, Anton } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marcos Hurtado | Personal Training",
  description: "Personal Training anywhere with Marcos Hurtado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${anton.variable}`}>
      <body className="antialiased">
        {/* Sticky transparent header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
          <Link href="/">
            <Image src="/logo-white.png" alt="Marcos Hurtado" width={120} height={50} unoptimized />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
