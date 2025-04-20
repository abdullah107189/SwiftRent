import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutContact() {
  return (
    <div className="sBgBlack py-10 flex justify-center px-4">
      <div className="dark:text-white border rounded-lg flex flex-col md:flex-row border-[#1b1b1b] w-full mxw">
        {/* Call Us */}
        <div className="flex items-center gap-4 py-6 border-b md:border-b-0 md:border-r border-[#1b1b1b] w-full px-6">
          <div className="bgOrange p-4 rounded-full">
            <FaPhoneAlt size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Call us</h3>
            <p className="tBlack">+971 52-333-4444</p>
          </div>
        </div>

        {/* Write to Us */}
        <div className="flex items-center gap-4 py-6 border-b md:border-b-0 md:border-r border-[#1b1b1b] w-full px-6">
          <div className="bgOrange  p-4 rounded-full">
            <FaEnvelope size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Write to us</h3>
            <p className="tBlack">info@renax.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 py-6 w-full px-6">
          <div className="bgOrange  p-4 rounded-full">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="tBlack">Dubai, Water Tower, Office 123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
