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
      label: "Address 1",
      name: "address1",
      value: formData.name,
    },
    {
      label: "Address 2",
      name: "address2",
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
      <label>
        {input.label}
        <input
          type="text"
          name={input.name}
          value={input.value}
          onChange={handleChange}
        />
      </label>
    );
  });

  return (
    <div className="border p-4">
      <form>
        {shippingFormInputs}
        <button type="submit" className="mt-4 p-2 bg-red text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
