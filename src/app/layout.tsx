import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Search from "./ui/search";

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
      <body className={`${inter.className} bg-black text-white`}>
        <div className="flex justify-center mt-[80px]">
        <Search />
        </div>
        {children}
      </body>
    </html>
  );
}
