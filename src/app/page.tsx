import SearchBar from "./ui/search-bar";
import { fetchSearch } from "./lib/data";
import MaxWidthWrapper from "./components/max-width-wrapper";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  return (
    <div className="flex flex-col justify-center">
      <SearchBar searchResults={searchResults} />
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          
          <h1 className="flex justify-center">Home Page</h1>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
