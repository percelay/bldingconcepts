import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Building Concepts of America, INC | Pre-Engineered Steel Buildings & Metal Roofing",
  description:
    "Building Concepts of America offers innovative, affordable, and high-quality pre-engineered steel buildings, standing seam metal roofs, retro-fit roof systems, and design/build services in Newark, Delaware.",
  keywords:
    "pre-engineered steel buildings, metal roofing, standing seam, retro-fit roof, design build, clear span structures, Building Concepts of America, Newark Delaware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
