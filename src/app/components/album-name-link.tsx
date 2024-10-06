import Link from "next/link";
import Image from "next/image";

type Album = {
  id: string;
  name: string;
  cover: string;
  release: string
};

export default function AlbumNameLinks({ albums }: { albums: Album[] }) {
  const nameLinks = albums.map((album, idx) => {
    return (
      <Link
        href={`/album/${album.id}`}
        className="flex items-center my-2"
        key={idx}
      >
        <Image src={album.cover} alt={album.name} height={100} width={100} />
        <p className="ml-3 font-bold">{album.name}</p>
        <p className="ml-2 font-thin">{album.release}</p>
      </Link>
    );
  });
  return <div className="flex flex-col flex-start">{nameLinks}</div>;
}
