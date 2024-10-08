"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchResult } from "../lib/definitions";
import SearchResults from "./search-results";

export default function Search({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mx-auto mb-1 flex flex-col">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative rounded">
        <input
          className="w-[666px] rounded-md py-[9px] pl-10 text-black focus:outline-none"
          placeholder="Search for an album or artist here"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-black peer-focus:text-gray-900" />
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
