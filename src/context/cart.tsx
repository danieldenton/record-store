"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CartContext = {
  cart: number[];
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
  cartParam: string;
};

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<number[]>([])
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      console.log(savedCart)
      if (savedCart) {
        setCart(JSON.parse(savedCart)); 
      }
      setIsLoaded(true);
    }
  }, []);

  const cartParam = cart.join(",");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, cartParam }}>
      {isLoaded ? children : null} 
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
