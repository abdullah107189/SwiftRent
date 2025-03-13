// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./herSection.css";
import { Pagination, Autoplay } from "swiper/modules";
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
        {/* first slider  */}
        <SwiperSlide>
          <div
            className="hFull bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage1})`,
            }}
          >
            <div className="mxw flex items-center justify-between">
              {/* left side content  */}
              <div className=" h-screen flex items-center">
                {/* Background Image (Replace with your Bugatti image) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/bugatti-mistral.jpg')` }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 text-white p-8">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="uppercase text-sm mb-2 tracking-[1rem] flex gap-5 items-center orange"
                  >
                    <p className="w-2 h-2 rounded-full bgOrange"></p>
                    Economy
                  </div>
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-6xl font-bold mb-4"
                  >
                    Bugatti Mistral W16
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="text-lg mb-6"
                  >
                    Reserve now and get the best offer
                    <span className="font-bold orange ml-5 text-2xl">$750</span>
                    /DAY
                  </p>
                  <div className="flex gap-5 ">
                    <button
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="fillBtn"
                    >
                      View Details
                      <span className="ml-2 -rotate-45">&#8594;</span>
                    </button>

                    <button
                      data-aos="fade-up"
                      data-aos-delay="600"
                      className="outlineBtn"
                    >
                      Rent Now <span className="ml-2 -rotate-45">&#8594;</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* right side content  */}
              <div
                data-aos="fade-left"
                data-aos-delay="700"
                className="bg-[#1b1b1b] rounded-2xl p-10 w-[400px] z-10"
              >
                {specs1.map((spec, index) => (
                  <div
                    key={index}
                    className={`${
                      spec.border == true
                        ? " border-b border-[#999]/10"
                        : "border-none"
                    } flex items-center py-3 justify-between border-b border-[#999]/10 last:mb-0`}
                  >
                    <div className="flex items-center">
                      <span className="bg-[#f5b754]/10 p-2 orange rounded-full mr-3 text-lg">
                        {spec.icon}
                      </span>
                      <span className="tBlack">{spec.label}</span>
                    </div>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* second slider  */}
        <SwiperSlide>
          <div
            className="hFull bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
            }}
          >
            <div className="mxw flex items-center justify-between">
              {/* left side content  */}
              <div className=" h-screen flex items-center">
                {/* Background Image (Replace with your Bugatti image) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/bugatti-mistral.jpg')` }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 text-white p-8">
                  <div className="uppercase text-sm mb-2 tracking-[1rem] flex gap-5 items-center orange">
                    <p className="w-2 h-2 rounded-full bgOrange"></p>
                    Economy
                  </div>
                  <h1 className="text-6xl font-bold mb-4">Bentley Bentayga</h1>
                  <p className="text-lg mb-6">
                    Reserve now and get the best offer
                    <span className="font-bold orange ml-5 text-2xl">$750</span>
                    /DAY
                  </p>
                  <div className="flex gap-5 ">
                    <button className="fillBtn">
                      View Details
                      <span className="ml-2 -rotate-45">&#8594;</span>
                    </button>

                    <button className="outlineBtn">
                      Rent Now <span className="ml-2 -rotate-45">&#8594;</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* right side content  */}
              <div className="bg-[#1b1b1b] rounded-2xl p-10 w-[400px] z-10">
                {specs2.map((spec, index) => (
                  <div
                    key={index}
                    className={`${
                      spec.border == true
                        ? " border-b border-[#999]/10"
                        : "border-none"
                    } flex items-center py-3 justify-between border-b border-[#999]/10 last:mb-0`}
                  >
                    <div className="flex items-center">
                      <span className="bg-[#f5b754]/10 p-2 orange rounded-full mr-3 text-lg">
                        {spec.icon}
                      </span>
                      <span className="tBlack">{spec.label}</span>
                    </div>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* third slider  */}
        <SwiperSlide>
          <div
            className="hFull bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage3})`,
            }}
          >
            <div className="mxw flex items-center justify-between">
              {/* left side content  */}
              <div className=" h-screen flex items-center">
                {/* Background Image (Replace with your Bugatti image) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/bugatti-mistral.jpg')` }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 text-white p-8">
                  <div className="uppercase text-sm mb-2 tracking-[1rem] flex gap-5 items-center orange">
                    <p className="w-2 h-2 rounded-full bgOrange"></p>
                    Economy
                  </div>
                  <h1 className="text-6xl font-bold mb-4">
                    Rolls Royce Cullinan
                  </h1>
                  <p className="text-lg mb-6">
                    Reserve now and get the best offer
                    <span className="font-bold orange ml-5 text-2xl">$750</span>
                    /DAY
                  </p>
                  <div className="flex gap-5 ">
                    <button className="fillBtn">
                      View Details
                      <span className="ml-2 -rotate-45">&#8594;</span>
                    </button>

                    <button className="outlineBtn">
                      Rent Now <span className="ml-2 -rotate-45">&#8594;</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* right side content  */}
              <div className="bg-[#1b1b1b] rounded-2xl p-10 w-[400px] z-10">
                {specs3.map((spec, index) => (
                  <div
                    key={index}
                    className={`${
                      spec.border == true
                        ? " border-b border-[#999]/10"
                        : "border-none"
                    } flex items-center py-3 justify-between border-b border-[#999]/10 last:mb-0`}
                  >
                    <div className="flex items-center">
                      <span className="bg-[#f5b754]/10 p-2 orange rounded-full mr-3 text-lg">
                        {spec.icon}
                      </span>
                      <span className="tBlack">{spec.label}</span>
                    </div>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
