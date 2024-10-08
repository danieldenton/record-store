import Link from "next/link";

export default function ContiueToShipping() {
  return (
    <div className="w-full py-7 flex justify-end">
    <Link
      href={"/shipping-information"}
      className="bg-red text-white font-bold py-3 w-[222px] text-center rounded"
    >
      Continue to Shipping
    </Link>
    </div>
  );
}
