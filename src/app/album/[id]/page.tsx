import { Metadata } from "next";
import { fetchAlbumById } from "../../lib/data";
import { AlbumProps } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: 'Album',
};

export default function Album({ id, name, release, notes, price, cover, genres,  }: AlbumProps) {
  return <h1>{name}</h1>;
}
