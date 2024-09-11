import CartAlbumComponent from "./cart-album-component";
import { CartAlbum } from "../lib/definitions";

export default function CartPageComponent({ albums }: { albums: CartAlbum[] }) {
  console.log(albums);
  const cartItems = albums.map((item) => {
    console.log("Page prop:", item);
    return <CartAlbumComponent album={item} />;
  });
  return <>{cartItems}</>;
}
