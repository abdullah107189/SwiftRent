import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import aboutBanner from "../../assets/Bentley-Bentayga-car.jpg";
import CarPromoVideo from "../services/CarPromoVideo";
import ClientsSay from "./clientsSay/ClientsSay";
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
        <CarPromoVideo />
       <ClientsSay/>
      </div>
    </div>
  );
};

export default About;
