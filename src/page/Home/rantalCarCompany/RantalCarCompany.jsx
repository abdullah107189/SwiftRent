import React from "react";
import NameCard from "../../../components/shared/card/NameCard";
import ImageCard from "../../../components/shared/card/ImageCard";
import { FaMarker } from "react-icons/fa";

const car = [
  {
    image: "https://i.ibb.co.com/xq60b7hg/car-Company.jpg",
  },
];

export default function RentalCarCompany() {
  return (
    <div className="text-white py-5 md:py-15 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-12 lg:gap-28">
        {/* Left Content Section */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-[#E8A743] uppercase tracking-widest text-sm md:text-base">
            Rentax
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
              <span className="text-[#E8A743] text-lg">✔</span> Sports and
              Luxury Cars
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <span className="text-[#E8A743] bg-[#E8A743]/10 p-3 rounded-full text-lg"><FaMarker></FaMarker></span> Economy Cars
            </li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <button className="fillBtn hover:-translate-y-1.5">
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
