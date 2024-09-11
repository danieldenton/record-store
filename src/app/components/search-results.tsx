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
      <div className="absolute z-10 bg-slate-50 text-black w-[666px]">
        {searchResults.map((result) => (
          <div key={`${result.type}${result.id}`}>
            <Link
              href={`/${result.type}/${result.id}`}
              className="flex flex-row text-primary hover:bg-yellow"
            >
              <p>{result.name}</p>
              <p className="text-red text-sm ml-2 mt-0.5">{result.type}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
