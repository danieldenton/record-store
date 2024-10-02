import { Metadata } from "next";
import { fetchArtistById, fetchSearch } from "../../lib/data";
import Navbar from "@/app/components/navbar";
import ArtistAlbumPageTitle from "@/app/components/artist-album-page-title";
import ImageComponent from "@/app/components/image-component";
import AlbumNameLinks from "@/app/components/album-name-link";

export const metadata: Metadata = {
  title: "Artist",
};

export default async function Artist({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string };
}) {
  const id = params.id;
  const artist = await fetchArtistById(id);
  const image = artist.image ? artist.image : artist.albums[0].cover || "";
  const query = searchParams?.query || "";
  const searchResults = query !== "" ? await fetchSearch(query) : [];

  return (
    <div className="w-full flex flex-col items-center align-center">
      <Navbar searchResults={searchResults} />
      <ArtistAlbumPageTitle name={artist.name} />
      <div className="flex w-full justify-center">
        <div className="flex justify-center w-1/2  mt-8 border">
          <ImageComponent image={image} />
        </div>
        <div className="w-1/2 flex flex-col justify-center mt-8 border">
          <div className="bg-white p-2">
            <h2 className="font-bold text-xl text-black mx-auto">Albums</h2>
          </div>
          <div className="my-2">
          <AlbumNameLinks albums={artist.albums} />
          </div>
        </div>
      </div>
    </div>
  );
}
