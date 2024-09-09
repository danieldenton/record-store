import Link from "next/link";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Search from "./components/search";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="w-full flex h-[70px] justify-between mx-auto mb-10">
      <div className="h-full w-full pl-11 flex items-end justify-between">
        <Link href="/">
          <HomeIcon className="h-10" />
        </Link>
        <Search />
      </div>
      <div className="h-full pr-11 w-1/4 flex justify-around items-end">
        <Link href="/cart" className="mr-1">
          <ShoppingCartIcon className="h-10" />
        </Link>
        {user ? (
          <>
            <div className="flex flex-col mr-1 min-w-[88px]">
              <p className="flex justify-end text-[13px]">Logged in as:</p>
              <p className="flex justify-center">{user.given_name}</p>
            </div>
            <LogoutLink className="flex justify-center bg-slate-50 text-black py-2 rounded w-15 m-1 min-w-[75px]">
              Log out
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className="flex justify-center bg-slate-50 text-black py-2 rounded m-1 min-w-[75px]">
              Sign in
            </LoginLink>
            <RegisterLink className="flex justify-center bg-slate-50 text-black py-2 rounded m-1 min-w-[75px]">
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
}
