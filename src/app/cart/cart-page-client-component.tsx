'use client'

import { useCartContext } from "@/context/cart";
import CartPageComponent from "./cart-page-component";

export default function CartPageClientComponent() {
    const { cart } = useCartContext();

    return <CartPageComponent cart={cart}/>
}