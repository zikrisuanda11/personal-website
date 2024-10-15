import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Zikri Suanda",
  description: "personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body> */}
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
