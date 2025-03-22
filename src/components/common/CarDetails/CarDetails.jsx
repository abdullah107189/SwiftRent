import React from "react";
import detaisImg from "/src/assets/details/details.png";

import PageHeader from "../../shared/PageHeader";
import DetailsCard from "./DetailsCard";

export default function CarDetails() {
  return (
    <div className="">
      <PageHeader
        subTitle="Available Cars"
        titleWhite="Car"
        titleOrange="Details"
        image={detaisImg}
      />
      <div className="mxw">
        <DetailsCard />
      </div>
    </div>
  );
}
