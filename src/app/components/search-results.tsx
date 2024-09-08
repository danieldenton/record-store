"use client";

import Link from "next/link";
import { fetchSearch } from "../lib/data";

export default async function SearchResults({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];

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
