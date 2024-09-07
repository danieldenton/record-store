import SearchBar from "./ui/search-bar";
import { fetchSearch } from "./lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  return (
    <div className="flex Params={searchParams}flex-col justify-center">
      <SearchBar searchResults={searchResults} />
      <h1 className="flex justify-center">Home Page</h1>
    </div>
  );
}
