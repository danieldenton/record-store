import Link from "next/link";
import Image from "next/image";
import { fetchArtistById } from "../lib/data";

type Artist = {
  id: string;
  name: string;
  // image: string
};

export default function ArtistNameLink({ artists }: { artists: Artist[] }) {
  // const artist = await fetchArtistById(id);
  // const image = artist.image ? artist.image : artist.albums[0].cover || "";
  const nameLinks = artists.map((artist) => {
    return (
      <Link href={`/artist/${artist.id}`} className="flex items-center m-1">
        {/* <Image src={artist.image} alt={artist.name} height={50} width={50} /> */}
        <p className="ml-3">{artist.name}</p>
      </Link>
    );
  });
  return nameLinks;
}