import SearchBar from "./ui/search-bar";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {

  return (
    <div className="flex flex-col justify-center mt-[80px]">
      {/* <SearchBar searchParams={searchParams} /> */}
      <h1 className="flex justify-center">Home Page</h1>
    </div>
  );
}
