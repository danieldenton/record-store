"use client";

import { useEffect } from "react";
import { useUserContext } from "@/context/user";
import { User } from "../lib/definitions";

export default function LoggedInAs({ user }: { user: User }) {
  const { setUser } = useUserContext();
  const { email } = user;

  useEffect(() => {
    setUser(user);
  }, []);

  return (
    <div className="flex flex-col mr-2">
      <p className="flex justify-end text-[13px]">Logged in as:</p>
      <p className="flex justify-center">{email}</p>
    </div>
  );
}
