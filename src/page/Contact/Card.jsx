import {
  MdOutlineMailOutline,
  MdAddLocation,
  MdOutlineAddIcCall,
} from "react-icons/md";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 relative -top-12">
      {/* Email Card */}
      <div
        className="h-48 rounded-lg sBgBlack p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#F5B754] group"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <MdOutlineMailOutline className="text-4xl text-[#F5B754] group-hover:text-[#1C1818] transition-all duration-300 ease-in-out" />
        <h2 className="text-2xl font-bold text-white group-hover:text-[#1C1818] transition-all duration-300 ease-in-out">
          Email us
        </h2>
        <p className="tBlack group-hover:text-[#1C1818]">info@swiftrent.com</p>
        <MdOutlineMailOutline className="text-8xl text-slate-300 absolute bottom-0 right-2 opacity-15 transform translate-x-2 translate-y-2 group-hover:text-slate-500" />
      </div>

      {/* Address Card */}
      <div
        className="h-48 rounded-lg sBgBlack p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#F5B754] group"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <MdAddLocation className="text-4xl text-[#F5B754] group-hover:text-[#1C1818] transition-all duration-300 ease-in-out" />
        <h2 className="text-2xl font-bold text-white group-hover:text-[#1C1818]">
          Our address
        </h2>
        <p className="tBlack group-hover:text-[#1C1818]">
          Dhaka, Banani Water Tower, Office 123
        </p>
        <MdAddLocation className="text-8xl text-slate-300 absolute bottom-0 right-2 opacity-15 transform translate-x-2 translate-y-2 group-hover:text-slate-500" />
      </div>

      {/* Opening Hours Card */}
      <div
        className="h-48 rounded-lg sBgBlack p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#F5B754] group relative"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <CiClock1 className="text-4xl text-[#F5B754] group-hover:text-[#1C1818] transition-all duration-300 ease-in-out" />
        <h2 className="text-2xl font-bold text-white group-hover:text-[#1C1818]">
          Opening Hours
        </h2>
        <p className="tBlack group-hover:text-[#1C1818] transition-all duration-300 ease-in-out">
          Mon-Sun: 8 AM - 7 PM
        </p>

        <CiClock1 className="text-8xl text-slate-300 absolute bottom-0 right-0 opacity-15 transform translate-x-2 translate-y-2 group-hover:text-slate-500" />
      </div>

      {/* Call Us Card */}
      <div
        className="h-48 rounded-lg bg-[#F5B754] p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group relative"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <MdOutlineAddIcCall className="text-4xl text-[#1C1818] transition-all duration-300 ease-in-out" />
        <h2 className="text-2xl font-bold text-[#1C1818]">Call us</h2>
        <p className="text-[#1C1818]">+971 52-333-4444</p>
        <MdOutlineAddIcCall className="text-8xl text-[#1C1818]  absolute -bottom-8 right-2   opacity-15" />
      </div>
    </div>
  );
};

export default Card;
