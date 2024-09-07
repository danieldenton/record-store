import { Metadata } from "next";
import Image from "next/image";
import { fetchArtistById, fetchSearch } from "../../lib/data";
import { AlbumsOnArtistPage } from "@/app/lib/definitions";
import SearchBar from "@/app/ui/search-bar";
import ImageNotFound from "@/app/ui/image-not-found";

export const metadata: Metadata = {
  title: "Artist",
};

export default async function Artist({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];
  const id = params.id;
  const artist = await fetchArtistById(id);
  const albumNames = artist.albums.map((album) => {
    return <h1>{album.name}</h1>;
  });
  const image = artist.image ? artist.image : artist.albums[0].cover || "";

  return (
    <div className="w-full flex flex-col items-center align center border">
      <SearchBar searchResults={searchResults} />
      {image ? (
        <Image src={image} alt="artist cover" width={300} height={300} />
      ) : (
        <ImageNotFound />
      )}
      <h1>{artist.name}</h1>
      {albumNames}
    </div>
  );
}
