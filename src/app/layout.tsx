import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Search from "./ui/search";
import SearchResults from "./ui/search-results";

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
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: { query?: string };
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="flex justify-center mt-[80px]">
          <Search />
          <SearchResults searchParams={searchParams} />
        </div>
        {children}
      </body>
    </html>
  );
}
