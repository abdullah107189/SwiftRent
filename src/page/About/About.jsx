import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import aboutBanner from "../../assets/Bentley-Bentayga-car.jpg";
import CarPromoVideo from "../services/CarPromoVideo";
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
      </div>
    </div>
  );
};

export default About;
