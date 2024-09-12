'use client'

import { useCartContext } from "@/context/cart";

export default function AddToCartButton({ albumId }: { albumId: number }) {
  const { setCart, cart } = useCartContext();

  const handleAddToCart = () => {
    if (!cart.includes(albumId)) {
      setCart([...cart, albumId]);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}
