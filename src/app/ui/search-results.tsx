import { fetchSearch } from "../lib/data";
import { Album } from "../lib/definitions";

type SearchResult = Album & {
  match: string;
};

export default async function SearchResults({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  let searchResults: SearchResult[] = [];
  if (query.trim()) {
    searchResults = await fetchSearch(query);
  }

  const results = searchResults.map((result) => {
    return (
      <div className="bg-white text-black">
        <p>{result.match}</p>
      </div>
    );
  });
  return <div className="bg-white">{results}</div>;
}
