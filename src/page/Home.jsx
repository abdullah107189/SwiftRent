import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RentalCarSection from "./Home/RentalCarSection";
import CarRentalProcessSection from "./Home/RentalCarTypes/CarRentalProcessSection.jsx/CarRentalProcessSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <RentalCarSection/>
      <CarRentalProcessSection/>
    </div>
  );
};

export default Home;
