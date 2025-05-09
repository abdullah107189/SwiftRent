import DetailsContent from "./DetailsContent";
import Car_Details from "./Car_Details";
import { Helmet } from "react-helmet-async";

const CarDetails = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Car Details | SwiftRent</title>
          <meta
            name="description"
            content="View detailed information about cars available for rent on SwiftRent. Get the best car options tailored to your needs."
          />
        </Helmet>
      </div>
      <div className="">
        <Car_Details />
        <DetailsContent />
      </div>
    </>
  );
};

export default CarDetails;
