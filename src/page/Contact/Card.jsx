import { MdOutlineMailOutline, MdOutlineAddIcCall } from "react-icons/md";

import { IoLocationOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 px-4 relative -top-20 ">
      {/* Email Card */}

      <div className="transition delay-150 duration-200 ease-in-out hover:-translate-y-4 ">
        <div
          className="col-lg-3 col-md-6 animate-box fadeInUp animated overflow-hidden  "
          data-animate-effect="fadeInUp"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="item w-full h-48 sBgBlack px-6 py-10 rounded-2xl  hover:bg-[#F5B754] transition-all duration-100 ease-in-out transform group delay-100">
            {/* Icon */}
            <MdOutlineMailOutline className="text-4xl orange delay-100 group-hover:text-[#1C1818] transition-all duration-100 ease-in-out" />

            {/* Title */}
            <h5 className="text-2xl font-bold  group-hover:text-[#1C1818] delay-100">
              Email us
            </h5>

            {/* Email Address */}
            <p className="tBlack group-hover:text-[#1C1818] delay-100">
              info@renax.com
            </p>

            {/* Floating Icon */}
            <MdOutlineMailOutline className="w-40  h-40 text-slate-500 absolute -bottom-10 -right-8 opacity-10 " />
          </div>
        </div>
      </div>
      {/* Address Card */}

      <div className="transition  delay-150 duration-200 ease-in-out hover:-translate-y-4  ">
        <div
          className="col-lg-3 col-md-6 animate-box fadeInUp animated overflow-hidden  "
          data-animate-effect="fadeInUp"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="item w-full h-48 sBgBlack px-6 py-10 rounded-2xl  hover:bg-[#F5B754] transition-all duration-100 ease-in-out transform group delay-100">
            {/* Icon */}
            <IoLocationOutline className="text-4xl orange delay-150 group-hover:text-[#1C1818] transition-all duration-100 ease-in-out" />

            {/* Title */}
            <h5 className="text-2xl font-bold  group-hover:text-[#1C1818] delay-100">
              Our address
            </h5>

            {/* Email Address */}
            <p className="tBlack group-hover:text-[#1C1818] delay-100">
              Dhaka, Banani Water Tower, Office 123
            </p>

            {/* Floating Icon */}
            <IoLocationOutline className="w-40  h-40 text-slate-500 absolute -bottom-8 -right-10 opacity-10 " />
          </div>
        </div>
      </div>

      {/* Opening Hours Card */}

      <div className="transition  delay-150 duration-200 ease-in-out hover:-translate-y-4  ">
        <div
          className="col-lg-3 col-md-6 animate-box fadeInUp animated overflow-hidden  "
          data-animate-effect="fadeInUp"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="item w-full h-48 sBgBlack px-6 py-10 rounded-2xl  hover:bg-[#F5B754] transition-all duration-100 ease-in-out transform group delay-100">
            {/* Icon */}
            <CiClock1 className="text-4xl orange delay-100 group-hover:text-[#1C1818] transition-all duration-100 ease-in-out" />

            {/* Title */}
            <h5 className="text-2xl font-bold  group-hover:text-[#1C1818] delay-100">
              Opening Hours
            </h5>

            {/* Email Address */}
            <p className="tBlack group-hover:text-[#1C1818] delay-100">
              Mon-Sun: 8 AM - 7 PM
            </p>

            {/* Floating Icon */}
            <CiClock1 className="w-40  h-40 text-slate-500 absolute -bottom-8 -right-10 opacity-10 " />
          </div>
        </div>
      </div>

      {/* Call Us Card */}

      <div className="transition  delay-150 duration-200 ease-in-out hover:-translate-y-4 ">
        <div
          className="col-lg-3 col-md-6 animate-box fadeInUp animated overflow-hidden  "
          data-animate-effect="fadeInUp"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="item w-full h-48 px-6 py-10 rounded-2xl  bg-[#F5B754] transition-all duration-100 ease-in-out transform group delay-100">
            {/* Icon */}
            <MdOutlineAddIcCall className="text-4xl sBlack delay-100  transition-all duration-100 ease-in-out" />

            {/* Title */}
            <h5 className="text-2xl font-bold sBlack delay-100">Call us</h5>

            {/* Email Address */}
            <p className="sBlack delay-100">+971 52-333-4444</p>

            {/* Floating Icon */}
            <MdOutlineAddIcCall className="w-40  h-40 text-slate-500 absolute -bottom-10 -right-10 opacity-10 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
