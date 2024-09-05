import Search from "./search";
import SearchResults from "./search-results";
import { SearchResult } from "../lib/definitions";

export default function SearchBar({
  searchResults,
}: {
    searchResults: SearchResult[];
  }) {
    return (
  <div className="flex flex-col">
    <Search />
    <SearchResults searchResults={searchResults}/>
  </div>
  )
}
