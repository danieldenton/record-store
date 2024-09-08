import Link from "next/link";
import Image from "next/image";

type Album = {
  id: string;
  name: string;
  cover: string;
};

export default function AlbumNameLinks({ albums }: { albums: Album[] }) {
  const nameLinks = albums.map((album) => {
    return (
      <Link href={`/album/${album.id}`} className="flex items-center m-1">
        <Image src={album.cover} alt={album.name} height={50} width={50} />
        <p className="ml-3">{album.name}</p>
      </Link>
    );
  });
  return <div className="flex flex-col flex-start">{nameLinks}</div>;
}
