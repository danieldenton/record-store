import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartContextProvider from "@/context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Daniel's Records",
    default: "Daniel's Records",
  },
  description:
    "The official site to buy Daniel's records for way too much money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white h-screen`}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
