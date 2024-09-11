'use client'

import Image from "next/image";
import { useCartContext } from "@/context/cart";
import { CartAlbum } from "../lib/definitions";

export default function CartAlbumComponent({ album }: { album: CartAlbum }) {
  const { cart, setCart } = useCartContext();
  
  return (
    <div className="flex items-center m-1">
      <Image src={album.cover} alt={album.name} height={50} width={50} />
       <p className="ml-3">{album.name}</p>
      <p className="ml-3">{album.price}</p>
    </div>
  );
}
