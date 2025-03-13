import React from "react";
import serviceImage from "../../assets/servicesImg.jpg";
import "./service.css";

// Importing images for services
import Corporate from "../../assets/Corprate.webp";
import Airport_Service from "../../assets/Airport-Service.webp";
import Fleet_leasing from "../../assets/Fleet-leasing.jpg";
import Car_Rental_with_Driver from "../../assets/Car-Rental-with-Driver.jpg";
import Private_Transfer from "../../assets/Private-Transfer.jpg";
import VIP_Transfer from "../../assets/VIP-Transfer.jpg";
import Luxury_Car_Rental from "../../assets/Luxury_Car_Rental.jpg";
import Wedding_Car_Rentals from "../../assets/Wedding_Car_Rentals.jpg";
import ServiceCard from "../../components/serviceCard/ServiceCard";



const Services = () => {
  const text = "What We Do";
  const letters = text.split("").map((char, index) => (
    <span key={index} className="inline-block mx-[2px]">
      {char === " " ? "\u00A0\u00A0\u00A0" : char}
    </span>
  ));

  return (
    <div className="relative w-full bg-[#1B1B1B] ">
      {/* Background Image */}
      <div className="relative w-full h-[700px] ">
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

      {/* Service Cards Section */}
      <div className=" mxw grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 three-col lg:grid-cols-3 gap-6 p-6 justify-items-center items-center my-16">
        <ServiceCard
          image={Luxury_Car_Rental}
          serviceName="Luxury Car Rental"
          serviceNumber="01"
        />
        <ServiceCard
          image={Wedding_Car_Rentals}
          serviceName="Wedding Car Rentals"
          serviceNumber="02"
        />
        <ServiceCard
          image={Corporate}
          serviceName="Corporate Car Rental"
          serviceNumber="03"
        />
        <ServiceCard
          image={Fleet_leasing}
          serviceName="Fleet Leasing"
          serviceNumber="04"
        />
        <ServiceCard
          image={Car_Rental_with_Driver}
          serviceName="Car Rental with Driver"
          serviceNumber="05"
        />
        <ServiceCard
          image={Private_Transfer}
          serviceName="Private Transfer"
          serviceNumber="06"
        />
        <ServiceCard
          image={VIP_Transfer}
          serviceName="VIP Transfer"
          serviceNumber="07"
        />
        <ServiceCard
          image={Airport_Service}
          serviceName="Airport Transfer"
          serviceNumber="08"
        />
      </div>
    </div>
  );
};

export default Services;
