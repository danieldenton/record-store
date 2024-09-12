import CartAlbumComponent from "./cart-album-component";
import { CartAlbum } from "../lib/definitions";

export default function CartTableComponent({
  albums,
}: {
  albums: CartAlbum[];
}) {
  const cartItems = albums.map((item) => {
    return <CartAlbumComponent album={item} />;
  });

  const totalPrice = albums.reduce((total, album) => {
    return total + parseFloat(album.price);
  }, 0);
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
      </table>
      <div className="flex border-b border-r">
        <p className="font-bold text-xl text-end w-full border py-4">Subtotal</p>
        <p className="font-bold text-xl border-b p-2">{totalPrice}</p>
      </div>
    </>
  );
}
