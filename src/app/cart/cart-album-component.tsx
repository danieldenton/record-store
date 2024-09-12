"use client";

import Image from "next/image";
import { useCartContext } from "@/context/cart";
import { CartAlbum } from "../lib/definitions";

export default function CartAlbumComponent({ album }: { album: CartAlbum }) {
  const { cart, setCart } = useCartContext();

  const handleCheckboxChange = (checked: boolean) => {
    if (!checked) {
      setCart(cart.filter((id) => id !== album.id));
    } else {
      setCart([...cart, album.id]);
    }
  };

  const isInCart = cart.includes(album.id);

  const artistArray = album.artists.map((artist) => {
    return artist;
  });
  const artists =
    artistArray.length === 1 ? artistArray[0] : artistArray.join(", ");

  return (
    <tr>
      <td className="p-2 text-center border">
        <input
          type="checkbox"
          checked={isInCart}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
      </td>
      <td className="p-2 flex justify-center border-b">
        <Image src={album.cover} alt={album.name} height={80} width={80} className="border"/>
      </td>
      <td className="p-2 border">{album.name}</td>
      <td className="p-2 border">{artists}</td>
      <td className="p-2 border">{`$${album.price}`}</td>
    </tr>
  );
}
