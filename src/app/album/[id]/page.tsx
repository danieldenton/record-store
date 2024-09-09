import { Metadata } from "next";
import { fetchAlbumById, fetchSearch } from "../../lib/data";
import Navbar from "@/app/components/navbar";
import ImageComponent from "@/app/components/image-component";
import ArtistNameLink from "@/app/components/artist-name-link";

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
  const id = params.id;
  const album = await fetchAlbumById(id);
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];

  return (
    <div className="w-full flex flex-col items-center align center">
      <Navbar searchResults={searchResults} />
      <ImageComponent image={album.cover} />
      <h1>{album.name}</h1>
      <ArtistNameLink artists={album.artists} />
    </div>
  );
}
