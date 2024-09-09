import Navbar from "./navbar";
import { fetchSearch } from "./lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  console.log(searchResults)
  return (
    <div className="flex flex-col justify-center">
       <Navbar />
      <h1 className="flex justify-center">Home Page</h1>
    </div>
  );
}
