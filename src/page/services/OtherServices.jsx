import React from "react";

const services = [
  {
    serviceName: "Daily Car Rental",
    description:
      " Explore our Daily Car Rental service for convenient, flexible transportation options. Whether you need a car for a day or more, we offer a variety of well-maintained vehicles to suit your needs. Enjoy affordable rates, easy booking, and reliable service to make your travel hassle-free.",
    serviceNumber: "01.",
  },
  {
    serviceName: "Monthly Car Rental",
    description:
      "Opt for our Monthly Car Rental service for long-term convenience and savings. Whether you're on a business trip or need a car for personal use, we provide a wide range of vehicles to choose from. Enjoy flexible terms, affordable rates, and hassle-free booking for all your extended rental needs.",
    serviceNumber: "02.",
  },
  {
    serviceName: "Annual Car Rental",
    description:
      "Choose our Annual Car Rental service for ultimate convenience and long-term savings. Ideal for both personal and business use, our flexible plans offer a wide range of vehicles with competitive rates. Enjoy the freedom of a reliable car all year round with easy booking and exceptional service.",
    serviceNumber: "03.",
  },
];

const text = "What We Do";
const letters = text.split("").map((char, index) => (
  <span key={index} className="inline-block mx-[2px]">
    {char === " " ? "\u00A0\u00A0\u00A0" : char}
  </span>
));

const OtherServiceCard = ({ serviceName, description, serviceNumber }) => {
  return (
    <div className="relative w-full h-full p-12  shadow-lg rounded-xl bg-[#222222] text-white ">
      {/* Service Title */}
      <h3 className="text-xl font-bold">{serviceName}</h3>

      {/* Service Description */}
      <p className="tBlack mt-2">{description}</p>

      {/* Styled Circle */}
      <div className="absolute bottom--2 left-0 flex items-center justify-center w-14 h-14 border-t-4 border-gray-600 bg-[#222222] text-[#F5B754] font-bold text-lg rounded-full transition duration-300 ">
        {serviceNumber}
      </div>
    </div>
  );
};

const OtherServices = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-24">
        <p className="text-[12px] text-[#F5B754] uppercase tracking-wide">
          {letters}
        </p>
        <h2 className="text-3xl font-bold text-[42px] mt-4">Other Services</h2>
      </div>
      <div className="relative ">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10  "></div>
        <div className="max-w-6xl mx-auto px-4 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <OtherServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
