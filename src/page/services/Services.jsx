import React from "react";
import serviceBackgroundPhooto from "../../assets/heroSection/3.jpg";
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

const Services = () => {
  return (
    <div className="relative  bg-[#1B1B1B] ">
      {/* Page Header section */}
      <PageHeader
        subTitle={"What We Do"}
        titleWhite={"Our"}
        titleOrange={"Services"}
        image={serviceBackgroundPhooto}
      ></PageHeader>

      {/* Service Cards Section */}
      <div className="mxw grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center my-16">
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
        {/* <ServiceCard
          image={Fleet_leasing}
          serviceName="Fleet Leasing"
          serviceNumber="04"
        /> */}
        <ServiceCard
          image={Car_Rental_with_Driver}
          serviceName="Car Rental with Driver"
          serviceNumber="04"
        />
        {/* <ServiceCard
          image={Private_Transfer}
          serviceName="Private Transfer"
          serviceNumber="06"
        /> */}
        <ServiceCard
          image={Luxury_Car_Rental}
          serviceName="VIP Transfer"
          serviceNumber="05"
        />
        <ServiceCard
          image={Airport_Service}
          serviceName="Airport Transfer"
          serviceNumber="06"
        />
      </div>
      <BookAuto />
      <OtherServices />
    </div>
  );
};

export default Services;
