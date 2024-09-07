import { Metadata } from "next";
import imageComponent from "@/app/ui/image-component";
import { fetchArtistById, fetchSearch } from "../../lib/data";
import SearchBar from "@/app/ui/search-bar";
import ImageNotFound from "@/app/ui/image-not-found";
import ImageComponent from "@/app/ui/image-component";

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
    <div className="w-full flex flex-col items-center align center">
      <SearchBar searchResults={searchResults} />
      <ImageComponent image={image} />
      <h1>{artist.name}</h1>
      {albumNames}
    </div>
  );
}
