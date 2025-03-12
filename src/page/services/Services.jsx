import React from "react";
import serviceImage from "../../assets/servicesImg.jpg";

const Services = () => {
  const text = "What We Do";
  const letters = text.split("").map((char, index) => (
    <span key={index} className="inline-block mx-[2px]">
      {char === " " ? "\u00A0\u00A0\u00A0" : char}
    </span>
  ));

  return (
    <div className="relative w-full h-[700px] bg-[#999999]">
      {/* Background Image */}
      <img
        src={serviceImage}
        alt="Our Services"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <p className="text-[12px] text-[#F5B754] uppercase tracking-wide">
          {letters}
        </p>
        <h2 className="text-3xl font-bold text-[42px]">
          Our <span className="text-[#F5B754] ">Services</span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Services;
