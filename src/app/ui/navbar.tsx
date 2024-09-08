import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Navbar() {
  return (
    <div className="h-[60px] w-full flex justify-between items-center">
      <Link href="/" className="ml-11">Home</Link>

      <div className="h-full w-[320px] mr-5 flex justify-around items-center">
        <ShoppingCartIcon className="h-8" />
        <LoginLink className="bg-slate-50 text-black py-2 px-4 rounded">
          Sign in
        </LoginLink>
        <RegisterLink className="bg-slate-50 text-black py-2 px-4 rounded">
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
}
