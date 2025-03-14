import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RentalCarSection from "./Home/RentalCarSection";
import CarRentalProcessSection from "./Home/RentalCarTypes/CarRentalProcessSection.jsx/CarRentalProcessSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="mxw">
        <RentalCarSection />
        <CarRentalProcessSection />
      </div>
    </div>
  );
};

export default Home;
