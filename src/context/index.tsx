"use client";

import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
  // const [user, setUser] = useState({
  //   id: null,
  //   user_id: "",
  //   email: "danieldentondev@gmail.com'",
  //   first_name: "",
  //   last_name: "",
  //   cart: [],
  // });
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
