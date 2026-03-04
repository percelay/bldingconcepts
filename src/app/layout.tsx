import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Carpet Express Inc | Flooring Installation in New Jersey",
  description:
    "JM Carpet Express Inc provides expert carpet, hardwood, vinyl, and commercial flooring installation in New Jersey. Call 973-442-1182 to request a quote.",
  keywords:
    "JM Carpet Express, flooring, hardwood, carpet, vinyl, commercial flooring, NJ flooring",
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
