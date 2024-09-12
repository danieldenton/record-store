import { Metadata } from "next";
import Navbar from "../components/navbar";
import { fetchSearch, fetchAlbumsByIds } from "../lib/data";
import CartTableComponent from "./cart-table-component";

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
  const cartArray = cartQuery.split(",").filter(Boolean);
  const formattedCart = `{${cartArray.join(",")}}`;
  const albums = await fetchAlbumsByIds(formattedCart);

  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchResults={searchResults} />
      <div className="w-full px-20 mt-10">
        <CartTableComponent albums={albums} />
      </div>
    </div>
  );
}
