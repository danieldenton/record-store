import Image from "next/image";

type CartAlbum = {
  id: string;
  name: string;
  cover: string;
  cost: string
};

export default function CartAlbumComponent({ album }: { album: CartAlbum }) {
  return (
    <div className="flex items-center m-1">
      <Image src={album.cover} alt={album.name} height={50} width={50} />
      <p className="ml-3">{album.name}</p>
      <p className="ml-3">{album.cost}</p>
    </div>
  );
}
