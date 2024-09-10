"use client";

import React, { createContext, useContext, useState } from "react";

type Context = {};

const AppContext = createContext<Context>({});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    id: null,
    authId: "kp_82c38a240aa04155a06651c3d5788518",
    email: "danieldentondev@gmail.com'",
    firstName: "Daniel",
    lastName: "Denton",
    cart: [],
  });
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
