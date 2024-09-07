'use client'

import { SearchResult } from "../lib/definitions";
import Link from "next/link";

export default function SearchResults({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {

  return (
    <div className="bg-secondary">
      {searchResults.map((result) => (
        <Link
          href={`/${result.type}/${result.id}`}
          className="flex flex-row text-primary hover:bg-popover"
        >
          <p>{result.name}</p>
          <p className="text-destructive text-sm ml-2 mt-0.5">{result.type}</p>
        </Link>
      ))}
    </div>
  );
}
