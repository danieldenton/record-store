"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "@/context/cart";
export default function CartComponent() {
  const { cart } = useCartContext();

  return (
    <Link href="/cart" className="mr-1">
      <div></div>
      <ShoppingCartIcon className="h-10" />
    </Link>
  );
}
