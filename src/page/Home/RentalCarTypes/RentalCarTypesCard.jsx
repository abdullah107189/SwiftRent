import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function RentalCarTypesCard({ car }) {
  return (
    <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden ">
      {/* Image Section */}
      <div className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-110"
        />
        <h2 className="absolute top-4 left-4 text-white font-bold text-lg">
          {car.title}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-black rounded-tr-[50px]"></div>

      {/* Bottom Left Icon Button (Black Circle with Golden Border) */}
      <div className="absolute bottom-3 left-4 flex items-center justify-center w-12 h-12 bg-black border-2 border-[#F5B754] rounded-full shadow-lg">
        <MdArrowOutward size={24} className="orange" />
      </div>

      {/* Custom Rounded Bottom Right Corner */}
    </div>
  );
}
