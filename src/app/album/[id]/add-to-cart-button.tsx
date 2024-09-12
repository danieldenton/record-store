"use client";

import { useCartContext } from "@/context/cart";

export default function AddToCartButton({ albumId }: { albumId: number }) {
  const { setCart, cart } = useCartContext();
  const inCart = cart.includes(albumId);

  const handleAddToCart = () => {
    if (!inCart) {
      setCart([...cart, albumId]);
    } else {
      setCart(cart.filter((id) => id !== albumId));
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {inCart ? "Remove From Cart" : "Add to Cart"}
    </button>
  );
}
