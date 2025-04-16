import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RentalCarSection from "./Home/RentalCarSection";
import CarRentalProcessSection from "./Home/RentalCarTypes/CarRentalProcessSection.jsx/CarRentalProcessSection";
import RentalCarCompany from "./Home/rantalCarCompany/RantalCarCompany";
import { Helmet } from "react-helmet-async";
import ChatLauncher from "../components/ChatLauncher";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Car Rental Service</title>
        <meta
          name="description"
          content="Find the best rental cars and explore our smooth rental process. Trusted car rental service at your fingertips."
        />
      </Helmet>
      <HeroSection></HeroSection>
      <div className="mxw">
        <RentalCarCompany />
        <RentalCarSection />
        <CarRentalProcessSection />
        <ChatLauncher />
      </div>
    </div>
  );
};

export default Home;
