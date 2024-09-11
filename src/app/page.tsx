import Navbar from "./components/navbar";
import { fetchSearch } from "./lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];

  return (
    <div className="flex flex-col justify-center">
      <Navbar searchResults={searchResults} />
      <h1 className="flex justify-center">Home</h1>
    </div>
  );
}
