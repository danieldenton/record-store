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

  const searchResults = query !== "" ? await fetchSearch(query) : [];

  const results = searchResults?.map((result: SearchResult) => {
    return (
      <div key={result.id} className="text-black">
        <p>{result.match}</p>
      </div>
    );
  });
  return <div className="bg-white">{results}</div>;
}
