import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";

const awards = [
  {
    title: "Best Car Rental Service 2023",
    description:
      "Awarded for providing exceptional customer service and top-quality vehicles.",
    image: "https://i.ibb.co.com/Cp1Gw88z/image-2.jpg",
  },
  {
    title: "Top Innovator in Car Rentals 2022",
    description:
      "Recognized for innovation and technology integration in the car rental industry.",
    image: "https://i.ibb.co.com/JRsY9tqF/image-1.jpg",
  },
  {
    title: "Customer Choice Award 2021",
    description: "Voted as the most customer-friendly car rental service.",
    image: "https://i.ibb.co.com/xSGxx9KZ/image.jpg",
  },
];

const AwardsRecognition = () => {
  return (
    <div className="md:py-16 py-10 ">
      <div className="mxw px-4">
        <SectionHeader
          title="Awards & Recognition"
          subtitle="Our Achievements"
          className="orange"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#222222] md:p-6 p-3 rounded-lg shadow-xl space-y-4"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl text-[#f5b754] dark:text-[#f5b754] font-semibold orange">
                {award.title}
              </h3>
              <p className="tBlack">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
