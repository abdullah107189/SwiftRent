import React from "react";
import RentalCarTypesCard from "./RentalCarTypesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./rentel.css";
import { Navigation, Pagination } from "swiper/modules";

const carTypes = [
  { title: "Luxury Cars", image: "https://i.ibb.co/Y7HgktqJ/download-45.jpg" },
  { title: "Sport Cars", image: "https://i.ibb.co/Y7HgktqJ/download-45.jpg" },
  { title: "SUV", image: "https://i.ibb.co/Y7HgktqJ/download-45.jpg" },
  { title: "Luxury Cars", image: "https://i.ibb.co/Y7HgktqJ/download-45.jpg" },
  { title: "Sport Cars", image: "https://i.ibb.co/Y7HgktqJ/download-45.jpg" },
  { title: "SUV", image: "https://i.ibb.co/Y7HgktqJ/download-45.jpg" },
];

export default function RentalCarTypes() {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-rentel-pagination"></span>`;
          },
        }}
      >
        {carTypes.map((car, index) => (
          <SwiperSlide key={index}>
            <RentalCarTypesCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination Dots */}
      <div className="swiper-pagination mt-4 flex justify-center"></div>
    </div>
  );
}
