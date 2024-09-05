import Image from "next/image";
import Search from "./ui/search";
import SearchResults from "./ui/search-results";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (<div className="flex justify-center mt-[80px]">
    <Search />
    <SearchResults searchParams={searchParams} />
    <h1>Home Page</h1>
  </div>)
}
