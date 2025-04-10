import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import aboutBanner from "../../assets/Bentley-Bentayga-car.jpg";
import CarPromoVideo from "../services/CarPromoVideo";
// import ClientsSay from "./clientsSay/ClientsSay";
import ExpertsTeam from "./expertsTeam/ExpertsTeam";
import RentalCarCompany from "../Home/rantalCarCompany/RantalCarCompany";
import InterestedRenting from "./interestedRenting/InterestedRenting";
import AboutContact from "./aboutContact/AboutContact";
import AboutFlag from "./aboutFlag/AboutFlag";
const About = () => {
  return (
    <div>
      <PageHeader
        image={aboutBanner}
        subTitle={"Rentax"}
        titleWhite={"About"}
        titleOrange={"Us"}
      ></PageHeader>
      <div>
        <RentalCarCompany />

        {/* <ClientsSay /> */}
        <ExpertsTeam />
        <InterestedRenting />
        <AboutFlag />
        <AboutContact />
      </div>
    </div>
  );
};

export default About;
