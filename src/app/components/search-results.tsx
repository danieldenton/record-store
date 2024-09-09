"use client";

import Link from "next/link";

export default function SearchResults() {
  return (
    <div className="bg-secondary">
      {/* {searchResults.map((result) => (
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
        ))} */}
    </div>
  );
}
