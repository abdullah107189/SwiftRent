import React from "react";
import { FaPlay, FaWhatsapp, } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import SectionHeader from "../../../components/shared/SectionHeader";

export default function InterestedRenting() {
  return (
    <div className="relative h-[450px] overflow-hidden flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/237356Dh/3.jpg')`,
        }}
      ></div>
      <div className="relative z-10 text-center  flex flex-col items-center justify-center">
        <SectionHeader
          title="Rent Your Car"
          subtitle="Interested in Renting?"
          dec="Don't hesitate and send us a message."
        />
        <div className="flex gap-4">
          <button className="fillBtn gap-2">
            {" "}
            <FaWhatsapp />
            WhatsApp
          </button>
          <button className="outlineBtn gap-2">
            Rent Now <GoArrowUpRight />
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </div>
  );
}
