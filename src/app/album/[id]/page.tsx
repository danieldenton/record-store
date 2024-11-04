import { Metadata } from "next";
import { fetchAlbumById } from "../../lib/data";
import Navbar from "@/app/components/navbar";
import ArtistAlbumPageTitle from "@/app/components/artist-album-page-title";
import ImageComponent from "@/app/components/image-component";
import ArtistNameLink from "@/app/components/artist-name-link";
import AddToCartButton from "@/app/components/add-to-cart-button";

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

  return (
    <div className="w-full flex flex-col align center">
      <Navbar searchParams={searchParams} />
      <ArtistAlbumPageTitle name={album.name} />

      <div className="flex w-full justify-center">
        <div className="flex flex-col justify-center items-center w-1/2 mt-4">
          <ImageComponent image={album.cover} />
          <AddToCartButton albumId={album.id} />
        </div>
        <div className="w-1/3 flex flex-col justify-center">
          <div className="bg-white p-2">
            <h2 className="font-bold text-xl text-black mx-auto">Artist</h2>
          </div>
          <div className="my-2">
            <ArtistNameLink artists={album.artists} />
          </div>
        </div>
      </div>
    </div>
  );
}
