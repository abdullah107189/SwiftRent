import React from "react";
import { FaTag } from "react-icons/fa"; // Importing FaTag from react-icons
import { Link, useNavigate } from "react-router-dom";

const NumberCard = ({ _id, name, image, number, brand, price }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const bookingDetails = {
      _id,
      name,
      image,
      brand,
      price,
    };
    navigate(`/book-auto`, { state: { bookingDetails } });
  };

  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden group dark:border border-[#999]/20 shadow-lg dark:shadow-gray-900">
      {/* Image Section */}
      <div className="relative w-full h-[65%] rounded-t-3xl overflow-hidden transition-transform duration-300 hover:scale-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Bottom Dark Gradient Overlay */}
      <div className="absolute bottom-[35%] left-0 w-full h-[35%] bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

      <div className="flex items-center absolute bottom-[35%] left-0">
        <div className="relative p-4 rounded-[0_40px_0_0] fBgBlack">
          <div className="w-[60px] h-[60px] leading-[60px] border border-[#F5B754] bg-transparent rounded-full overflow-hidden dark:text-white font-bold text-[14px] text-center group-hover:bg-[#F5B754] group-hover:text-[#1b1b1b]">
            {number}
          </div>
          <div className="absolute -top-[20px] -left-[4px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
            >
              <path d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"></path>
            </svg>
          </div>
          <div className="absolute -bottom-[0px] -right-[22px] rotate-[-90deg]">
            <svg
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-current text-[#f8f9fa] dark:text-[#1b1b1b]"
            >
              <path d="M11 1.55e-06L0 0L2.38e-07 11C1.66e-07 4.92 4.92 1.62e-06 11 1.55e-06Z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 pb-7 dark:text-white relative fBgBlack rounded-b-3xl">
        <h2 className="text-lg font-bold">{name}</h2>

        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <p className="flex items-center">
            <FaTag className="mr-2" /> {brand}
          </p>
          <p className="flex items-center">
            <i className="fas fa-dollar-sign mr-2"></i>
            <span className=" font-semibold flex items-center justify-center gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-coin-taka"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.211 4.384a2 2 0 0 0 -2.683 -.895l-.553 .277a1 1 0 0 0 .894 1.788l.553 -.276l-.001 1.382h-.999a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h.999l.001 3a3 3 0 0 0 2.824 2.995l.176 .005h.5a3.5 3.5 0 0 0 3.5 -3.5v-.5a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .876 .876l.032 .002l-.02 .057a1.5 1.5 0 0 1 -1.395 .948h-.5a1 1 0 0 1 -1 -1l-.001 -3h4.001a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-4.001l.001 -1.382a2 2 0 0 0 -.136 -.725l-.075 -.17z" />
                </svg>
              </span>
              {price}
            </span>
            <span className="text-sm text-gray-400 ml-1">/ Day</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-4 justify-center">
          <Link to={`/car-details/${_id}`} className="fillBtn">
            View Details
          </Link>
          <button onClick={handleBookNow} className="outlineBtn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberCard;
