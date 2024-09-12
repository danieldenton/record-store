import Link from "next/link";

export default function CheckoutButton() {
 return <Link href={'/checkout'} className="bg-red text-white font-bold py-3 w-[200px] text-center rounded m-9">Checkout</Link>
}