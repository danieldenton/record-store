"use client";

import Link from "next/link";
import { SearchResult } from "../lib/definitions";

export default function SearchResults({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  
  return (
    <div className="relative">
      <div className="absolute z-10 bg-grey text-black w-[666px] rounded">
        {searchResults.map((result) => (
          result.name !== "We can't find anything that matches your search..." ?
          <div key={`${result.type}${result.id}`}>
            <Link
              href={`/${result.type}/${result.id}`}
              className="flex flex-row text-primary hover:bg-yellow px-4 py-0.5"
            >
              <p>{result.name}</p>
              <p className="text-red text-sm ml-2 mt-0.5">{result.type}</p>
            </Link>
          </div> :
          <p className="px-4 py-1">{result.name}</p>
        ))}
      </div>
    </div>
  );
}
