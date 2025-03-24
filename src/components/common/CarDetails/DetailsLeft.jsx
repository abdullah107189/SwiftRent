import React from "react";
import { FaDoorOpen, FaUserFriends, FaSuitcase, FaFan } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

export default function DetailsLeft({ car }) {
  return (
    <div className="sBgBlack p-6 rounded-3xl shadow-md md:w-90  ">
      {/* Price Section */}
      <h2 className="text-4xl font-extrabold orange">
        $139 <span className="text-2xl text-white ">/Per Day </span>
      </h2>

      <hr className="my-4 text-white/20" />

      {/* Car Features */}
      <div className="space-y-4 text-lg font-semibold">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <FaDoorOpen size={22} /> Doors
          </span>
          <span>4</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <FaUserFriends size={22} /> Passengers
          </span>
          <span>2</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <IoMdSpeedometer size={22} /> Transmission
          </span>
          <span>Auto</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <MdTimer size={22} /> Age
          </span>
          <span>2</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <FaSuitcase size={22} /> Luggage
          </span>
          <span>2</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3">
            <FaFan size={22} /> Air Condition
          </span>
          <span>Yes</span>
        </div>
      </div>

      <hr className="my-4 text-white/20" />

      {/* Booking Buttons */}
      <div className="flex items-center gap-4">
        <button className="fillBtn">
          <span className="mr-2">Book Now</span> <BsArrowUpRight size={16} />
        </button>
        <span className="text-xl font-bold">OR</span>
        <button className="hover:bg-[#f5b754] transition duration-300 text-white p-3 rounded-full bg-green-600 cursor-pointer">
          <FaWhatsapp size={24} />
        </button>
      </div>
    </div>
  );
}
