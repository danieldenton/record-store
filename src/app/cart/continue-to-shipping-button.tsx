import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default async function ContiueToShipping() {

  return (
    <div className="w-full py-7 flex justify-end">
      {/* {user ? ( */}
        <Link
          href={"/shipping-information"}
          className="bg-red text-white font-bold py-3 w-[222px] text-center rounded"
        >
          Continue to Shipping
        </Link>
      {/* ) : (
        <>
          <LoginLink className="bg-red text-white font-bold py-3 w-[222px] text-center rounded">
            Sign in
          </LoginLink>
          <RegisterLink className="bg-red text-white font-bold py-3 w-[222px] text-center rounded">
            Sign up
          </RegisterLink>
        </>
      )} */}
    </div>
  );
}
