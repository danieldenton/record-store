import Link from "next/link";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Search from "./search";
import LoggedInAs from "./logged-in-as";
import { SearchResult } from "../lib/definitions";

export default async function Navbar({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();
 
  return (
    <div className="w-full flex h-[70px] justify-between  mx-auto mb-10">
      <div className="h-full w-full pl-11 flex items-end justify-between">
        <Link href="/">
          <HomeIcon className="h-10" />
        </Link>
        <Search searchResults={searchResults} />
      </div>
      <div className="h-full pr-11 w-1/4 flex justify-around items-end">
        <Link href="/cart" className="mr-1">
          <ShoppingCartIcon className="h-10" />
        </Link>
        {kindeUser ? (
          <>
            <LoggedInAs kindeUser={kindeUser}/>
            <LogoutLink className="flex justify-center bg-slate-50 text-black py-2 rounded w-15 mx-1 mb-1 min-w-[75px]">
              Log out
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className="flex justify-center bg-slate-50 text-black py-2 rounded mx-1 mb-1 min-w-[75px]">
              Sign in
            </LoginLink>
            <RegisterLink className="flex justify-center bg-slate-50 text-black py-2 rounded mx-1 mb-1 min-w-[75px]">
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
}
