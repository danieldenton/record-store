import ShippingForm from "./shipping-form";
import CheckoutButton from "./checkout-button";

export default function ShippingInformation() {
  return (
    <div className="p-20 bg-black">
      <ShippingForm />
      <CheckoutButton />
    </div>
  );
}
