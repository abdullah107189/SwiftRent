// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./herSection.css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import backgroundImage1 from "../../../assets/heroSection/1.jpg";
import backgroundImage2 from "../../../assets/heroSection/2.jpg";
import backgroundImage3 from "../../../assets/heroSection/3.jpg";
import {
  FaCarSide,
  FaUsers,
  FaCogs,
  FaSuitcaseRolling,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const specs1 = [
    { icon: <FaCarSide />, label: "Doors", value: 2, border: true },
    { icon: <FaUsers />, label: "Passengers", value: 2, border: true },
    { icon: <FaCogs />, label: "Transmission", value: "Auto", border: true },
    {
      icon: <FaSuitcaseRolling />,
      label: "Luggage",
      value: "1 Bag",
      border: true,
    },
    { icon: <FaUser />, label: "Age", value: 27 },
  ];

  const specs2 = [
    { icon: <FaCarSide />, label: "Doors", value: 4, border: true },
    { icon: <FaUsers />, label: "Passengers", value: 4, border: true },
    { icon: <FaCogs />, label: "Transmission", value: "Auto", border: true },
    {
      icon: <FaSuitcaseRolling />,
      label: "Luggage",
      value: "2 Bag",
      border: true,
    },
    { icon: <FaUser />, label: "Age", value: 25 },
  ];

  const specs3 = [
    { icon: <FaCarSide />, label: "Doors", value: 2, border: true },
    { icon: <FaUsers />, label: "Passengers", value: 4, border: true },
    { icon: <FaCogs />, label: "Transmission", value: "Auto", border: true },
    {
      icon: <FaSuitcaseRolling />,
      label: "Luggage",
      value: "1 Bag",
      border: true,
    },
    { icon: <FaUser />, label: "Age", value: 30 },
  ];

  const SlideContent = ({ backgroundImage, title, price }) => (
    <div
      className="hFull w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mxw flex items-center justify-between">
        {/* left side content  */}
        <div className="h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/bugatti-mistral.jpg')` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 text-white ">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="uppercase text-sm mb-2 tracking-[1rem] flex gap-5 items-center justify-center orange"
            >
              <p className="w-2 h-2 rounded-full bgOrange"></p>
              Economy
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-6xl font-bold mb-4"
            >
              {title}
            </h1>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg mb-6">
              Reserve now and get the best offer
              <span className="font-bold orange ml-5 text-2xl">${price}</span>
              /DAY
            </p>
            <div className="flex gap-5 justify-center">
              <Link to="/Services">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="fillBtn"
                  style={{
                    transform: "transition",
                    animationDuration: "1s",
                  }}
                >
                  View Details
                  <span className="ml-2 -rotate-45">&#8594;</span>
                </button>
              </Link>

              <Link to="/Services">
                <button
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="outlineBtn"
                >
                  Rent Now <span className="ml-2 -rotate-45">&#8594;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="hFull flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-pagination"></span>`;
          },
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContent
            backgroundImage={backgroundImage1}
            title="Bugatti Mistral W16"
            price={750}
            specs={specs1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            backgroundImage={backgroundImage2}
            title="Bentley Bentayga"
            price={750}
            specs={specs2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            backgroundImage={backgroundImage3}
            title="Rolls Royce Cullinan"
            price={750}
            specs={specs3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
