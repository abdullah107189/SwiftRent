// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./herSection.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="border hFull flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,

        // }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-pagination"></span>`;
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="hFull"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hFull"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hFull"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
