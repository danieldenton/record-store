"use client";

import Link from "next/link";
import { SearchResult } from "../lib/definitions";

export default function SearchResults({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  return (
    <div className="relaitve">
      <div className="absolute z-10 bg-slate-50 text-black">
        {searchResults.map((result) => (
          <div>
            <Link
              href={`/${result.type}/${result.id}`}
              className="flex flex-row text-primary hover:bg-popover"
            >
              <p>{result.name}</p>
              <p className="text-destructive text-sm ml-2 mt-0.5">
                {result.type}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
