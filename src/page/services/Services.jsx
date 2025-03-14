import React from "react";
import serviceBackgroundPhoto from "../../assets/heroSection/3.jpg";
import "./service.css";

// Importing images for services
import Corporate from "../../assets/Corprate.webp";
import Airport_Service from "../../assets/Airport-Service.webp";
import Fleet_leasing from "../../assets/Fleet-leasing.jpg";
import Car_Rental_with_Driver from "../../assets/Car-Rental-with-Driver.jpg";
import Private_Transfer from "../../assets/Private-Transfer.jpg";
import Luxury_Car_Rental from "../../assets/Luxury_Car_Rental.jpg";
import Wedding_Car_Rentals from "../../assets/Wedding_Car_Rentals.jpg";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import BookAuto from "./BookAuto";
import OtherServices from "./OtherServices";
import PageHeader from "../../components/shared/PageHeader";
import CarPromoVideo from "./CarPromoVideo";
import NumberCard from "../../components/shared/card/NumberCard";

// Service data array
const services = [
  {
    image: Luxury_Car_Rental,
    name: "Luxury Car Rental",
    number: "01",
  },
  {
    image: Wedding_Car_Rentals,
    name: "Wedding Car Rentals",
    number: "02",
  },
  {
    image: Corporate,
    name: "Corporate Car Rental",
    number: "03",
  },
  {
    image: Car_Rental_with_Driver,
    name: "Car Rental with Driver",
    number: "04",
  },
  {
    image: Fleet_leasing,
    name: "VIP Transfer",
    number: "05",
  },
  {
    image: Airport_Service,
    name: "Airport Transfer",
    number: "06",
  },
];

const Services = () => {
  return (
    <div className="relative bg-[#1B1B1B]">
      {/* Page Header section */}
      <PageHeader
        subTitle={"What We Do"}
        titleWhite={"Our"}
        titleOrange={"Services"}
        image={serviceBackgroundPhoto}
      />

      {/* Service Cards Section */}
      <div className="mxw grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center my-16">
        {services.map((service, index) => (
          <NumberCard
            key={index}
            image={service.image}
            name={service.name}
            number={service.number}
          />
        ))}
      </div>

      {/* Additional Components */}
      <BookAuto />
      <OtherServices />
      <CarPromoVideo />
    </div>
  );
};

export default Services;
