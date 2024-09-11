import CartAlbumComponent from "./cart-album-component";
import { Album } from "../lib/definitions";

export default function CartPageComponent({ cart }: { cart: Album[] }) {
  const cartItems = cart.map((item) => {
    console.log(item)
    return <CartAlbumComponent album={item} />;
  });
  return <>{cartItems}</>;
}
