"use client";

import { useCartContext } from "@/context/cart";
import { CartAlbum } from "../lib/definitions";

export default function Subtotal({ albums }: { albums: CartAlbum[] }) {
  const { cart } = useCartContext();
  const albumsInCart = albums.filter((album) => cart.includes(album.id));
  const totalPrice = albumsInCart.reduce((total, album) => {
    return total + parseFloat(album.price);
  }, 0);

  return (
    <tr>
      <td></td>
      <td className="border-t"></td>
      <td></td>
      <td className="font-bold text-xl px-2 py-6 text-right">Subtotal:</td>
      <td className="px-2 py-6 border-l">
        {`$${totalPrice.toFixed(2)}`}
      </td>
    </tr>
  );
}
