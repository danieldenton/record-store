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
        <tr>
          <td></td>
          <td className="border-t"></td>
          <td></td>
          <td className="font-bold text-xl px-2 py-6 text-right">Subtotal:</td>
          <td className="font-bold text-xl px-2 py-6 border-l">
            {`$${totalPrice.toFixed(2)}`}
          </td>
        </tr>
      </table>
    </>
  );
}
