import { Metadata } from "next";
import Navbar from "../components/navbar";
import { fetchSearch } from "../lib/data";
import CartPageClientComponent from "./cart-page-client-component";
export const metadata: Metadata = {
  title: "Cart",
};

export default async function Cart({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  
 
  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchResults={searchResults} />
      <CartPageClientComponent />
    </div>
  );
}
