import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const flags = [
  { img: "https://i.ibb.co.com/wh7fjfVT/5.png" },
  { img: "https://i.ibb.co.com/1kVHL9q/4.png" },
  { img: "https://i.ibb.co.com/S4wfRvc2/3.png" },
  { img: "https://i.ibb.co.com/d4cfg49d/1.png" },
  { img: "https://i.ibb.co.com/LhYB9gQF/8.png" },
  { img: "https://i.ibb.co.com/1kVHL9q/4.png" },
  { img: "https://i.ibb.co.com/S4wfRvc2/3.png" },
  { img: "https://i.ibb.co.com/d4cfg49d/1.png" },
  { img: "https://i.ibb.co.com/LhYB9gQF/8.png" },
];

export default function AboutFlag() {
  return (
    <div className="mxw py-10">
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        freeMode={true}
        pagination={{ clickable: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {flags.map((flag, index) => (
          <SwiperSlide key={index}>
            <img
              src={flag.img}
              alt={`Flag ${index + 1}`}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .swiper-pagination-bullet {
          display: none;
        }
      `}</style>
    </div>
  );
}
