import { Metadata } from "next";
import { fetchAlbumById } from "../../lib/data";
import ImageComponent from "@/app/components/image-component";
import ArtistNameLink from "@/app/components/artist-name-link";

export const metadata: Metadata = {
  title: "Album",
};

export default async function Album({ params }: { params: { id: string } }) {
  const id = params.id;
  const album = await fetchAlbumById(id);

  return (
    <div className="w-full flex flex-col items-center align center">
      <ImageComponent image={album.cover} />
      <h1>{album.name}</h1>
      <ArtistNameLink artists={album.artists} />
    </div>
  );
}
