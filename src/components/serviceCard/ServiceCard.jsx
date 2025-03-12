import React from "react";

const ServiceCard = ({ image, serviceName, serviceNumber }) => {
  return (
    <div className="relative w-full h-full  shadow-lg rounded-lg overflow-hidden group ">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute bottom-9 left-4 text-white text-lg font-semibold ">
        {serviceName}
      </div>
      <div className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-[#F5B754] rounded-full text-white font-bold text-xl">
        {serviceNumber}
      </div>
    </div>
  );
};

export default ServiceCard;
