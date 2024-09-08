import { Metadata } from "next";
import { fetchArtistById, fetchSearch } from "../../lib/data";
import ImageComponent from "@/app/ui/image-component";
import AlbumNameLinks from "@/app/ui/album-name-link";

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
  const image = artist.image ? artist.image : artist.albums[0].cover || "";

  return (
    <div className="w-full flex flex-col items-center align-center">
      <ImageComponent image={image} />
      <h1>{artist.name}</h1>
      <AlbumNameLinks albums={artist.albums} />
    </div>
  );
}
