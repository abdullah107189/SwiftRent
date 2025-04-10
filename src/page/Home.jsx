import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RentalCarSection from "./Home/RentalCarSection";
import CarRentalProcessSection from "./Home/RentalCarTypes/CarRentalProcessSection.jsx/CarRentalProcessSection";
import RentalCarCompany from "./Home/rantalCarCompany/RantalCarCompany";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Link to="/singlebooking">
        <button className="btn btn-primary">Go to Booking</button>
      </Link>
      <div className="mxw">
        <RentalCarCompany />
        <RentalCarSection />
        <CarRentalProcessSection />
      </div>
    </div>
  );
};

export default Home;
