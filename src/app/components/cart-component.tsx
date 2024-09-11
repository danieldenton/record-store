import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "@/context";

export default function CartComponent() {
  const { cart } = useContext(CartContext);

  return (
    <Link href="/cart" className="mr-1">
        <div></div>
      <ShoppingCartIcon className="h-10" />
    </Link>
  );
}
