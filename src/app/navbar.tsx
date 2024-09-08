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
    <div className="w-full flex h-[100px] justify-between mx-auto mb-10 pt-10">
      <div className="h-full w-full pl-11 flex items-end justify-between">
        <Link href="/">
          <HomeIcon className="h-10" />
        </Link>
        <Search />
      </div>
      <div className="h-full pr-11 w-1/4 flex justify-around items-end">
        <Link href="/cart" className="mr-3">
          <ShoppingCartIcon className="h-10" />
        </Link>
        {user ? (
          <>
            <div className="flex flex-col mr-2">
              <p className="flex justify-end text-[13px]">Logged in as:</p>
              <p className="flex justify-center">{user.given_name}</p>
            </div>
            <LogoutLink className="bg-slate-50 text-black py-2 px-4 rounded w-15 mb-1">
              Log out
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className="bg-slate-50 text-black py-2 px-4 rounded mb-1">
              Sign in
            </LoginLink>
            <RegisterLink className="bg-slate-50 text-black py-2 px-4 rounded mb-1">
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
}
