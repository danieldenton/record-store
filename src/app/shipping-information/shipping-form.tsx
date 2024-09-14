"use client";

import { useState } from "react";

export default function ShippingForm() {
  const [formData, setFormData] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    billingName: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
  });

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
      value: formData.name,
    },
    {
      label: "Street 2",
      name: "street",
      value: formData.name,
    },
    {
      label: "City",
      name: "city",
      value: formData.name,
    },
    {
      label: "State",
      name: "state",
      value: formData.name,
    },
    {
      label: "Zip",
      name: "zip",
      value: formData.name,
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
        <p className="font-bold text-xl">Shipping Address</p>
      </div>
      <form className="flex flex-col w-full h-full p-6">
        {shippingFormInputs}
        <button type="submit" className="mt-6 p-2.5 bg-red text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
