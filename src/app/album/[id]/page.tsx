import { Metadata } from "next";
import Link from "next/link";
import { fetchAlbumById, fetchSearch } from "../../lib/data";
import SearchBar from "@/app/ui/search-bar";
import ImageComponent from "@/app/ui/image-component";

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
  const artists = album.artists.map((artist) => {
    console.log(artist)
    return (
      <Link href={`/artist/${artist.id}`}>
        <p>{artist.name}</p>
      </Link>
    );
  });

  return (
    <div className="w-full flex flex-col items-center align center">
      <SearchBar searchResults={searchResults} />
      <ImageComponent image={album.cover} />
      <h1>{album.name}</h1>
      {artists}
    </div>
  );
}
