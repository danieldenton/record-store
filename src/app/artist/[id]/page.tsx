import { Metadata } from "next";
import { fetchArtistById, fetchSearch } from "../../lib/data";
import Navbar from "@/app/components/navbar";
import ImageComponent from "@/app/components/image-component";
import AlbumNameLinks from "@/app/components/album-name-link";

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
  const id = params.id;
  const artist = await fetchArtistById(id);
  const image = artist.image ? artist.image : artist.albums[0].cover || "";
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];

  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchResults={searchResults} />
      <ImageComponent image={image} />
      <h1>{artist.name}</h1>
      <AlbumNameLinks albums={artist.albums} />
    </div>
  );
}
