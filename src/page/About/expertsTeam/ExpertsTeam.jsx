import React from "react";
import SectionHeader from "../../../components/shared/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./expert.css";
import ExpertCard from "./ExpertCard";

const users = [
  {
    name: "Dan Martin",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sarah Johnson",
    review:
      "Amazing experience! The service was top-notch. Really impressed with the professionalism",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Brown",
    review:
      " Really impressed with the professionalismReally impressed with the professionalism.",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emma Watson",
    review:
      "Absolutely loved it! Will come back for sure Really impressed with the professionalism.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Doe",
    review:
      "Best experience ever! Highly recommended Really impressed with the professionalism.",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Green",
    review:
      "Superb service and great value for money!Really impressed with the professionalism",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
];

export default function ExpertsTeam() {
  return (
    <div className="mxw md:pb-30 pb-10">
      <SectionHeader title="Certified Team" subtitle="Our Experts Team" />
      <div>
        <Swiper
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          className="mySwiper"
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <ExpertCard user={user} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
