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
      <div key={result.id} className="bg-white text-black h-9">
        <p>{result.match}</p>
      </div>
    );
  });
  return <div className="bg-white">No results to display</div>;
}
