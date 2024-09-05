import { fetchSearch } from "../lib/data";

export default async function SearchResults({ query }: { query: string }) {
  const searchResults = await fetchSearch(query);
  return (
  <div><p>{searchResults}</p></div>
  )
}
