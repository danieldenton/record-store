import { Metadata } from "next";
import Navbar from "../components/navbar";
import { fetchSearch, fetchAlbumsByIds } from "../lib/data";
import CartTableComponent from "./cart-table-component";
import ContiueToShipping from "./continue-to-shipping-button";

export const metadata: Metadata = {
  title: "Cart",
};

export default async function Cart({
  searchParams,
}: {
  searchParams?: { query?: string; cart?: string };
}) {
  
  const cartQuery = searchParams?.cart || "";
  
  const cartArray = cartQuery.split(",").filter(Boolean);
  const formattedCart = `{${cartArray.join(",")}}`;
  const albums = await fetchAlbumsByIds(formattedCart);

  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchParams={searchParams} />
      <div className="w-full px-20 mt-10">
        <CartTableComponent albums={albums} />
        <ContiueToShipping />
      </div>
    </div>
  );
}
