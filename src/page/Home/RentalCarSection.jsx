import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";
import RentelCarTyps from "./RentalCarTypes/RentelCarTyps";

const RentalCarSection = () => {
  return (
    <div>
      <SectionHeader title="Categories" subtitle="Rental Car Types" />
      {/* Other content */}
      <RentelCarTyps />
    </div>
  );
};

export default RentalCarSection;
