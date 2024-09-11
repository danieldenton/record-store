import { Metadata } from "next";
import Navbar from "../components/navbar";
import { fetchSearch, fetchAlbumsByIds } from "../lib/data";
import { useCartContext } from "@/context/cart";

export const metadata: Metadata = {
  title: 'Cart',
};


export default async function Cart({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  const { cart } = useCartContext()
  const albumsToBePurchased = await fetchAlbumsByIds(cart)
  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchResults={searchResults} />
      <h1>CART PAGE</h1>
    </div>
  )
}
