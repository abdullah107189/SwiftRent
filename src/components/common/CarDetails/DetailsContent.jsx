import React, { useState } from "react";
import { FaCheckCircle, FaPlus, FaMinus } from "react-icons/fa";

export default function DetailsContent() {
  const policies = [
    "Driver's License Requirements",
    "Insurance and Coverage policy",
    "Available payment Methods",
    "Cancellation and Modification policy",
    "Smoking and Pet Policies",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const togglePolicy = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black rounded-3xl text-white p-6">
      {/* Premium Amenities Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">
          Premium amenities and features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Music System",
            "Full Boot Space",
            "Power Steering",
            "Toolkit",
            "Usb Charger",
            "Power Windows",
            "Abs System",
            "Aux Input",
            "Bluetooth",
            "Spare Tyre",
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheckCircle className="orange" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Policies and Agreement Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Policies and agreement</h2>
        <div className="space-y-2">
          {policies.map((policy, index) => (
            <div
              key={index}
              className={`p-4 rounded-md ${
                openIndex === index ? "bgOrange" : "bg-gray-800"
              }`}
            >
              <button
                onClick={() => togglePolicy(index)}
                className="flex justify-between w-full text-left font-semibold"
              >
                {policy}
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
