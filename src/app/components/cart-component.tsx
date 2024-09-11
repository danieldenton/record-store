"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "@/context/cart";
export default function CartComponent() {
  const { cart } = useCartContext();
  const numberOfCartItems = cart.length;
  return (
    <Link href="/cart" className="relative mr-2 h-10">
      {numberOfCartItems > 0 ? (
        <div className="absolute top-0 right-0 h-6 w-6 transform translate-x-1/4 -translate-y-1/4 rounded-full bg-red text-center">
          {numberOfCartItems}
        </div>
      ) : null}
      <ShoppingCartIcon className="h-10" />
    </Link>
  );
}
