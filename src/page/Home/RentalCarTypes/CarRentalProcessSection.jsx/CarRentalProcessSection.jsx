import SectionHeader from "../../../../components/shared/SectionHeader";
import SimpleCard from "../../../../components/shared/simpleCard";

const CarRentalProcessSection = () => {
  return (
    <div>
      <SectionHeader title="Steps" subtitle="Car Rental Process" />
      {/* Other content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SimpleCard
          title={"Choose A Car"}
          details={
            "View our range of cars, find your perfect car for the coming days."
          }
          number={"01"}
        ></SimpleCard>
        <SimpleCard
          title={"Choose A Car"}
          details={
            "View our range of cars, find your perfect car for the coming days."
          }
          number={"01"}
        ></SimpleCard>
        <SimpleCard
          title={"Choose A Car"}
          details={
            "View our range of cars, find your perfect car for the coming days."
          }
          number={"01"}
        ></SimpleCard>
      </div>
    </div>
  );
};

export default CarRentalProcessSection;
