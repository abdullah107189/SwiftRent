// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./herSection.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import backgroundImage1 from "../../../assets/heroSection/1.jpg";
import backgroundImage2 from "../../../assets/heroSection/2.jpg";
import backgroundImage3 from "../../../assets/heroSection/3.jpg";
import CarDetails from "./CardDetils";

const HeroSection = () => {
  return (
    <div className="hFull flex items-center justify-center">
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
          <div
            className="hFull bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage1})`,
            }}
          >
            <CarDetails></CarDetails>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hFull bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
            }}
          >
            <h1>hello</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hFull bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage3})`,
            }}
          >
            <h1>hello</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
