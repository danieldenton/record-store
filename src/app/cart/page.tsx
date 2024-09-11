import { Metadata } from "next";
import Navbar from "../components/navbar";
import { fetchSearch, fetchAlbumsByIds } from "../lib/data";
import CartPageComponent from "./cart-album-component";

export const metadata: Metadata = {
  title: "Cart",
};

export default async function Cart({
  searchParams,
}: {
  searchParams?: { query?: string; cart?: string };
}) {
  const query = searchParams?.query || "";
  const cartQuery = searchParams?.cart || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  const cart = cartQuery.split(",").filter(Boolean);
  const formattedCart = `{${cart.join(",")}}`;
  const albums = await fetchAlbumsByIds(formattedCart);
console.log(albums)
  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchResults={searchResults} />
      <CartPageComponent cart={albums} />
    </div>
  );
}
