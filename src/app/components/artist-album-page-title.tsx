export default function ArtistAlbumPageTitle({ name }: { name: string }) {
  return (
    <div className="bg-white my-5 py-3 w-full flex justify-center">
      <h1 className="text-3xl text-black font-bold">{name}</h1>;
    </div>
  )
}
