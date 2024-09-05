import { SearchResult } from "../lib/definitions";

export default async function SearchResults({
  searchResults
}: {
  searchResults: SearchResult[];
}) {
  
  const results = searchResults?.map((result) => {
    return (
      <div key={result.id} className="text-black">
        <p>{result.match}</p>
      </div>
    );
  });
  return <div className="bg-white">{results}</div>;
}
