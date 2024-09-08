
import Link from "next/link";
import { ShoppingCartIcon, HomeIcon } from "@heroicons/react/24/outline";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Search from "./components/search";

export default function Navbar() {
  return (
    <div className="h-[80px] w-full flex justify-between mx-auto">
      <div className="h-full w-full pl-11 flex items-end justify-between">
        <Link href="/">
          <HomeIcon className="h-8" />
        </Link>
        <Search />
      </div>
      <div className="h-full w-1/4 pr-11 flex justify-around items-end">
        <Link href="/cart" className="mr-3">
          <ShoppingCartIcon className="h-8" />
        </Link>
        <LoginLink className="bg-slate-50 text-black py-2 px-4 rounded ">
          Sign in
        </LoginLink>
        <RegisterLink className="bg-slate-50 text-black py-2 px-4 rounded">
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
}
