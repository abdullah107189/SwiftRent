import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";

const CompanyMission = () => {
  return (
    <div className="">
      <div className="mxw ">
        <SectionHeader title="Our Mission & Vision" subtitle="What Drives Us" />
        <div className="text-center dark:text-white space-y-8">
          <p className="text-left tBlack ">
            At SwiftRent, we are driven by a passion to provide the best car
            rental experience to our customers. Our mission is to offer
            high-quality cars, excellent customer service, and an easy booking
            process that meets the needs of modern travelers. We believe in
            making car rentals simple, fast, and hassle-free, so our customers
            can focus on enjoying their journeys.
          </p>
          <p className="text-left tBlack  mt-6">
            Our dedication goes beyond just renting cars; we aim to create
            memorable experiences for every traveler. Whether you're going on a
            family vacation, a business trip, or an adventurous road trip, we
            ensure that each vehicle in our fleet is well-maintained, reliable,
            and ready to deliver top-notch performance. We are committed to
            providing a seamless rental process, with 24/7 customer support and
            flexible options tailored to your specific needs.
          </p>
          <p className="text-left tBlack  mt-6">
            At SwiftRent, we strive to be more than just a car rental company;
            we want to be your trusted partner in travel. As we continue to
            innovate and adapt to the changing needs of our customers, we
            envision a future where SwiftRent is synonymous with quality, trust,
            and convenience in the car rental industry.
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Mission Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#E8A743]">
                Our Mission
              </h3>
              <p className="tBlack ">
                Our mission is to provide our customers with reliable and
                affordable car rental options. We strive to maintain the highest
                level of customer satisfaction, offering vehicles that are safe,
                well-maintained, and suited to their individual needs.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#E8A743]">
                Our Vision
              </h3>
              <p className="tBlack ">
                Our vision is to become a leading car rental service provider
                globally, known for innovation, sustainability, and unparalleled
                customer care. We aim to build long-lasting relationships with
                customers and continue to evolve with the changing travel
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMission;
