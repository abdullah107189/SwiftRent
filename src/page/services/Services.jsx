import React, { useEffect, useState } from "react";
import serviceBackgroundPhoto from "../../assets/heroSection/3.jpg";
import "./service.css";
import PageHeader from "../../components/shared/PageHeader";
import BookAuto from "./BookAuto";
import OtherServices from "./OtherServices";
import CarPromoVideo from "./CarPromoVideo";
import NumberCard from "../../components/shared/card/NumberCard";

const Services = () => {
  const [cars, setCars] = useState([]);

  // API useEffect
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return (
    <div className="relative bg-[#1B1B1B]">
      {/* Page Header section */}
      <PageHeader
        subTitle={"Available Cars"}
        titleWhite={"Our"}
        titleOrange={"Cars"}
        image={serviceBackgroundPhoto}
      />

      {/* Cars Card Section */}
      <div className="mxw grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center my-16">
        {cars.map((car, index) => (
          <NumberCard
            key={car._id}
            image={car.image || "https://via.placeholder.com/300"}
            name={car.name}
            number={(index + 1).toString().padStart(2, "0")}
          />
        ))}
      </div>

      {/* Additional Components  */}
      <BookAuto />
      <OtherServices />
      <CarPromoVideo />
    </div>
  );
};

export default Services;
