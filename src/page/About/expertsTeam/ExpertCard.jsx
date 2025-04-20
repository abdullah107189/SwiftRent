import React from "react";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExpertCard = ({ expert }) => {
  return (
    <Link
      to={`/expert/${expert._id}`}
      className="relative h-[300px] w-full md:h-[450px] rounded-3xl overflow-hidden group cursor-pointer"
    >
      {/* Content */}
      <div className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-100">
        <img
          src={expert?.image}
          alt={expert?.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Bottom Info */}
      <div className="flex items-center absolute bottom-0 left-0">
        <div className="relative p-4 rounded-[0_40px_0_0] fBgBlack">
          <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#F5B754] bg-transparent rounded-full dark:text-white font-bold text-[14px] text-center group-hover:bg-[#F5B754] dark:group-hover:text-[#1b1b1b] group-hover:text-[#f8f9fa]">
            <FaInfo className="text-lg" />
          </div>
          <div className="absolute -top-[20px] -left-[4px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 0L0 0L0 11C0 4.92 4.92 0 11 0Z" />
            </svg>
          </div>
          <div className="absolute -bottom-[0px] -right-[22px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 0L0 0L0 11C0 4.92 4.92 0 11 0Z" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-xl text-[#f8f9fa]/90 font-semibold">
            {expert?.name}
          </h1>
          <p className="text-sm dark:tBlack text-[#f8f9fa]/60">
            {expert?.role}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ExpertCard;
