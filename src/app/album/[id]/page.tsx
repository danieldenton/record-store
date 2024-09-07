import { Metadata } from "next";
import Image from "next/image";
import { fetchAlbumById, fetchSearch } from "../../lib/data";
import SearchBar from "@/app/ui/search-bar";

export const metadata: Metadata = {
  title: "Album",
};

export default async function Album({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  const id = params.id;
  const album = await fetchAlbumById(id);
  const artist = album.artists.map((artist) => {
    return <h1>{artist}</h1>;
  });

  return (
    <div className="w-full flex flex-col items-center align center border">
      <SearchBar searchResults={searchResults}/>
      <Image src={album.cover} alt="album cover" width={300} height={300} />
      <h1>{album.name}</h1>
      <h2>{artist}</h2>
    </div>
  );
}
