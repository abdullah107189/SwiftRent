import React from "react";
import { FaTag } from "react-icons/fa"; // Importing FaTag from react-icons

const NumberCard = ({ name, image, number, brand, price }) => {
  return (
    <div className="relative  w-full h-[420px] rounded-3xl overflow-hidden group border border-gray-700 shadow-lg shadow-gray-900">
      {/* Image Section */}
      <div className="relative w-full h-[65%] rounded-t-3xl overflow-hidden transition-transform duration-300 hover:scale-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Bottom Dark Gradient Overlay */}
      <div className="absolute bottom-[35%] left-0 w-full h-[35%] bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

      <div className="flex items-center absolute bottom-[35%] left-0">
        <div className="relative p-4 rounded-[0_40px_0_0] bg-[#1b1b1b]">
          <div className="w-[60px] h-[60px] leading-[60px] border border-[#F5B754] bg-transparent rounded-full overflow-hidden text-white font-bold text-[14px] text-center group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
            {number}
          </div>
          <div className="absolute -top-[19px] -left-[4px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5"
            >
              <path
                d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                fill="#1b1b1b"
              ></path>
            </svg>
          </div>
          <div className="absolute -bottom-[2px] -right-[22px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"
                fill="#1b1b1b"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 pb-7 text-white relative bg-[#1b1b1b] rounded-b-3xl">
        <h2 className="text-lg font-bold">{name}</h2>

        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <p className="flex items-center">
            <FaTag className="mr-2" /> {brand}
          </p>
          <p className="flex items-center">
            <i className="fas fa-dollar-sign mr-2"></i>
            <span className=" font-semibold">${price} </span>
            <span className="text-sm text-gray-400 ml-1">/ Day</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-4 justify-center">
          <button className="fillBtn">View Details</button>
          <button className="outlineBtn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default NumberCard;
