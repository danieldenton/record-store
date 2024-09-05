import Search from "./search";
import SearchResults from "./search-results";

export default function SearchBar({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
    return (
  <div className="flex flex-col">
    <Search />
    <SearchResults searchParams={searchParams} />
  </div>
  )
}
