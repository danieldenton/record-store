'use client'

import Link from "next/link";
import { useCartContext } from "@/context/cart";

export default function CheckoutButton() {
    const { cartParam } = useCartContext()
  return (
    <div className="w-full py-7 flex justify-end">
    <Link
      href={`/checkout?checkout=${encodeURIComponent(cartParam)}`}
      className="bg-red text-white font-bold py-3 w-[222px] text-center rounded"
    >
      Checkout
    </Link>
    </div>
  );
}
