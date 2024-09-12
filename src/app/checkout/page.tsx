import { Metadata } from "next";
import Link from "next/link";
import { fetchAlbumsByIds } from "../lib/data";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function Checkout({
  searchParams,
}: {
  searchParams?: { checkout?: string };
}) {
  const checkoutQuery = searchParams?.checkout || "";
  const checkoutArray = checkoutQuery.split(",").filter(Boolean);
  const formattedCheckout = `{${checkoutArray.join(",")}}`;
  const albums = await fetchAlbumsByIds(formattedCheckout);
  return (
    <div>
      <Link href={"/checkout"}>Back</Link>
    </div>
  );
}

// fix this
