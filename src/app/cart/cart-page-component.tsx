import { fetchAlbumsByIds } from "../lib/data";
import CartAlbumComponent from "./cart-album-component";

type Cart = number[];

export default async function CartPageComponent({ cart }: { cart: Cart }) {
    const albumsToBePurchased = await fetchAlbumsByIds(cart);
    const cartItems = albumsToBePurchased.map((item) => {
      return <CartAlbumComponent album={item} />;
    });

    return  <>{cartItems}</>
}
