import Link from "next/link";

type Artist = {
  id: string;
  name: string;
};

export default function ArtistNameLink({ artists }: { artists: Artist[] }) {
  const nameLinks = artists.map((artist) => {
    return (
      <Link href={`/artist/${artist.id}`}>
        <p>{artist.name}</p>
      </Link>
    );
  });
  return nameLinks;
}
