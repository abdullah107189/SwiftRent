import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import aboutBanner from "../../assets/Bentley-Bentayga-car.jpg";
const About = () => {
  return (
    <div>
      <PageHeader
        image={aboutBanner}
        subTitle={"Rentax"}
        titleWhite={"About"}
        titleOrange={"Us"}
      ></PageHeader>
    </div>
  );
};

export default About;
