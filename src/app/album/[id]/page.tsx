import { Metadata } from "next";
import { fetchAlbumById } from "../../lib/data";

export const metadata: Metadata = {
  title: "Album",
};

export default async function Album({ params }: { params: { id: string } }) {
  const id = params.id;
  const album = await fetchAlbumById(id);
  const artist = album.artists.map((artist) => {
    return <h1>{artist}</h1>;
  });

  return (
    <div>
  <h1>{album.name}</h1>
  <h1>{artist}</h1>
  </div>
)
}
