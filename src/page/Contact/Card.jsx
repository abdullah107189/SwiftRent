import {
  MdOutlineMailOutline,
  MdAddLocation,
  MdOutlineAddIcCall,
} from 'react-icons/md';
import { CiClock1 } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Card = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 py-16">
      {/* Email Card */}
      <div
        className="h-48 rounded-lg sBgBlack p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#F5B754] group"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <MdOutlineMailOutline className="text-4xl text-[#F5B754] group-hover:text-[#1C1818]" />
        <h2 className="text-2xl font-bold text-white group-hover:text-[#1C1818]">
          Email us
        </h2>
        <p className="tBlack group-hover:text-[#1C1818]">info@renax.com</p>
      </div>

      {/* Address Card */}
      <div
        className="h-48 rounded-lg sBgBlack p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#F5B754] group"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <MdAddLocation className="text-4xl text-[#F5B754] group-hover:text-[#1C1818]" />
        <h2 className="text-2xl font-bold text-white group-hover:text-[#1C1818]">
          Our address
        </h2>
        <p className="tBlack group-hover:text-[#1C1818]">
          Dhaka, Banani Water Tower, Office 123
        </p>
      </div>

      {/* Opening Hours Card */}
      <div
        className="h-48 rounded-lg sBgBlack p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-[#F5B754] group"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <CiClock1 className="text-4xl text-[#F5B754] group-hover:text-[#1C1818]" />
        <h2 className="text-2xl font-bold text-white group-hover:text-[#1C1818]">
          Opening Hours
        </h2>
        <p className="tBlack group-hover:text-[#1C1818]">
          Mon-Sun: 8 AM - 7 PM
        </p>
      </div>

      {/* Call Us Card */}
      <div
        className="h-48 rounded-lg bg-[#F5B754] p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <MdOutlineAddIcCall className="text-4xl text-[#1C1818]" />
        <h2 className="text-2xl font-bold text-[#1C1818]">Call us</h2>
        <p className="text-[#1C1818]">+971 52-333-4444</p>
      </div>
    </div>
  );
};

export default Card;
