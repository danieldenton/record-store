import Link from "next/link";
import Image from "next/image";

type Artist = {
  id: string;
  name: string;
  image: string;
};

export default function ArtistNameLink({ artists }: { artists: Artist[] }) {
  const nameLinks = artists.map((artist) => {
    return (
      <Link href={`/artist/${artist.id}`} className="flex items-center m-1">
        <Image src={artist.image} alt={artist.name} height={100} width={100} />
        <p className="ml-3">{artist.name}</p>
      </Link>
    );
  });
  return nameLinks;
}
