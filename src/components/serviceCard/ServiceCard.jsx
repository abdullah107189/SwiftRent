import React from "react";

const ServiceCard = ({ image, serviceName, serviceNumber }) => {
  return (
    <div className="relative h-[300px] w-full md:h-[350px] rounded-3xl overflow-hidden shadow-lg group ">
      {/* Image Section */}
      <div className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Bottom Dark Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Service Name */}
      <h2 className="absolute bottom-4 left-[105px] text-white text-lg font-semibold z-10">
        {serviceName}
      </h2>

      {/* Custom Rounded Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-20 h-20 fBgBlack rounded-tr-[50px]"></div>

      {/* Service Number in Circle with Border & Hover Effect */}
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-14 h-14 border-1 border-[#F5B754] bg-transparent text-white font-bold text-xl rounded-full transition duration-300 group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
        {serviceNumber}
      </div>
    </div>
  );
};

export default ServiceCard;
