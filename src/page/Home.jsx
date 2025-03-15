import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RentalCarSection from "./Home/RentalCarSection";
import CarRentalProcessSection from "./Home/RentalCarTypes/CarRentalProcessSection.jsx/CarRentalProcessSection";
import RentalCarCompany from "./Home/rantalCarCompany/RantalCarCompany";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="mxw">
        <RentalCarCompany />

        <RentalCarSection />
        <CarRentalProcessSection />
      </div>
    </div>
  );
};

export default Home;
