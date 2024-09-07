import { SearchResult } from "../lib/definitions";
import Link from "next/link";

export default async function SearchResults({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  const results = searchResults?.map((result) => {
    return (
      <Link href={`${result.type}`} key={result.id} className="flex flex-row text-primary hover:bg-popover">
        <p>{result.name}</p> <p className="text-destructive text-sm ml-2 mt-0.5">{result.type}</p>
      </Link>
    );
  });
  return <div className="bg-secondary">{results}</div>;
}
