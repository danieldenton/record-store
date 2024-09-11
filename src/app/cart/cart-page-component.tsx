import CartAlbumComponent from "./cart-album-component";
import { CartAlbum } from "../lib/definitions";

export default function CartPageComponent({ albums }: { albums: CartAlbum[] }) {
  const cartItems = albums.map((item) => {
    return <CartAlbumComponent album={item} />;
  });
  return <>{cartItems}</>;
}
