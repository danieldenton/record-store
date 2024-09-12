"use client";

import CartAlbumComponent from "./cart-album-component";
import Subtotal from "./subtotal";
import CheckoutButton from "./checkout-button";
import { CartAlbum } from "../lib/definitions";
import { useCartContext } from "@/context/cart";

export default function CartTableComponent({
  albums,
}: {
  albums: CartAlbum[];
}) {
  const { cart } = useCartContext();
  const cartItems = albums.map((item) => {
    return <CartAlbumComponent album={item} />;
  });

  return (
    <>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border-b p-2 text-left text-xl">Select</th>
            <th className="border-b p-2 text-left text-xl">Album</th>
            <th className="border-b p-2 text-left text-xl"></th>
            <th className="border-b p-2 text-left text-xl">Artists</th>
            <th className="border-b p-2 text-left text-xl">Price</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
        <Subtotal albums={albums} />
        <CheckoutButton />
      </table>
    </>
  );
}
