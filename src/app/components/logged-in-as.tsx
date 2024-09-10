"use client";

import { useEffect } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export default function LoggedInAs({
  kindeUser,
}: {
  kindeUser: KindeUser<Record<string, any>>;
}) {
  const handleGetOrPostUser = async () => {
    const { id, email, given_name, family_name } = kindeUser;
    try {
      const res = await fetch("/api/user", {
        method: "GET",
        body: JSON.stringify({ id, email, given_name, family_name }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetOrPostUser();
  }, [kindeUser]);

  return (
    <div className="flex flex-col mr-1 min-w-[88px]">
      <p className="flex justify-end text-[13px]">Logged in as:</p>
      <p className="flex justify-center">{user.given_name}</p>
    </div>
  );
}
