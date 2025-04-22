import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./rentel.css";
import { Navigation, Pagination } from "swiper/modules";
import NameCard from "../../../components/shared/card/NameCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

export default function RentalCarTypes() {
  const axiosPublic = useAxiosPublic();
  const [carTypes, setCarTypes]=useState([])
  
      useEffect(() => {
         const fetchData = async () => {
           const { data } = await axiosPublic.get("/rental-typs");
           setCarTypes(data);
         };
         fetchData();
       }, []);

  // const [carTypes, setCarTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosPublic.get("/rental-typs");
      setCarTypes(data);
    };
    fetchData();
  }, []);
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
            <NameCard image={car?.image} name={car?.name}></NameCard>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination Dots */}
      <div className="swiper-pagination mt-4 flex justify-center"></div>
    </div>
  );
}
