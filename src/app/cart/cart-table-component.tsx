import CartAlbumComponent from "./cart-album-component";
import Subtotal from "./subtotal";
import { CartAlbum } from "../lib/definitions";

export default function CartTableComponent({
  albums,
}: {
  albums: CartAlbum[];
}) {
  const cartItems = albums.map((item) => {
    return <CartAlbumComponent album={item} />;
  });

  return (
    <>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border-b p-2 text-left text-xl">Select</th>
            <th className="border-b p-2 text-left text-xl">Album</th>
            <th className="border-b p-2 text-left text-xl"></th>
            <th className="border-b p-2 text-left text-xl">Artists</th>
            <th className="border-b p-2 text-left text-xl">Price</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
        <Subtotal albums={albums} />
      </table>
    </>
  );
}
