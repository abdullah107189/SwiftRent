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
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | SwiftRent</title>
        <meta
          name="description"
          content="Learn more about SwiftRent, our expert car rental team, and our mission to provide the best car booking experience. Meet the team, watch our promo, and get in touch!"
        />
      </Helmet>
      <PageHeader
        image={aboutBanner}
        subTitle={"SwiftRent"}
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
