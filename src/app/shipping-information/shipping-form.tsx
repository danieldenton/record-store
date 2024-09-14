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
      <label className="flex flex-col font-bold text-center p-2">
        {input.label}
        <input
          type="text"
          name={input.name}
          value={input.value}
          onChange={handleChange}
          className="w-full"
        />
      </label>
    );
  });

  return (
    <div className="flex justify-center border p-4 w-1/2">
      <form className="flex flex-col w-full">
        {shippingFormInputs}
        <button type="submit" className="mt-4 p-2 bg-red text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
