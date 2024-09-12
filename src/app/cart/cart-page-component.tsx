import CartAlbumComponent from "./cart-album-component";
import { CartAlbum } from "../lib/definitions";

export default function CartPageComponent({ albums }: { albums: CartAlbum[] }) {
  const cartItems = albums.map((item) => {
    return <CartAlbumComponent album={item} />;
  });
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">Select</th>
          <th className="border-b p-2 text-left">Album</th>
          <th className="border-b p-2 text-left"></th>
          <th className="border-b p-2 text-left">Artists</th>
          <th className="border-b p-2 text-left">Price</th>
        </tr>
      </thead>
      <tbody>{cartItems}</tbody>
    </table>
  );
}
