import React from "react";
import NameCard from "../../../components/shared/card/NameCard";
import ImageCard from "../../../components/shared/card/ImageCard";
import { IoMdCheckmark } from "react-icons/io";

const car = [
  {
    image:
      "https://i.ibb.co.com/0pxqDF9p/handsome-business-man-by-white-car-1303-16415.jpg",
  },
];

export default function RentalCarCompany() {
  return (
    <div className="text-white py-5 md:py-15 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-12 lg:gap-28">
        {/* Left Content Section */}
        <div className="space-y-6 text-center md:text-left">
          <p className="uppercase text-sm mb-2 tracking-[1rem] flex gap-5 items-center orange">
            SwiftRent
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            We Are More Than <br />
            <span className="text-[#E8A743]">A Car Rental Company</span>
          </h1>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Car repair quisuqe sodales dui ut varius vestibulum drana tortor
            turpis portition tellus.
          </p>
          <ul className="space-y-3">
            <li className="flex justify-center md:justify-start items-center gap-3">
              <span className="text-[#E8A743] text-lg p-2 rounded-full  bg-[#2f2e2d] ">
                {" "}
                <IoMdCheckmark />
              </span>{" "}
              Sports and Luxury Cars
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <span className="text-[#E8A743] text-lg p-2 rounded-full  bg-[#2f2e2d]">
                <IoMdCheckmark />
              </span>{" "}
              Economy Cars
              
            </li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <button
              className="fillBtn transition-all  duration-300 
  hover:-translate-y-1.5 "
            >
              Read More →
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end md:mx-10">
          <ImageCard image={car[0]?.image} />
        </div>
      </div>
    </div>
  );
}
