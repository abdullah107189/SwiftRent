import SectionHeader from "../../../../components/shared/SectionHeader";
import SimpleCard from "../../../../components/shared/card/SimpleCard";

const CarRentalProcessSection = () => {
  return (
    <div>
      <SectionHeader title="Steps" subtitle="Car Rental Process" />
      {/* Other content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SimpleCard
          title={"Choose A Car"}
          details={
            "Browse our wide selection of vehicles and pick the one that matches your travel needs. Whether it's a short trip or long vacation, we’ve got you covered."
          }
          number={"01"}
        ></SimpleCard>
        <SimpleCard
          title={"Book Instantly"}
          details={
            "Fill in your details, select your rental period, and confirm your booking. Our instant reservation system makes it quick and easy for you to get started."
          }
          number={"02"}
        ></SimpleCard>
        <SimpleCard
          title={"Enjoy Your Ride"}
          details={
            "Pick up your car at your selected time and location, then hit the road with confidence. Drive safely and enjoy a smooth, stress-free journey with us."
          }
          number={"03"}
        ></SimpleCard>
      </div>
    </div>
  );
};

export default CarRentalProcessSection;
