import ShippingForm from "./shipping-form";
import CheckoutButton from "./checkout-button";

export default function ShippingInformation() {
  return (
    <div className="p-32 bg-black flex flex-col items-center">
      <ShippingForm />
    </div>
  );
}
