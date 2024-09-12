import Link from "next/link";
import { useCartContext } from "@/context/cart";

export default function CheckoutButton() {
    const { cartParam } = useCartContext()
  return (
    <Link
      href={`/checkout?checkout=${encodeURIComponent(cartParam)}`}
      className="bg-red text-white font-bold py-3 w-[200px] text-center rounded m-9"
    >
      Checkout
    </Link>
  );
}
