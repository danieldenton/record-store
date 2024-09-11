"use client";

import React, { createContext, useContext, useState } from "react";

type CartContext = {
  cart: number[];
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<number[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
