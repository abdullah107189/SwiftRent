import SectionHeader from "../../../../components/shared/SectionHeader";
import CarRentalProcessCard from "./CarRentalProcessCard";

const CarRentalProcessSection = () => {
    return (
        <div>
            <SectionHeader title="Steps" subtitle="Car Rental Process" />
               {/* Other content */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5">
           <CarRentalProcessCard/>
            <CarRentalProcessCard/>
            <CarRentalProcessCard/>
           </div>
        </div>
    );
};

export default CarRentalProcessSection;