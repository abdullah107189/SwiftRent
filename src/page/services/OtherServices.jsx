import React from "react";
import SimpleCard from "../../components/shared/card/SimpleCard";
const services = [
  {
    serviceName: "Daily Car Rental",
    description:
      " Explore our Daily Car Rental service for convenient, flexible transportation options. Whether you need a car for a day or more, we offer a variety of well-maintained vehicles to suit your needs. Enjoy affordable rates, easy booking, and reliable service to make your travel hassle-free.",
    serviceNumber: "01",
  },
  {
    serviceName: "Monthly Car Rental",
    description:
      "Opt for our Monthly Car Rental service for long-term convenience and savings. Whether you're on a business trip or need a car for personal use, we provide a wide range of vehicles to choose from. Enjoy flexible terms, affordable rates, and hassle-free booking for all your extended rental needs.",
    serviceNumber: "02",
  },
  {
    serviceName: "Annual Car Rental",
    description:
      "Choose our Annual Car Rental service for ultimate convenience and long-term savings. Ideal for both personal and business use, our flexible plans offer a wide range of vehicles with competitive rates. Enjoy the freedom of a reliable car all year round with easy booking and exceptional service.",
    serviceNumber: "03",
  },
];

const text = "What We Do";
const letters = text.split("").map((char, index) => (
  <span key={index} className="inline-block mx-[2px]">
    {char === " " ? "\u00A0\u00A0\u00A0" : char}
  </span>
));

const OtherServices = () => {
  return (
    <div className="mb-15">
      <div className="flex flex-col justify-center items-center mt-24 ">
        <p className="text-[12px] text-[#F5B754] uppercase tracking-wide">
          {letters}
        </p>
        <h2 className="text-3xl font-bold text-[42px] mt-4">Other Services</h2>
      </div>
      <div className="relative ">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10  "></div>
        <div className="mxw px-4 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <SimpleCard
                key={index}
                title={service?.serviceName}
                details={service?.description}
                number={service?.serviceNumber}
              ></SimpleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
