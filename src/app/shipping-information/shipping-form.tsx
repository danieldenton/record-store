"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/context/cart";

export default function ShippingForm() {
  const router = useRouter();
  const { cartParam } = useCartContext();
  const [shippingAddress, setShippingAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [billing, setBilling] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action = (e.nativeEvent as SubmitEvent).submitter?.getAttribute(
      "value"
    );
    console.log(action);
    if (action === "continue_to_checkout") {
      setShippingAddress(formData);
      setBillingAddress(formData);
      router.push(`/checkout?checkout=${encodeURIComponent(cartParam)}`);
    } else if (action === "enter_billing_address") {
      setShippingAddress(formData);
      setBilling(true);
      setFormData({
        name: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        country: "",
        zip: "",
      });
    } else {
      setBillingAddress(formData);
      router.push(`/checkout?checkout=${encodeURIComponent(cartParam)}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formInputData = [
    {
      label: "Name",
      name: "name",
      value: formData.name,
    },
    {
      label: "Street 1",
      name: "street1",
      value: formData.street1,
    },
    {
      label: "Street 2",
      name: "street",
      value: formData.street2,
    },
    {
      label: "City",
      name: "city",
      value: formData.city,
    },
    {
      label: "State",
      name: "state",
      value: formData.state,
    },
    {
      label: "Country",
      name: "country",
      value: formData.country,
    },
    {
      label: "Zip",
      name: "zip",
      value: formData.zip,
    },
  ];

  const shippingFormInputs = formInputData.map((input) => {
    return (
      <label className="flex flex-col font-bold text-center my-2">
        {input.label}
        <input
          type="text"
          name={input.name}
          value={input.value}
          onChange={handleChange}
          className="w-full rounded h-8 p-1"
        />
      </label>
    );
  });

  return (
    <div className="flex flex-col justify-center border-2 p-6 w-1/2 rounded">
      <div className="text-center">
        {billing ? (
          <p className="font-bold text-xl">Billing Address</p>
        ) : (
          <p className="font-bold text-xl">Shipping Address</p>
        )}
      </div>
      <form className="flex flex-col w-full h-full p-6" onSubmit={handleSubmit}>
        {shippingFormInputs}
        {billing ? (
          <button
            type="submit"
            name="action"
            value="checkout"
            className="mt-6 p-2.5 bg-red text-white rounded"
          >
            Checkout
          </button>
        ) : (
          <>
            <button
              type="submit"
              name="action"
              value="continue_to_checkout"
              className="mt-6 p-2.5 bg-red text-white rounded"
            >
              Billing Address is the Same as Shipping
            </button>
            <button
              type="submit"
              name="action"
              value="enter_billing_address"
              className="mt-6 p-2.5 bg-red text-white rounded"
            >
              Enter Billing Address
            </button>
          </>
        )}
      </form>
    </div>
  );
}
