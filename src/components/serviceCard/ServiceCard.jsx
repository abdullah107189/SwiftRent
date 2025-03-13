import React from "react";

const ServiceCard = ({ image, serviceName, serviceNumber }) => {
  return (
    <div className="relative w-full h-full shadow-lg rounded-lg overflow-hidden group">
      {/* Image */}
      <img
        src={image}
        alt={serviceName}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Bottom Dark Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Service Name */}
      <div className="absolute bottom-6 left-4 text-white text-lg font-semibold z-10">
        {serviceName}
      </div>

      {/* Service Number in Circle with Border & Hover Effect */}
      <div className="absolute bottom-4 right-4 flex items-center justify-center w-14 h-14 border-1 border-[#F5B754] bg-bg-transparent text-white font-bold text-xl rounded-full transition duration-300 group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
        {serviceNumber}
      </div>
    </div>
  );
};

export default ServiceCard;
