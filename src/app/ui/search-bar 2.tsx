import Search from "./search";
import SearchResults from "./search-results";
import { SearchResult } from "../lib/definitions";

export default function SearchBar({
  searchResults,
}: {
    searchResults: SearchResult[];
  }) {
    return (
  <div className="flex flex-col py-[50px] w-full bg-slate-50">
    <Search />
    <SearchResults searchResults={searchResults}/>
  </div>
  )
}
